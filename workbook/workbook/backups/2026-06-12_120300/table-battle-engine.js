/**
 * Table battle engine for the four-corner tabletop layout.
 * Cards are placed on a shared board with visible lanes for attack, defense, and traps.
 */

class TableBattleEngine {
  constructor(cardTemplates = [], options = {}) {
    this.templates = cardTemplates;
    this.options = {
      handLimit: 7,
      drawPerTurn: 2,
      maxPlayers: 4,
      ...options,
    };

    this.players = [];
    this.turnIndex = 0;
    this.round = 1;
    this.log = [];
    this.matchOver = false;
  }

  createPlayer({ id, name, isAI = false, seat = 0, deckCountMap = {}, hp = 30 } = {}) {
    const deck = [];

    this.templates.forEach((card) => {
      const count = deckCountMap[card.id] !== undefined ? deckCountMap[card.id] : 2;
      for (let i = 0; i < count; i += 1) {
        deck.push({ ...card, instanceId: Math.random().toString(36).slice(2, 10) });
      }
    });

    this.shuffle(deck);

    return {
      id: id || `player_${Math.random().toString(36).slice(2, 8)}`,
      name: name || (isAI ? "AI" : "Player"),
      seat,
      isAI,
      hp,
      maxHp: hp,
      armor: 0,
      energy: 3,
      maxEnergy: 3,
      hand: [],
      deck,
      discardPile: [],
      board: {
        front: {
          traps: [],
          boosts: [],
        },
        attack: [],
        defense: [],
        revealed: [],
        history: [],
      },
      statuses: {
        poison: 0,
        vulnerable: 0,
        shieldNext: 0,
      },
      stats: {
        damageDealt: 0,
        damageTaken: 0,
        cardsPlayed: 0,
      },
    };
  }

  addPlayer(playerConfig) {
    if (this.players.length >= this.options.maxPlayers) {
      throw new Error("Maximum player count reached.");
    }

    const player = this.createPlayer(playerConfig);
    this.players.push(player);
    return player;
  }

