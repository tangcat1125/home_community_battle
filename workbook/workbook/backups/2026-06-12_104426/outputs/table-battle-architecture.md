# Table Battle Architecture

This version splits the project into three clear layers:

## 1. Battle Engine

File:

- [`table-battle-engine.js`](../table-battle-engine.js)

Responsibilities:

1. Manage 4 players.
2. Control turns, draw flow, damage, armor, poison, and traps.
3. Keep per-player board lanes for attack, defense, traps, revealed cards, and history.

## 2. Peer Monitor

File:

- [`peer.js`](../peer.js)

Responsibilities:

1. Provide a snapshot bridge for the UI.
2. Keep a clean separation between backend battle state and frontend rendering.
3. Make it easy to swap in real peer/network transport later.

## 3. Frontend Table UI

File:

- [`demo.html`](../demo.html)

Responsibilities:

1. Draw the tabletop as the base layer.
2. Render HUD as a second layer.
3. Put four players around the table like a mahjong seat layout.
4. Allow card placement, target selection, and inspection of visible opponent cards.

## Visual Rules

1. The table surface rotates with the current turn seat.
2. Seats reflow so the active player stays in the viewer's bottom position.
3. Attack and defense cards are shown face up.
4. Trap cards stay face down until triggered.
5. Clicking open board cards opens the inspector, which acts like a zoom view.

## Why This Is Better

1. The HUD no longer fights the table.
2. The battle log feels like a command center.
3. The layout is ready for real multiplayer synchronization later.
4. The card board already supports placement-style play rather than only instant effect resolution.
