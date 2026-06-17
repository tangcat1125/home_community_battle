# 2026-06-15_before-audio-toggle

## 備份目的

這份備份保存「背景音樂與喇叭開關」加入前的玩家視窗。

## 可回復檔案

- `player-window.html`

## 本次調整摘要

- 將 `Bamboo Market Quest.mp3` 複製到遊戲資源資料夾。
- 新增音樂檔：`D:\Codex\home_community_battle\assets\audio\bamboo-market-quest.mp3`
- 在玩家視窗左下工具列加入喇叭按鈕。
- 玩家可自行點擊喇叭播放或關閉背景音樂。
- 音樂採循環播放，音量預設為 45%。
- 預設不自動播放，避免瀏覽器阻擋未互動的音訊。

## 回復方式

若需要回到調整前狀態，將本資料夾內的 `player-window.html` 覆蓋回：

`D:\Codex\home_community_battle\player_window\player-window.html`
