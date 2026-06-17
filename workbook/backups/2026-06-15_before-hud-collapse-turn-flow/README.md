# 2026-06-15_before-hud-collapse-turn-flow

## 備份目的

這份備份保存「手牌完整顯示、HUD 收合、回合推進與 AI 行動」調整前的玩家視窗。

## 可回復檔案

- `player-window.html`

## 本次調整摘要

- 手牌改為固定舒適寬度，並支援橫向滑動，避免卡面被壓縮到看不到全貌。
- 手牌圖面改為完整顯示，不再裁切主要圖資。
- 新增 HUD 收合狀態，玩家資訊、地方主題、卡牌商店與右側面板可一起隱藏。
- 新增「結束回合」按鈕。
- 我方結束回合後，AI 玩家會依序行動，放置主題卡、出攻擊牌，並造成傷害。
- AI 行動完會自動回到我方回合。

## 回復方式

若需要回到調整前狀態，將本資料夾內的 `player-window.html` 覆蓋回：

`D:\Codex\home_community_battle\player_window\player-window.html`
