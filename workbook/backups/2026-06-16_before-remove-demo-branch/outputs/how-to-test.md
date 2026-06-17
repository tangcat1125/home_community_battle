# How To Test

You now have two easy ways to test the battle engine.

## 1. Browser Demo

Open this file directly in your browser:

- [`D:\Codex\dev_tools\game_card_system\game_card_battle_system\demo.html`](D:\Codex\dev_tools\game_card_system\game_card_battle_system\demo.html)

What you can test there:

1. Start / restart a match.
2. Click cards in your hand to play them.
3. End your turn and watch AI players act.
4. See HP, armor, energy, and the event log update live.

## 2. Node Smoke Test

Run this in PowerShell from the project folder:

```powershell
node .\game_card_battle_system\smoke-test.js
```

If it works, you should see:

```text
Smoke test passed.
```

## What This Verifies

1. The module loads without syntax errors.
2. Players can be created and initialized.
3. Opening hands are drawn correctly.
4. Turn flow and end-turn logic work.

## Recommended Next Step

If you want, I can next make this demo a little more fun by adding:

1. Real targeting selection
2. Card animations
3. Team battle mode
4. A stronger AI
