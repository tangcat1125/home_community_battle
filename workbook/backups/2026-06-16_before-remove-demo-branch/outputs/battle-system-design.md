# Battle System Design Draft

This draft turns the original single-player card engine into a multiplayer combat system with optional AI players.

## Goals

1. Support 2 to 4 players.
2. Allow human or AI control for each player.
3. Make defense meaningful, not just "reduce damage".
4. Keep the engine data-driven so new cards can be added without rewriting the battle loop.

## Core Match Loop

1. Each player has a deck, hand, discard pile, HP, armor, energy, and statuses.
2. A match starts by shuffling every deck and drawing opening hands.
3. On a turn, the active player gains energy and draws cards.
4. The player plays one or more cards as long as energy allows.
5. The player ends the turn, discards remaining hand, and the next living player acts.
6. The match ends when only one player remains alive.

## Combat Model

### Attack

Deals direct damage to a target.

### Defense

Defense is split into two layers:

1. `Armor`: absorbs damage first and can persist for a short time.
2. `Shield Next`: blocks the next hit completely, then disappears.

This makes defense more interesting than a simple flat reduction.

### Heal

Restores HP but cannot exceed max HP.

### Debuff

Applies effects such as:

1. `Poison`: damage at the start of turn.
2. `Vulnerable`: increases incoming damage.

### Utility

Cards that help with tempo, such as drawing cards or restoring energy.

## Player Types

Each player can be one of:

1. `human`
2. `ai`

AI uses a simple priority system:

1. Heal when low HP.
2. Raise defense when armor is low.
3. Attack the next living opponent.
4. Fall back to utility or defense.

## Suggested First Card Set

1. `Strike`
2. `Shield Wall`
3. `First Aid`
4. `Poison Dart`
5. `Battle Focus`

## Why This Structure Works

1. The battle engine does not care whether a player is human or AI.
2. The card effect system is data-driven, so balance changes are mostly content changes.
3. Defense has multiple layers, which creates better tactical choices.
4. Multiplayer works without changing the turn loop.

## Next Steps

1. Add a simple HTML test harness.
2. Add end-of-turn status triggers for poison, regen, and burn.
3. Add targeting rules for team battles or free-for-all.
4. Add a richer AI decision layer.
