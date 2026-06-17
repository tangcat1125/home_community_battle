# 2026-06-17_before-main-hud-and-card-system-lock

- 備份時間：2026-06-17
- 備份目的：在簡化右主 HUD，並將主題卡區、商店鎖定到手牌放置系統前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
- 本輪修改摘要：
  - 右主 HUD 改為只呈現玩家主要訊息。
  - 右主 HUD 上方新增「營運中的主題」，標示正在賺錢、虧損、導入旅客或流失旅客。
  - 移除舊右側總資訊 HUD 的顯示流程，避免資料總表再次出現。
  - 主題卡區與卡牌商店改為跟隨手牌放置系統：手牌收合時一起隱藏，手牌展開時才可操作。
