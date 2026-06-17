# 2026-06-15_before-map-table-slots

## 備份目的

這份備份保存「桌台地圖底圖與四家置牌區調整」之前的玩家視窗檔案。

## 可回復檔案

- `player-window.html`
- `reel.js`

## 本次調整摘要

- 將桌台最下層改為台灣社區地圖底圖。
- 新增圖資：`D:\Codex\home_community_battle\assets\taiwan-community-table-map.png`
- 桌台上改為四家各自的置牌區。
- 每家置牌區改為 7 格：3 張攻擊、2 張防禦、2 張加成。
- 攻擊牌與加成牌正面呈現。
- 防禦牌以覆蓋狀態放置，觸發後才翻開。
- 修正 `reel.js` 舊亂碼座位與牌位標籤。

## 回復方式

若需要回到調整前狀態，將本資料夾內的檔案覆蓋回：

- `D:\Codex\home_community_battle\player_window\player-window.html`
- `D:\Codex\home_community_battle\player_window\reel.js`