  startMatch() {
    this.matchOver = false;
    this.turnIndex = 0;
    this.round = 1;
    this.log = [];

    this.players.forEach((player, index) => {
      player.seat = index;
      player.hp = player.maxHp;
      player.armor = 0;
      player.energy = player.maxEnergy;
      player.hand = [];
      player.discardPile = [];
      player.board = {
        front: {
          traps: [],
          boosts: [],
        },
        attack: [],
        defense: [],
        revealed: [],
        history: [],
      };
      player.statuses = {
        poison: 0,
        vulnerable: 0,
        shieldNext: 0,
      };
      player.stats = {
        damageDealt: 0,
        damageTaken: 0,
        cardsPlayed: 0,
      };

      this.shuffle(player.deck);
      this.drawCards(player, this.options.drawPerTurn + 2);
    });

    this.pushLog(`Match started with ${this.players.length} players.`);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  pushLog(message) {
    this.log.push({
      round: this.round,
      turnIndex: this.turnIndex,
      message,
      ts: Date.now(),
    });
  }

  getAlivePlayers() {
    return this.players.filter((player) => player.hp > 0);
  }

  getCurrentPlayer() {
    return this.players[this.turnIndex] || null;
  }

  getNextAliveIndex(fromIndex) {
    if (this.players.length === 0) return -1;

    for (let step = 1; step <= this.players.length; step += 1) {
      const idx = (fromIndex + step) % this.players.length;
      if (this.players[idx].hp > 0) return idx;
    }
    return -1;
  }

  getOpponentTargets(player) {
    return this.players.filter((candidate) => candidate.id !== player.id && candidate.hp > 0);
  }

  drawCards(player, count = 1) {
    for (let i = 0; i < count; i += 1) {
      if (player.hand.length >= this.options.handLimit) break;

      if (player.deck.length === 0) {
        if (player.discardPile.length === 0) break;
        player.deck = [...player.discardPile];
        player.discardPile = [];
        this.shuffle(player.deck);
      }

      const card = player.deck.pop();
      if (card) player.hand.push(card);
    }
  }

  startTurn() {
    if (this.matchOver) return null;

    const player = this.getCurrentPlayer();
    if (!player || player.hp <= 0) {
      this.advanceTurn();
      return this.startTurn();
    }

    this.cleanupVisibleBoard(player);

    player.energy = player.maxEnergy;
    if (player.statuses.poison > 0) {
      this.applyDamage(player, player.statuses.poison, null, {
        source: "poison",
        ignoreArmor: true,
      });
    }

    this.drawCards(player, this.options.drawPerTurn);
    this.pushLog(`${player.name} begins turn.`);

    if (player.isAI) {
      return this.runAITurn(player);
    }

    return player;
  }

  cleanupVisibleBoard(player) {
    if (player.board.attack.length > 0) {
      player.board.history.push(...player.board.attack.map((entry) => ({ ...entry, lane: "history" })));
      player.board.attack = [];
    }

    if (player.board.revealed.length > 0) {
      player.board.history.push(...player.board.revealed.map((entry) => ({ ...entry, lane: "history" })));
      player.board.revealed = [];
    }

    const stillAliveTraps = [];
    player.board.front.traps.forEach((trap) => {
      if (trap.expiresRound && trap.expiresRound <= this.round) {
        player.board.history.push({ ...trap, lane: "history", expired: true });
      } else {
        stillAliveTraps.push(trap);
      }
    });
    player.board.front.traps = stillAliveTraps;

    const historyLimit = 12;
    if (player.board.history.length > historyLimit) {
      player.board.history = player.board.history.slice(-historyLimit);
    }
  }

  playCard(playerId, handIndex, targetId = null) {
    if (this.matchOver) return { ok: false, reason: "match_over" };

    const player = this.players.find((candidate) => candidate.id === playerId);
    if (!player) return { ok: false, reason: "player_not_found" };
    if (player !== this.getCurrentPlayer()) return { ok: false, reason: "not_your_turn" };
    if (handIndex < 0 || handIndex >= player.hand.length) return { ok: false, reason: "invalid_card" };

    const card = player.hand[handIndex];
    if (card.cost > player.energy) return { ok: false, reason: "no_energy" };

    player.energy -= card.cost;
    player.hand.splice(handIndex, 1);
    player.discardPile.push(card);
    player.stats.cardsPlayed += 1;

    const result = this.commitCard(player, card, targetId);
    this.checkMatchOver();

    return { ok: true, card, result };
  }

  commitCard(player, card, targetId = null) {
    const cardCopy = {
      ...card,
      placedRound: this.round,
      placedBy: player.id,
    };

    switch (card.type) {
      case "Attack":
        return this.commitAttack(player, cardCopy, targetId);

      case "Defense":
        return this.commitDefense(player, cardCopy);

      case "Trap":
        return this.setTrap(player, cardCopy);

      case "Heal":
        return this.healPlayer(player, card.effect?.heal || 2);

      case "Debuff":
        return this.applyDebuff(player, cardCopy, targetId);

      case "Utility":
        return this.applyUtility(player, cardCopy);

      default:
        this.pushLog(`${player.name} plays ${card.name}.`);
        return { type: "generic" };
    }
  }

  commitAttack(player, card, targetId = null) {
    const target = targetId
      ? this.players.find((candidate) => candidate.id === targetId && candidate.hp > 0)
      : this.getOpponentTargets(player)[0];

    if (!target) {
      this.pushLog(`${player.name} has no target for ${card.name}.`);
      return { type: "attack", message: "No target found." };
    }

    const trapResult = this.triggerTrap(target, player, card);
    if (player.hp <= 0) {
      return {
        type: "attack",
        targetId: target.id,
        trapResult,
        damageResult: { type: "damage", damage: 0, defeated: true, interrupted: true },
      };
    }

    const damageResult = this.applyDamage(target, card.effect?.damage || 1, player, {
      source: card.name,
      cardType: "Attack",
    });

    const laneEntry = {
      ...card,
      lane: "attack",
      targetId: target.id,
      resolved: true,
      trapResult,
      damageResult,
    };
    player.board.attack.push(laneEntry);
    this.pushLog(`${player.name} attacks ${target.name} with ${card.name}.`);

    return {
      type: "attack",
      targetId: target.id,
      trapResult,
      damageResult,
    };
  }

  commitDefense(player, card) {
    const block = card.effect?.block || 2;
    player.board.defense.push({
      ...card,
      lane: "defense",
      block,
      faceDown: true,
      active: false,
    });

    this.pushLog(`${player.name} sets a hidden defense with ${card.name}.`);
    return { type: "defense", armorGained: 0, hidden: true };
  }

  setTrap(player, card) {
    const trap = {
      ...card,
      lane: "trap",
      faceDown: true,
      active: true,
      expiresRound: this.round + 2,
    };

    player.board.front.traps.push(trap);
    this.pushLog(`${player.name} sets a hidden trap.`);
    return { type: "trap", trap: trap.name };
  }

  applyDebuff(player, card, targetId = null) {
    const target = targetId
      ? this.players.find((candidate) => candidate.id === targetId && candidate.hp > 0)
      : this.getOpponentTargets(player)[0];

    if (!target) {
      this.pushLog(`${player.name} has no target for ${card.name}.`);
      return { type: "debuff", message: "No target found." };
    }

    const effect = card.effect || {};
    if (effect.vulnerable) target.statuses.vulnerable += effect.vulnerable;
    if (effect.poison) target.statuses.poison += effect.poison;

    this.pushLog(`${target.name} receives ${card.name}.`);
    return { type: "debuff", targetId: target.id };
  }

  applyUtility(player, card) {
    const effect = card.effect || {};
    if (effect.draw) this.drawCards(player, effect.draw);
    if (effect.energy) player.energy += effect.energy;

    player.board.front.boosts.push({
      ...card,
      lane: "boost",
      faceDown: false,
      active: true,
    });

    this.pushLog(`${player.name} uses ${card.name}.`);
    return { type: "utility", effect };
  }

  triggerTrap(defender, attacker, attackCard) {
    if (!defender.board.front.traps.length) return null;

    const trap = defender.board.front.traps.shift();
    defender.board.revealed.push({
      ...trap,
      faceDown: false,
      revealed: true,
      revealedBy: attacker.id,
      revealedOnAttack: attackCard.id,
    });

    const effect = trap.effect || {};
    const summary = {
      trap: trap.name,
      damage: 0,
      poison: 0,
      vulnerable: 0,
    };

    if (effect.damage) {
      const damageOutcome = this.applyDamage(attacker, effect.damage, defender, {
        source: trap.name,
        cardType: "Trap",
      });
      summary.damage = damageOutcome.damage;
    }

    if (effect.poison) {
      attacker.statuses.poison += effect.poison;
      summary.poison = effect.poison;
    }

    if (effect.vulnerable) {
      attacker.statuses.vulnerable += effect.vulnerable;
      summary.vulnerable = effect.vulnerable;
    }

    this.pushLog(`${defender.name} reveals ${trap.name}!`);
    return summary;
  }

  applyDamage(target, amount, sourcePlayer = null, meta = {}) {
    if (!target || target.hp <= 0) {
      return { type: "damage", damage: 0, blocked: 0 };
    }

    let damage = amount;
    if (target.statuses.vulnerable > 0) {
      damage += target.statuses.vulnerable;
    }

    const hiddenDefense = target.board.defense.find((entry) => entry.faceDown);
    if (hiddenDefense) {
      hiddenDefense.faceDown = false;
      hiddenDefense.active = true;
      target.armor += hiddenDefense.block || 0;
      this.pushLog(`${target.name} reveals ${hiddenDefense.name}.`);
    }

    if (target.statuses.shieldNext > 0 && meta.source !== "poison") {
      target.statuses.shieldNext -= 1;
      this.pushLog(`${target.name} blocks the hit with a shield.`);
      return { type: "damage", damage: 0, blocked: amount };
    }

    if (!meta.ignoreArmor) {
      const blockedByArmor = Math.min(target.armor, damage);
      damage -= blockedByArmor;
      target.armor -= blockedByArmor;
    }

    target.hp -= damage;
    target.stats.damageTaken += damage;

    if (sourcePlayer) {
      sourcePlayer.stats.damageDealt += damage;
    }

    if (damage > 0) {
      this.pushLog(`${target.name} takes ${damage} damage.`);
    }

    if (target.hp <= 0) {
      target.hp = 0;
      this.pushLog(`${target.name} is defeated.`);
    }

    return {
      type: "damage",
      damage,
      defeated: target.hp <= 0,
    };
  }

  healPlayer(player, amount) {
    const before = player.hp;
    player.hp = Math.min(player.maxHp, player.hp + amount);
    const healed = player.hp - before;
    this.pushLog(`${player.name} heals ${healed} HP.`);
    return { type: "heal", healed };
  }

  discardHand(player) {
    while (player.hand.length > 0) {
      player.discardPile.push(player.hand.pop());
    }
  }

  endTurn() {
    const player = this.getCurrentPlayer();
    if (player) {
      this.discardHand(player);
      this.pushLog(`${player.name} ends turn.`);
    }

    this.advanceTurn();
    return this.startTurn();
  }

  advanceTurn() {
    if (this.matchOver) return;

    const alive = this.getAlivePlayers();
    if (alive.length <= 1) {
      this.checkMatchOver();
      return;
    }

    const start = this.turnIndex;
    const next = this.getNextAliveIndex(start);
    if (next <= start) {
      this.round += 1;
    }

    this.turnIndex = next >= 0 ? next : 0;
  }

  checkMatchOver() {
    const alive = this.getAlivePlayers();
    if (alive.length <= 1) {
      this.matchOver = true;
      const winner = alive[0];
      this.pushLog(winner ? `${winner.name} wins the match.` : "Match ended with no winner.");
      return winner || null;
    }
    return null;
  }

  runAITurn(player) {
    const decision = this.chooseAITargetAndCard(player);
    if (!decision) {
      this.endTurn();
      return { ok: true, action: "skip" };
    }

    const outcome = this.playCard(player.id, decision.cardIndex, decision.targetId);
    this.endTurn();
    return outcome;
  }

  chooseAITargetAndCard(player) {
    if (player.hand.length === 0) return null;

    const attackIndex = player.hand.findIndex((card) => card.type === "Attack");
    const defenseIndex = player.hand.findIndex((card) => card.type === "Defense");
    const trapIndex = player.hand.findIndex((card) => card.type === "Trap");
    const healIndex = player.hand.findIndex((card) => card.type === "Heal");
    const debuffIndex = player.hand.findIndex((card) => card.type === "Debuff");

    if (player.hp <= Math.floor(player.maxHp * 0.35) && healIndex >= 0) {
      return { cardIndex: healIndex, targetId: player.id };
    }

    if (player.armor <= 1 && defenseIndex >= 0) {
      return { cardIndex: defenseIndex, targetId: player.id };
    }

    if (trapIndex >= 0 && player.board.traps.length < 2) {
      return { cardIndex: trapIndex, targetId: player.id };
    }

    if (attackIndex >= 0) {
      const target = this.getOpponentTargets(player)[0];
      return target ? { cardIndex: attackIndex, targetId: target.id } : null;
    }

    if (debuffIndex >= 0) {
      const target = this.getOpponentTargets(player)[0];
      return target ? { cardIndex: debuffIndex, targetId: target.id } : null;
    }

    if (healIndex >= 0) {
      return { cardIndex: healIndex, targetId: player.id };
    }

    if (defenseIndex >= 0) {
      return { cardIndex: defenseIndex, targetId: player.id };
    }

    return null;
  }

  snapshot() {
    return {
      round: this.round,
      turnIndex: this.turnIndex,
      matchOver: this.matchOver,
      currentPlayerId: this.getCurrentPlayer()?.id || null,
      players: this.players.map((player) => ({
        id: player.id,
        name: player.name,
        seat: player.seat,
        isAI: player.isAI,
        hp: player.hp,
        maxHp: player.maxHp,
        armor: player.armor,
        energy: player.energy,
        handCount: player.hand.length,
        board: {
          front: {
            traps: player.board.front.traps.map((card) => ({ ...card })),
            boosts: player.board.front.boosts.map((card) => ({ ...card })),
          },
          attack: player.board.attack.map((card) => ({ ...card })),
          defense: player.board.defense.map((card) => ({ ...card })),
          revealed: player.board.revealed.map((card) => ({ ...card })),
          history: player.board.history.map((card) => ({ ...card })),
        },
        statuses: { ...player.statuses },
        stats: { ...player.stats },
      })),
      log: this.log.map((entry) => ({ ...entry })),
    };
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = TableBattleEngine;
} else {
  window.TableBattleEngine = TableBattleEngine;
}
