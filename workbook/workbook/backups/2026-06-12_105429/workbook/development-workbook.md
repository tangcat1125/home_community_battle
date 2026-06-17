# Development Workbook

Project root:

- [`D:\Codex\dev_tools\game_card_system\game_card_battle_system`](D:\Codex\dev_tools\game_card_system\game_card_battle_system)

## Working Rules

1. All active development notes live in `workbook/`.
2. Every safety snapshot must go into `workbook/backups/<timestamp>/`.
3. When an old file is revised, keep the previous version in a dated backup folder first.
4. All backup folders and backup files must be listed in `workbook/backup-index.md`.
5. Independent subsystems should stay in their own folders so they can be restored separately.

## Subsystem Layout

1. `battle-system.js` - older combat engine prototype.
2. `table-battle-engine.js` - current tabletop battle engine.
3. `peer.js` - monitoring bridge for battle snapshots.
4. `demo.html` - tabletop UI.
5. `sample-cards.js` - shared card definitions.
6. `smoke-test.js` - Node verification entry.

## Restore Procedure

1. Find the last safe timestamp in `workbook/backup-index.md`.
2. Copy the needed file back from `workbook/backups/<timestamp>/`.
3. Re-run `smoke-test.js`.
4. Update the workbook if the structure changes.

## Current Preference

We are developing the tabletop battle system as the main track, while keeping the older combat prototype available as a safety reference.
