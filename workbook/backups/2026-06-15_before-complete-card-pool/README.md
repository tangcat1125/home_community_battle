# 2026-06-15_before-complete-card-pool

## 備份目的

這份備份保存「重建完整卡池」之前的 `sample-cards.js`。

## 可回復檔案

- `sample-cards.js`

## 本次調整摘要

- 將原本亂碼且不完整的 `sample-cards.js` 重建為乾淨中文卡池。
- 卡池總數補到 116 張。
- 卡牌分類如下：
  - 社區主線卡：18 張
  - 營造卡：18 張
  - 功能牌：12 張
  - 玩家加成卡：20 張
  - 攻擊卡：20 張
  - 防禦卡：10 張
  - 陷阱卡：10 張
  - 事件卡：8 張
- 已接上既有圖資路徑；尚未有圖資的卡先以文字卡方式運作。
- `player-window.html` 的 `sample-cards.js` 引用加入版本參數，避免瀏覽器快取舊卡池。

## 回復方式

若需要回到調整前狀態，將本資料夾內的 `sample-cards.js` 覆蓋回：

`D:\Codex\home_community_battle\sample-cards.js`

若要移除前端快取版本參數，將 `player-window.html` 中：

`../sample-cards.js?v=20260615_complete_cards`

改回：

`../sample-cards.js`
