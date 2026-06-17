# 2026-06-16_before-hud-shop-command-workbook

## 備份目的

本備份是在調整手牌 HUD、商店浮動視窗、卡池空白卡過濾，以及建立 Excel 開發指令工作簿前建立。

## 備份檔案

- `player-window.html`
- `sample-cards.js`
- `backup-index.md`

## 本次修改摘要

- `sample-cards.js` 改為實際遊戲只啟用有圖資的卡牌，避免無圖卡看起來像空白卡。
- `player-window.html` 移除手牌 HUD 補空卡格的行為，只顯示玩家實際持有卡牌。
- 卡牌商店改成手牌 HUD 中的「商」小點，點擊後才開啟浮動商店視窗。
- 玩家資訊 HUD 搬到右側原商店位置，商店浮窗改靠近手牌 HUD。
- 商店購買、刷新、收成改跟隨目前真人操作玩家，而不是固定 P1。
- 建立 `D:\Codex\home_community_battle\doc\愛我家鄉_開發指令工作簿.xlsx`。

## 回復方式

若要回到修改前狀態，可將本資料夾中的檔案複製回：

- `D:\Codex\home_community_battle\player_window\player-window.html`
- `D:\Codex\home_community_battle\sample-cards.js`
- `D:\Codex\home_community_battle\workbook\backup-index.md`
