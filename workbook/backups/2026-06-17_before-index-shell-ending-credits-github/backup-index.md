# 備份索引

## 2026-06-15_hud-theme-shop

- 位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_hud-theme-shop`
- 備份時機：調整玩家 HUD、生命值、S1-S3 地方主題槽、現金流與卡牌商店之前。
- 備份檔案：
  - `player-window.html`
  - `reel.js`
  - `sample-cards.js`
  - `main_cards_manifest.json`
- 回復用途：若新版 HUD 或商店機制不符合玩法，可以用這份備份回到修改前狀態。

## 2026-06-15_post-hud-shop-readable-manifests

- 位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_post-hud-shop-readable-manifests`
- 備份時機：完成 HUD、S1-S3、現金流、卡牌商店與主線/加成卡 manifest 中文化後。
- 備份檔案：
  - `player-window.html`
  - `reel.js`
  - `sample-cards.js`
  - `main_cards_manifest.json`
  - `bonus_cards_manifest.json`
- 回復用途：作為目前可測試版本的穩定基準點。

## 2026-06-15_import-attack-trap-assets

- 位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_import-attack-trap-assets`
- 備份時機：從 Downloads 匯入新整理的攻擊卡與陷阱卡圖資後。
- 備份檔案：
  - `attack_cards/manifest.json`
  - `attack_cards/images/*.png`
  - `trap_cards/manifest.json`
  - `trap_cards/images/*.png`
- 回復用途：若下一階段改卡牌資料或接入遊戲邏輯時出錯，可以回到本次匯入完成版。

## 2026-06-15_import-defense-and-trap-v2-assets

- 位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_import-defense-and-trap-v2-assets`
- 備份時機：從 Downloads 匯入新增的防禦卡圖資與陷阱卡第二版圖資後。
- 備份檔案：
  - `defense_cards/manifest.json`
  - `defense_cards/images/*.png`
  - `trap_cards/manifest.json`
  - `trap_cards/images/*.png`
- 回復用途：若防禦卡資料或陷阱卡第二版圖資接入後出錯，可以回到本次匯入完成版。
# 2026-06-15_before-complete-card-pool

- 備份位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_before-complete-card-pool`
- 備份目的：保存重建完整卡池前的 `sample-cards.js`。
- 備份檔案：
  - `sample-cards.js`
  - `README.md`
- 調整摘要：重建乾淨中文卡池，補到 116 張卡，包含 18 主線、18 營造、12 功能、20 加成、20 攻擊、10 防禦、10 陷阱、8 事件；並替玩家視窗的 `sample-cards.js` 引用加入版本參數，避免瀏覽器快取舊卡池。

# 2026-06-15_before-index-entry

- 備份位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_before-index-entry`
- 備份目的：保存建立遊戲入口首頁前的狀態。
- 備份檔案：
  - `NO_PREVIOUS_INDEX.txt`
  - `README.md`
- 調整摘要：根目錄新增 `index.html`，使用 `assets\taiwan-community-table-map.png` 作為首頁底圖，提供 `開始遊戲`、`主控戰情室`、`設計說明` 三個入口，作為老師投影與遊戲啟動首頁。

# 2026-06-15_before-hud-collapse-turn-flow

- 備份位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_before-hud-collapse-turn-flow`
- 備份目的：保存手牌完整顯示、HUD 收合、回合推進與 AI 行動調整前的玩家視窗。
- 備份檔案：
  - `player-window.html`
  - `README.md`
- 調整摘要：手牌改為固定卡寬與橫向滑動，卡圖完整顯示；新增 HUD 收合狀態；新增「結束回合」按鈕；我方結束後 AI 會依序行動、放置主題卡並出攻擊牌造成傷害，最後回到我方回合。

# 2026-06-15_before-audio-toggle

- 備份位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_before-audio-toggle`
- 備份目的：保存背景音樂與喇叭開關加入前的玩家視窗。
- 備份檔案：
  - `player-window.html`
  - `README.md`
- 調整摘要：加入 `Bamboo Market Quest.mp3` 作為背景音樂，放置到 `assets\audio\bamboo-market-quest.mp3`；玩家視窗左下工具列新增喇叭開關，可由玩家自行播放或關閉背景音樂，音量預設 45%，循環播放。

# 2026-06-15_before-map-table-slots

- 備份位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_before-map-table-slots`
- 備份目的：保存桌台地圖底圖與四家置牌區調整前的玩家視窗。
- 備份檔案：
  - `player-window.html`
  - `reel.js`
  - `README.md`
- 調整摘要：桌台最下層改為台灣社區地圖底圖，四家各自顯示 7 格置牌區，配置為 3 攻擊、2 防禦、2 加成；攻擊與加成正面呈現，防禦以覆蓋狀態放置；同時修正 `reel.js` 舊亂碼座位與牌位標籤。

# 2026-06-15_before-comfort-hand-hud

- 備份位置：`D:\Codex\home_community_battle\workbook\backups\2026-06-15_before-comfort-hand-hud`
- 備份目的：保存玩家手牌 HUD 舒適化調整前的玩家視窗。
- 備份檔案：
  - `player-window.html`
  - `README.md`
- 調整摘要：手牌區改為完整舒適顯示，玩家資訊獨立，地方主題區改為 2x2 小面板，玩家生命值改為 100/100，新增本月觀光人潮，主線卡放入地方主題後會增加現金流、點數與人流。
# 2026-06-16_before-remove-demo-branch

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-remove-demo-branch`
- dev_tools 備份：`D:\Codex\dev_tools\game_card_system\home_community_battle_removed_demo_branch`
- dev_tools 說明檔：`D:\Codex\dev_tools\game_card_system\home_community_battle_removed_demo_branch\REMOVED_DEMO_BRANCH_NOTE.txt`
- 備份目的：移除戰情室 demo 與相關支線程式前保存舊狀態。
- 備份檔案：
  - `demo.html`
  - `table-battle-engine.js`
  - `peer.js`
  - `battle-system.js`
  - `outputs/battle-system-design.md`
  - `outputs/table-battle-architecture.md`
  - `outputs/how-to-test.md`
  - `smoke-test.js`
  - `README.md`
  - `workbook/backup-index.md`
- 修改摘要：
  - 從主專案移除戰情室 demo 與支線引擎。
  - 移除早期 demo 相關 outputs 說明。
  - `smoke-test.js` 改為測試目前觸碰版主系統。
  - `README.md` 改為觸碰大螢幕版本說明。
  - 更新 Excel 指令工作簿。

# 2026-06-16_before-index-copy-trim

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-index-copy-trim`
- 備份目的：精簡首頁文案前保存舊狀態。
- 備份檔案：
  - `index.html`
  - `backup-index.md`
- 修改摘要：
  - 移除左側「觸」說明框。
  - 首頁 badge 改為「老師開局」。
  - 左側遊戲描述縮短。
  - 右側開局設定說明縮短為「選擇每個座位由真人或 AI 代玩。」

# 2026-06-16_before-touch-ending-analysis-audio

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-touch-ending-analysis-audio`
- 備份目的：移除戰情室入口、改為觸碰大螢幕版本、加入遊戲結束條件、結局分析星芒圖與音效系統前保存舊狀態。
- 備份檔案：
  - `index.html`
  - `player-window.html`
  - `backup-index.md`
- 修改摘要：
  - `index.html` 移除戰情室與設計說明連結，改成觸碰大螢幕專用入口。
  - `player-window.html` 新增 40 分鐘倒數與玩家倒閉結束條件。
  - 結局嵌入 108 課綱社會科九項指標分析與星芒圖。
  - 新增玩家結束、被攻擊、防禦成功、遊戲結束節奏樂音效。
  - 更新 Excel 指令工作簿：`D:\Codex\home_community_battle\doc\愛我家鄉_開發指令工作簿.xlsx`。

# 2026-06-16_before-hud-shop-command-workbook

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-hud-shop-command-workbook`
- 備份目的：調整手牌 HUD、商店浮動視窗、卡池空白卡過濾，以及建立 Excel 開發指令工作簿前保存舊狀態。
- 備份檔案：
  - `player-window.html`
  - `sample-cards.js`
  - `backup-index.md`
- 修改摘要：
  - 實際遊戲卡池只啟用有圖資的既有卡牌。
  - 手牌 HUD 不再補空白卡格。
  - 卡牌商店整合成手牌 HUD 的「商」小點，點擊後開浮動視窗。
  - 玩家資訊 HUD 與商店位置對調，玩家資訊移到右側。
  - 商店操作跟隨目前真人操作玩家。
  - 新增 Excel：`D:\Codex\home_community_battle\doc\愛我家鄉_開發指令工作簿.xlsx`。

# 2026-06-16_before-teacher-seat-setup

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-teacher-seat-setup`
- 備份目的：加入老師開局座位設定前，保存原本入口頁與玩家視窗。
- 備份檔案：
  - `index.html`
  - `player-window.html`
- 修改摘要：
  - `index.html` 新增 P1-P4 真人玩家 / AI 代玩選擇。
  - 新增快速設定：1 真人 + 3 AI、2 真人 + 2 AI、4 真人、全 AI 演示。
  - 開始遊戲會帶入 `seats=...` 參數。
  - `player-window.html` 依座位設定決定真人回合停下、AI 回合自動處理。
  - 全 AI 演示增加自動輪轉上限，避免無限循環。
# 2026-06-16_before-index-green-energy-style-setup

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-index-green-energy-style-setup`
- 備份目的：在首頁改成綠電生存戰式「玩家數 + AI 代玩」開局設定前保留舊檔。
- 備份檔案：
  - `index.html`
  - `player-window.html`
  - `backup-index.md`
- 本次修改重點：
  - `index.html` 改為玩家數、座位與 AI 代玩、勝敗條件三段式設定。
  - 開始遊戲會帶入 `playerCount` 與 `winCondition=30min-bankruptcy`。
  - `player_window/player-window.html` 實際遊戲時間同步改為 30 分鐘。
# 2026-06-16_before-hand-folder-sound-cardfaces

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-hand-folder-sound-cardfaces`
- 備份目的：在調整手牌資料夾、主題區/商店位置、桌牌正反面與音效前保留舊版。
- 備份檔案：
  - `player-window.html`
  - `backup-index.md`
- 本次修改重點：
  - 手牌 HUD 增加收合按鈕，收合後變成底部中央資料夾，點擊可展開。
  - 成功放牌後手牌會自動退回資料夾。
  - 主題區與卡牌商店上移並提高顯示層級，避免被底部手牌壓住。
  - 桌面卡牌正面顯示圖資，覆蓋牌顯示牌背。
  - 音效音量提高，放牌/攻擊/防禦/結束音效時間加長。
# 2026-06-16_before-ending-certificate-redesign

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-ending-certificate-redesign`
- 備份目的：在重新設計結局分析頁與加入獎狀列印前保留舊檔。
- 備份檔案：
  - `player-window.html`
  - `backup-index.md`
- 本次修改重點：
  - 結局分析頁重排成對局結果、學習星芒圖、老師列印獎狀三欄。
  - 指標卡改為三欄卡片式排列，避免文字被壓成直排。
  - 新增獎狀預覽區，內容包含玩家、名次、總分、人潮與亮點能力。
  - 新增列印獎狀按鈕與列印樣式。
# 2026-06-16_before-crowd-card-preview-centered-hud

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-16_before-crowd-card-preview-centered-hud`
- 備份目的：在人潮交通層、手牌/商店置中、卡牌中央放大閱讀功能開發前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 桌台新增小人偶與車輛交通層，依人流、觀光、現金流呈現熱鬧程度。
  - 手牌與商店卡改為中央舒適閱讀，商店卡圖不再缺角裁切。
  - 點擊卡牌會放大到畫面中央，再點一下回到卡牌夾。
  - 放牌後不自動收合手牌，讓玩家能持續查看與操作。
# 2026-06-17_before-targeted-attack

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-targeted-attack`
- 備份目的：在加入「攻擊卡指定玩家」機制前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 攻擊牌不再直接用目前視角亂打，改為先進入指定目標模式。
  - 手牌 HUD 會出現 P2/P3/P4 目標按鈕。
  - 可攻擊座位與玩家 chip 會有紅色攻擊提示。
  - 已加入攻擊防呆：不能攻擊自己或已倒閉玩家。
# 2026-06-17_before-main-hud-and-card-system-lock

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-main-hud-and-card-system-lock`
- 備份目的：在簡化右主 HUD，並將主題卡區、商店鎖定到手牌放置系統前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 右主 HUD 只保留玩家主要訊息與營運主題狀態。
  - 營運主題會註記正在賺錢、虧損、導入旅客或流失旅客。
  - 舊右側總資訊 HUD 固定隱藏，不再由 HUD 按鈕叫出。
  - 主題卡區與商店跟隨手牌放置系統收合/展開。
# 2026-06-17_before-shop-theme-map-traffic-tuning

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-shop-theme-map-traffic-tuning`
- 備份目的：在調整商店位置、地方主題位置、主題卡稀有價格規則、地圖固定放大與人流動畫前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 卡牌商店改到左側浮動位置。
  - 地方主題區移到靠近 P2 的右側，改成直列 S1-S4。
  - 主題卡開局保底一張，商店可買其他主題卡。
  - 商店價格加入首購大特價與危機漲價，危機狀態以紅框提示。
  - 地圖底圖放大並固定，只有四家卡牌放置區與人流層跟著 reel 視角移動。
  - 人偶與交通工具會在各玩家區域附近走動。
  - 桌牌翻開顯示攻擊、經營/加成縮圖，防禦牌維持覆蓋。
# 2026-06-17_before-rare-theme-attack-cloud-print-fix

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-rare-theme-attack-cloud-print-fix`
- 備份目的：在修正主題卡稀有規則、攻擊烏雲、人流轉移、全螢幕底圖與獎狀列印前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 主題卡從一般牌庫移除，開局保底只發一次。
  - 商店不再固定出現主題卡，只保留極低機率稀有出現。
  - 營運卡、加成卡與防禦卡的出現權重高於攻擊卡。
  - 攻擊會讓攻擊者背負烏雲並流失少量人流。
  - 被攻擊者上方會出現黑雲，人流會轉往沒有烏雲的玩家。
  - 桌面地圖改成全螢幕底圖。
  - 獎狀列印改為第一頁獎狀、第二頁嘉勉詞，避免多出空白頁。
# 2026-06-17_before-storm-disaster-sfx

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-storm-disaster-sfx`
- 備份目的：在加入烏雲消散、防禦清雲、災害事件與音效加強前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 烏雲會依回合計數在兩回合後自動散去。
  - 防禦卡成功觸發時，會直接清除被攻擊玩家身上的烏雲。
  - 攻擊、防禦成功、烏雲密佈下雨聲與災害音效加大。
  - 新增隨機地震與颱風事件。
  - 地震或颱風會掀掉所有玩家桌牌，包含攻擊、防禦、陷阱、加成與地方主題。
  - 被掀掉的桌牌會進入墳場。
  - 災害後玩家遊客與基礎人潮減半。
# 2026-06-17_before-storm-art-table-card-readability

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-storm-art-table-card-readability`
- 備份目的：在加入新烏雲圖資、手牌 HUD 烏雲覆蓋、桌牌點擊閱讀與桌牌區加寬前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 將使用者提供的綠底烏雲圖資去背，輸出為 `assets/effects/storm-cloud-creature-overlay.png`。
  - 烏雲圖資半透明化，玩家有烏雲狀態時會覆蓋在手牌 HUD 上。
  - 桌面上的烏雲也改用同一張新圖資。
  - 其他玩家翻開的桌牌可點擊放大閱讀。
  - 覆蓋狀態的防禦牌仍不會揭露內容。
  - 桌牌放置區由 7 欄改為 8 欄並加寬，讓第二張加成卡完整呈現。
# 2026-06-17_before-print-credits-ending

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-print-credits-ending`
- 備份目的：在加入列印獎狀後自動進入電影字幕式感謝幕前保存狀態。
- 備份檔案：
  - `player-window.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 修改後重點：
  - 列印獎狀後會自動切換到感謝幕。
  - 感謝幕使用電影片尾字幕效果，名單由下往上慢慢滾動。
  - 字幕包含玩家名單、排名、遊戲精神、設計與開發、特別感謝。
  - 最後顯示 `THE END OR REPLAY AGAIN`。
  - 感謝幕保留 `REPLAY AGAIN` 重新開局按鈕。

# 2026-06-17_before-ai-personalities-storm-zone-overlay

- 備份資料夾：`D:\Codex\home_community_battle\workbook\backups\2026-06-17_before-ai-personalities-storm-zone-overlay`
- 備份目的：修正一人模式 AI 玩家行動與烏雲覆蓋區域前，保存可回復版本。
- 備份檔案：
  - `player-window.html`
  - `index.html`
  - `build-command-workbook.mjs`
  - `backup-index.md`
  - `README.md`
- 本輪修改：
  - 一人模式下，P2/P3/P4 AI 會自動行動。
  - AI 分成頑皮的小學生、擅長經營的小學生、慢熱小學生三種性格。
  - 烏雲改由 `storm-layer` 覆蓋整個玩家桌牌區。
  - Excel 工作簿新增第 054 筆開發指令紀錄。
