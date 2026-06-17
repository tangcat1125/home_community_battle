/**
 * Battle system prototype for multiplayer / AI card combat.
 * Built on top of the original GameCardEngine idea, but centered on combat.
 */

class BattleCardEngine {
  constructor(cardTemplates = [], options = {}) {
    this.templates = cardTemplates;
    this.options = {
      handLimit: 6,
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

  createPlayer({ id, name, isAI = false, deckCountMap = {}, hp = 30 } = {}) {
    const deck = [];

    this.templates.forEach((card) => {
      const count = deckCountMap[card.id] !== undefined ? deckCountMap[card.id] : 2;
      for (let i = 0; i < count; i++) {
        deck.push({ ...card, instanceId: Math.random().toString(36).slice(2, 10) });
      }
    });

    this.shuffle(deck);

    return {
      id: id || `player_${Math.random().toString(36).slice(2, 8)}`,
      name: name || (isAI ? "AI" : "Player"),
      isAI,
      hp,
      maxHp: hp,
      armor: 0,
      energy: 3,
      maxEnergy: 3,
      hand: [],
      deck,
      discardPile: [],
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
    const player = this.createPlayer(playerConfig);
    this.players.push(player);
    return player;
  }

  startMatch() {
    this.matchOver = false;
    this.turnIndex = 0;
    this.round = 1;
    this.log = [];

    this.players.forEach((player) => {
      player.hp = player.maxHp;
      player.armor = 0;
      player.energy = player.maxEnergy;
      player.hand = [];
      player.discardPile = [];
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
      this.drawCards(player, this.options.drawPerTurn + 1);
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

    player.energy = player.maxEnergy;
    player.armor = Math.max(0, player.armor - 1);

    if (player.statuses.poison > 0) {
      this.applyDamage(player, player.statuses.poison, null, { ignoreArmor: true, source: "poison" });
    }

    this.drawCards(player, this.options.drawPerTurn);
    this.pushLog(`${player.name} begins turn.`);

    if (player.isAI) {
      return this.runAITurn(player);
    }

    return player;
  }

  playCard(playerId, handIndex, targetId = null) {
    if (this.matchOver) return { ok: false, reason: "match_over" };

    const player = this.players.find((p) => p.id === playerId);
    if (!player) return { ok: false, reason: "player_not_found" };
    if (player !== this.getCurrentPlayer()) return { ok: false, reason: "not_your_turn" };
    if (handIndex < 0 || handIndex >= player.hand.length) return { ok: false, reason: "invalid_card" };

    const card = player.hand[handIndex];
    if (card.cost > player.energy) return { ok: false, reason: "no_energy" };

    player.energy -= card.cost;
    player.hand.splice(handIndex, 1);
    player.discardPile.push(card);
    player.stats.cardsPlayed += 1;

    const result = this.resolveCardEffect(player, card, targetId);
    this.checkMatchOver();

    return { ok: true, card, result };
  }

  resolveCardEffect(player, card, targetId) {
    const effect = card.effect || {};
    const target = targetId ? this.players.find((p) => p.id === targetId) : this.getDefaultTarget(player);

    switch (card.type) {
      case "Attack":
        if (!target) return { type: "attack", message: "No target found." };
        return this.applyDamage(target, effect.damage || 1, player, { source: card.name });

      case "Defense":
        player.armor += effect.block || 2;
        if (effect.shieldNext) player.statuses.shieldNext += effect.shieldNext;
        this.pushLog(`${player.name} gains ${effect.block || 2} armor.`);
        return { type: "defense", armorGained: effect.block || 2 };

      case "Heal":
        return this.healPlayer(player, effect.heal || 2);

      case "Debuff":
        if (!target) return { type: "debuff", message: "No target found." };
        target.statuses.vulnerable += effect.vulnerable || 1;
        target.statuses.poison += effect.poison || 0;
        this.pushLog(`${target.name} receives debuff.`);
        return { type: "debuff", target: target.id };

      case "Utility":
        if (effect.draw) this.drawCards(player, effect.draw);
        if (effect.energy) player.energy += effect.energy;
        this.pushLog(`${player.name} uses utility card.`);
        return { type: "utility" };

      default:
        this.pushLog(`${player.name} plays ${card.name}.`);
        return { type: "generic" };
    }
  }

  getDefaultTarget(player) {
    const playerIndex = this.players.findIndex((p) => p.id === player.id);
    const targetIndex = this.getNextAliveIndex(playerIndex);
    return targetIndex >= 0 ? this.players[targetIndex] : null;
  }

  applyDamage(target, amount, sourcePlayer = null, meta = {}) {
    if (!target || target.hp <= 0) {
      return { type: "damage", damage: 0, blocked: 0 };
    }

    let damage = amount;
    if (sourcePlayer && sourcePlayer.statuses.vulnerable > 0) {
      damage += sourcePlayer.statuses.vulnerable;
    }
    if (target.statuses.shieldNext > 0 && meta.source !== "poison") {
      target.statuses.shieldNext -= 1;
      this.pushLog(`${target.name} blocks the hit with shield.`);
      return { type: "damage", damage: 0, blocked: amount };
    }

    const blockedByArmor = Math.min(target.armor, damage);
    damage -= blockedByArmor;
    target.armor -= blockedByArmor;
    target.hp -= damage;
    target.stats.damageTaken += damage;

    if (sourcePlayer) {
      sourcePlayer.stats.damageDealt += damage;
    }

    this.pushLog(`${target.name} takes ${damage} damage.`);
    if (target.hp <= 0) {
      target.hp = 0;
      this.pushLog(`${target.name} is defeated.`);
    }

    return {
      type: "damage",
      damage,
      blocked: blockedByArmor,
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
    let next = this.getNextAliveIndex(start);
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
    const healIndex = player.hand.findIndex((card) => card.type === "Heal");

    if (player.hp <= Math.floor(player.maxHp * 0.35) && healIndex >= 0) {
      return { cardIndex: healIndex, targetId: player.id };
    }

    if (player.armor <= 0 && defenseIndex >= 0) {
      return { cardIndex: defenseIndex, targetId: player.id };
    }

    if (attackIndex >= 0) {
      const target = this.getDefaultTarget(player);
      return target ? { cardIndex: attackIndex, targetId: target.id } : null;
    }

    if (healIndex >= 0) {
      return { cardIndex: healIndex, targetId: player.id };
    }

    if (defenseIndex >= 0) {
      return { cardIndex: defenseIndex, targetId: player.id };
    }

    return null;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = BattleCardEngine;
} else {
  window.BattleCardEngine = BattleCardEngine;
}
