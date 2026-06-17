# 2026-06-17_before-storm-art-table-card-readability

## 備份目的

在加入新烏雲圖資、手牌 HUD 烏雲覆蓋、桌牌點擊閱讀與桌牌區加寬前，保存可回復版本。

## 備份檔案

- `player-window.html`
- `build-command-workbook.mjs`
- `backup-index.md`

## 修改後重點

- 將使用者提供的綠底烏雲圖資去背，輸出為 `assets/effects/storm-cloud-creature-overlay.png`。
- 烏雲圖資半透明化，玩家有烏雲狀態時會覆蓋在手牌 HUD 上。
- 桌面上的烏雲也改用同一張新圖資。
- 其他玩家翻開的桌牌可點擊放大閱讀。
- 覆蓋狀態的防禦牌仍不會揭露內容。
- 桌牌放置區由 7 欄改為 8 欄並加寬，讓第二張加成卡完整呈現。
