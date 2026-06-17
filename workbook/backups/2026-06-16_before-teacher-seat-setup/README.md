# 2026-06-16_before-teacher-seat-setup

## 備份目的

本備份是在加入「老師開局座位設定」前建立，保留原本入口頁與玩家視窗狀態。

## 備份檔案

- `index.html`
- `player-window.html`

## 本次修改摘要

- `index.html` 改成老師入口頁，可在開局前設定 P1-P4 為真人玩家或 AI 代玩。
- 快速設定包含：1 真人 + 3 AI、2 真人 + 2 AI、4 真人、全 AI 演示。
- 開始遊戲時會把座位設定帶入玩家視窗，例如：`?seats=human,human,ai,ai`。
- `player-window.html` 會讀取座位設定，真人回合停下等待操作，AI 座位自動出牌。
- 全 AI 演示加入自動輪轉上限，避免一直無限跑下去。

## 回復方式

若要回到修改前狀態，可將本資料夾內的 `index.html` 與 `player-window.html` 複製回：

- `D:\Codex\home_community_battle\index.html`
- `D:\Codex\home_community_battle\player_window\player-window.html`
