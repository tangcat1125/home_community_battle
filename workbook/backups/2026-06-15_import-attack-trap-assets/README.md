# 2026-06-15 攻擊卡與陷阱卡圖資匯入備份

這份備份保存從 Downloads 匯入後的攻擊卡與陷阱卡圖資。

## 匯入來源

- `C:\Users\user\Downloads\act`：攻擊卡 10 張。
- `C:\Users\user\Downloads\act2`：攻擊卡 10 張。
- `C:\Users\user\Downloads\trap`：陷阱卡 10 張。
- `C:\Users\user\Downloads\act3`：空資料夾，未匯入。

## 匯入目標

- `D:\Codex\home_community_battle\card_bank\attack_cards\images`
- `D:\Codex\home_community_battle\card_bank\trap_cards\images`

## 命名原則

- 圖片檔名全部改成 ASCII。
- 攻擊卡使用 `01_...` 到 `20_...`。
- 陷阱卡使用 `01_...` 到 `10_...`。
- 中文卡名與效果寫在 manifest，避免中文檔名造成載入問題。
