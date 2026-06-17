# Player Window Design

This folder contains the player-facing window, separate from the battle control room.

## Location

- [`player_window/player-window.html`](../player_window/player-window.html)

## Purpose

1. Show the local player's hand and action controls.
2. Show only visible opponent information.
3. Keep the tabletop feel, but remove battle-room monitoring clutter.
4. Support card inspection through a zoom overlay.
5. Auto-deal cards on game start and on each turn.
6. Rotate the table surface with a reel-like motion when the active seat changes.

## Layout

1. Center tabletop with four seats.
2. Bottom seat is the player seat.
3. Side seats show opponent summaries.
4. Right side panel shows match info and the event log.
5. The table surface slowly rotates to give a reel-like motion.

## Interaction

1. Click a hand card to play it or mark it for targeting.
2. Click visible board cards to inspect them.
3. Use zoom to inspect the table without moving the HUD.
4. End turn to pass control to the next player or AI.
5. Cards are dealt automatically; there is no manual deal button.

## Relationship To Control Room

This window is intentionally lighter than the battle-room command deck.
It is meant for the player experience, while the control room remains a separate operational view.
