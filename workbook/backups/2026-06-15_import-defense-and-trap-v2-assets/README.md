# 2026-06-15 防禦卡與陷阱卡第二版圖資匯入備份

這份備份保存本次從 Downloads 匯入後的防禦卡與陷阱卡第二版圖資。

## 匯入來源

- `C:\Users\user\Downloads\defense`：防禦卡 9 張。
- `C:\Users\user\Downloads\trap_cards`：陷阱卡第二版圖資 10 張。

## 匯入目標

- `D:\Codex\home_community_battle\card_bank\defense_cards\images`
- `D:\Codex\home_community_battle\card_bank\trap_cards\images`

## 命名原則

- 圖片檔名全部改成 ASCII。
- 防禦卡使用 `01_...` 到 `09_...`。
- 陷阱卡第二版圖資使用 `11_..._v2` 到 `20_..._v2`。
- 中文卡名與效果寫在 manifest，避免中文檔名造成載入問題。
