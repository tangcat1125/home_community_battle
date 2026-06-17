import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const rootDir = "D:/Codex/home_community_battle";
const outputPath = `${rootDir}/doc/愛我家鄉_開發指令工作簿.xlsx`;

const commands = [
  ["001", "建立新遊戲資料夾", "從 game_card_system 概念出發，在 D:\\Codex 下建立新的多人卡牌遊戲方向。", "完成", "建立 home_community_battle 專案雛形。"],
  ["002", "確認開發位置", "使用者指定以後開發都放在 D:\\Codex。", "完成", "專案固定於 D:\\Codex\\home_community_battle。"],
  ["003", "測試方式說明", "使用者詢問 JS 要怎麼測。", "完成", "提供 HTML/JS 本機測試與 smoke test。"],
  ["004", "戰情室概念", "demo 先作為主控戰情室，可架在 peer.js 下監控。", "完成", "保留戰情室概念，後續轉為支線/備份。"],
  ["005", "玩家版視窗", "玩家界面需拆成桌台底圖層、reel 轉動層、HUD 層與手牌層。", "完成", "建立 player_window/player-window.html。"],
  ["006", "桌牌放置區", "桌牌需有 3 攻、2 防、2 前驅區，防禦覆牌直到觸發。", "完成", "reel.js 桌台邏輯調整為 3 攻 2 防 2 加成/陷阱。"],
  ["007", "工作簿與備份制度", "開發同時要寫工作簿與安全備份，可回復舊資料。", "完成", "建立 workbook/backups 與 backup-index.md。"],
  ["008", "Excel 工作簿", "工作簿必須做成 Excel 檔並放在 doc 下。", "完成", "建立 doc/愛我家鄉_開發指令工作簿.xlsx。"],
  ["009", "玩家 HUD 初版", "先開發玩家版視窗，而非戰情室。", "完成", "玩家視窗成為主要遊戲入口。"],
  ["010", "reel 轉動操作", "桌台轉動要用觸碰、滑鼠與大螢幕互動。", "完成", "加入拖曳旋轉、滾輪/捏合縮放。"],
  ["011", "HUD 高度調整", "玩家卡牌區太高，需降低到約畫面 1/3。", "完成", "手牌 HUD 改為低矮底部區。"],
  ["012", "棄牌系統", "手牌可棄牌並補牌，桌牌棄置進墳場。", "完成", "加入 hand discard、board discard、graveyard。"],
  ["013", "手牌夾", "點擊桌面後手牌視窗自動縮成小卡牌夾。", "完成", "加入 handCollapsed 與手牌夾 UI。"],
  ["014", "玩家資訊錯開", "玩家資訊不要與手牌區重疊。", "完成", "玩家資訊獨立成 HUD 區。"],
  ["015", "右側概況可隱藏", "最右側玩家概況可隱藏，改用左側工具列。", "完成", "加入 HUD/Panel 切換。"],
  ["016", "工具列置底", "縮放工具列改直式並置底。", "完成", "左下角工具列含 +、-、r、HUD、AI、音效。"],
  ["017", "保留主體", "把目前程式主體留住。", "完成", "玩家視窗主體保留並繼續延伸。"],
  ["018", "新主題遊戲", "獨立遊戲資料夾：愛我家鄉-社區營造大作戰。", "完成", "專案命名與設計文件轉向社區營造。"],
  ["019", "主線卡圖資", "整理主線卡圖片到 D:\\Codex 下的遊戲圖資。", "完成", "建立 card_bank/main_cards/images。"],
  ["020", "獎勵卡圖資", "前十張獎勵卡加入圖資。", "完成", "整理 bonus_cards 圖資與命名。"],
  ["021", "複製系統", "將可玩的系統複製到 home_community_battle。", "完成", "主系統可由 player_window 啟動。"],
  ["022", "檔名英文安全化", "中文資料夾與檔名會造成執行風險，需修正。", "完成", "圖資資料夾與 JSON 路徑改用英文。"],
  ["023", "卡牌題庫資料夾", "建立防禦、攻擊、陷阱、加成等卡牌題庫。", "完成", "card_bank 結構完成。"],
  ["024", "HUD 與 S1-S3", "地方主題卡可放入 S1-S3，並增加現金流與人流。", "完成", "加入 theme slots、points、cashflow、visitorFlow。"],
  ["025", "卡牌商店", "讓玩家用點數購買想要的卡牌。", "完成", "加入 shopMarket、buyShopCard、refreshShopMarket。"],
  ["026", "下載圖資搬移", "將下載區新增圖資整理進遊戲資料後刪除來源。", "完成", "完成多批圖資匯入。"],
  ["027", "手牌舒適化", "玩家手牌要能完整看見，HUD 更舒適。", "完成", "手牌 HUD 重排，加入本月觀光人潮。"],
  ["028", "桌面底圖", "桌牌底圖改為台灣家鄉地圖，最下層作為遊戲桌面。", "完成", "assets/taiwan-community-table-map.png 成為 reel-map。"],
  ["029", "背景音樂", "Bamboo Market Quest.mp3 置入背景，可由喇叭開關控制。", "完成", "加入 bgmAudio 與音效開關。"],
  ["030", "回合與 AI", "我方回合結束後，下一家 AI/玩家繼續遊玩並互相攻防。", "完成", "加入 endPlayerTurn、AI 行動與攻防流程。"],
  ["031", "index 入口", "使用原本 index 作為老師設定入口。", "完成", "index.html 成為大螢幕入口。"],
  ["032", "補完卡池", "缺少很多卡片，需補完。", "完成", "sample-cards.js 擴充主題、攻擊、防禦、陷阱、事件、加成卡。"],
  ["033", "老師開局設定", "index 開局可設定玩家數與 AI 代玩。", "完成", "加入 seats、playerCount、teacherSetup 參數。"],
  ["034", "移除空卡", "空卡從 JSON 去掉，以既有卡牌為準。", "完成", "移除 placeholder/blank cards。"],
  ["035", "商店整合 HUD", "黃色卡牌夾與卡牌商店整合，同一 HUD 由點點/商店點叫出。", "完成", "商店改成浮動面板。"],
  ["036", "移除戰情室", "只做觸碰大螢幕版本，戰情室從 index 移除。", "完成", "demo 分支移除並備份到 dev_tools。"],
  ["037", "遊戲結束條件", "遊戲時間與玩家倒閉為結束條件。", "完成", "設定 30 分鐘與倒閉檢查。"],
  ["038", "108 課綱分析", "結局顯示玩家獎勵分析星芒圖，對應小四、小五下、小六社會指標。", "完成", "加入 radar SVG 與學習指標分析。"],
  ["039", "結束音效", "放牌、被攻擊、防禦成功、結束需有音效。", "完成", "加入 Web Audio SFX。"],
  ["040", "開局設定簡化", "觸碰說明與開局說明不要太囉嗦。", "完成", "index 文案簡化。"],
  ["041", "demo 程式移除", "demo 與相關程式去掉，支線程式備份到 devtools。", "完成", "移除 demo.html、battle-system.js、peer.js 等支線檔。"],
  ["042", "dev_tools 清單", "開發工具清單與副本程式需在 D:\\Codex\\dev_tools 可見。", "完成", "建立 dev_tools 副本與說明檔。"],
  ["043", "綠電生存戰式設定", "index 參考綠電生存戰，以玩家數、AI 代玩、30 分鐘與倒閉為主。", "完成", "設定按鈕與勝敗條件統一。"],
  ["044", "手牌夾與桌牌面", "手牌可收合，音效延長，桌牌有正反面視覺。", "完成", "加入手牌夾、音效調整、桌牌正面圖與覆蓋牌。"],
  ["045", "結局分析與獎狀", "結局分析需重新排版，老師可列印獎狀。", "完成", "重排結局、加入 certificate-card 與列印按鈕。"],
  ["046", "人潮交通與大卡閱讀", "桌牌上加入立體小人偶、遊覽車、火車、小汽車；手牌與商店置中；點卡中央放大閱讀，再點回卡牌夾。", "完成", "加入 crowd-layer、renderCrowdTraffic、card reader overlay；手牌/商店完整呈現並可讀牌。"],
  ["047", "攻擊卡指定玩家", "攻擊卡缺少指定玩家攻擊，導致攻防不成立、遊戲不好玩。", "完成", "攻擊牌改為先選目標；手牌 HUD 顯示 P2/P3/P4 目標按鈕，可點對方座位攻擊，並防止攻擊自己或倒閉玩家。"],
  ["048", "右主 HUD 與卡牌系統鎖定", "最右邊原本是所有資訊呈現，現在去掉；右主 HUD 只顯示玩家主要訊息與營運主題；商店與主題卡區要跟著卡牌放置系統隱藏與出現。", "完成", "右主 HUD 簡化為玩家主要資訊與營運主題狀態；舊總資訊面板固定隱藏；主題卡區與商店綁定 handCollapsed，一起收合/展開。"],
  ["049", "商店/主題區與人流微調", "卡牌商店移到左側；地方主題移到 P2 旁直列；主題卡為稀有卡，開局保底一張，商店可買；首購優惠、危機漲價；底圖放大固定，只有四家卡牌區移動。", "完成", "商店左側浮動、主題區右側直列；商店池加入主題卡，價格依首購與危機狀態變化；人流在玩家區域走動；桌牌翻開縮圖呈現攻擊/經營/加成，防禦維持覆蓋。"],
  ["050", "主題稀有與攻擊烏雲", "主題卡相當稀有，只有開局一定配一張；營運卡與加成卡出現率略高於攻擊卡；攻擊會讓自己與被攻擊方出現烏雲、人流流失並轉往其他玩家；底圖放大到全螢幕；獎狀列印第一頁獎狀、第二頁嘉勉詞且不可多空白頁。", "完成", "主題卡從一般牌庫移除，保底只發一次；商店主題卡改極低機率；牌庫權重調高營運/加成/防禦；攻擊加入黑雲與人流轉移；reel map 全螢幕 cover；列印樣式拆成獎狀與嘉勉詞兩頁。"],
  ["051", "烏雲消散、災害與音效", "烏雲密佈兩回合內消失；玩家有防禦卡則直接消雲；攻擊、防禦成功、烏雲下雨聲音效變大；加入地震與颱風隨機發生，會把玩家桌牌全掀掉、遊客減半。", "完成", "新增烏雲到期清理、防禦成功清雲、雨聲/災害合成音效；新一輪有機率觸發地震或颱風，清空攻擊/防禦/陷阱/加成/主題桌牌並送墳場，遊客與基礎人潮減半。"],
  ["052", "烏雲圖資與桌牌閱讀", "把新烏雲圖去背、半透明化，罩在玩家手牌上；其他玩家桌牌要能點擊檢視大卡；玩家桌牌放置區加成卡看不見，需拉寬放置區。", "完成", "建立 assets/effects/storm-cloud-creature-overlay.png；手牌 HUD 有烏雲時覆蓋半透明特效；桌面烏雲改用新圖資；翻開的桌牌可點擊放大閱讀，覆蓋牌仍不揭露；桌牌區改為 8 欄並加寬，第二加成欄完整顯示。"],
  ["053", "列印後感謝幕", "印完獎狀後自動走入感謝幕；名字像電影一樣由下而上慢慢出現；結局顯示 THE END OR REPLAY AGAIN。", "完成", "列印獎狀後透過 afterprint 與延遲保險切換到 credits 畫面；感謝幕名單自下往上滾動，包含玩家、排名、設計開發與特別感謝，最後顯示 THE END OR REPLAY AGAIN，並提供 REPLAY AGAIN 按鈕。"],
];

const decisions = [
  ["架構", "桌台與 HUD 分層", "桌台底圖/reel 旋轉層與 HUD 固定層分離，確保大螢幕觸控時桌面可轉、HUD 不亂跑。"],
  ["操作", "大螢幕優先", "以滑鼠拖曳、觸控拖曳、滾輪與捏合縮放為主要操作，不再保留戰情室入口。"],
  ["遊戲性", "主題卡帶來收益", "地方主題卡放入 S1-S3 後產生點數、現金流與本月觀光人潮。"],
  ["教學", "平衡不是只衝收入", "結局以收入、觀光、文化、生態、民心與效率做綜合分析，對應 108 課綱指標。"],
  ["UX", "先讀牌再出牌", "手牌與商店卡點擊先中央放大閱讀，避免玩家只能看到半張卡。"],
  ["視覺", "桌面活起來", "用小人偶與車輛表示人流與金流，讓策略結果在桌面上可視化。"],
  ["維護", "備份與工作簿同步", "每個重要改動前建立 backups，並在 Excel 工作簿與 backup-index.md 留記錄。"],
];

async function listBackups() {
  const backupRoot = `${rootDir}/workbook/backups`;
  const entries = await fs.readdir(backupRoot, { withFileTypes: true }).catch(() => []);
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => [entry.name, `${backupRoot}/${entry.name}`])
    .sort((a, b) => a[0].localeCompare(b[0]));
}

function writeTable(sheet, startCell, headers, rows, widths = []) {
  const range = sheet.getRange(startCell).resize(rows.length + 1, headers.length);
  range.values = [headers, ...rows];
  range.getRow(0).format = {
    fill: "#0F4C81",
    font: { bold: true, color: "#FFFFFF" },
  };
  range.format.borders = { preset: "all", style: "thin", color: "#C7D2FE" };
  range.format.wrapText = true;
  widths.forEach((width, index) => {
    if (width) range.getColumn(index).format.columnWidthPx = width;
  });
  return range;
}

function title(sheet, range, text, fill = "#073B4C") {
  sheet.getRange(range).merge();
  sheet.getRange(range.split(":")[0]).values = [[text]];
  sheet.getRange(range.split(":")[0]).format = {
    fill,
    font: { bold: true, color: "#FFFFFF", size: 16 },
  };
}

const workbook = Workbook.create();

const overview = workbook.worksheets.add("開發指令總覽");
overview.showGridLines = false;
title(overview, "A1:E1", "愛我家鄉-社區營造大作戰｜開發指令工作簿");
overview.getRange("A2:E2").merge();
overview.getRange("A2").values = [["本工作簿記錄從原型、玩家視窗、圖資、HUD、AI、結局分析到本輪人潮交通與大卡閱讀的主要開發指令。"]];
overview.getRange("A2").format = { fill: "#E0F2FE", font: { color: "#0F172A" } };
writeTable(overview, "A4", ["編號", "主題", "使用者指令/需求", "狀態", "完成內容"], commands, [58, 150, 470, 80, 430]);
overview.freezePanes.freezeRows(4);

const decisionSheet = workbook.worksheets.add("設計決策");
decisionSheet.showGridLines = false;
title(decisionSheet, "A1:C1", "主要設計決策", "#14532D");
writeTable(decisionSheet, "A3", ["類別", "決策", "說明"], decisions, [120, 190, 620]);
decisionSheet.freezePanes.freezeRows(3);

const backupSheet = workbook.worksheets.add("備份清單");
backupSheet.showGridLines = false;
title(backupSheet, "A1:B1", "備份資料夾清單", "#7C2D12");
writeTable(backupSheet, "A3", ["備份資料夾", "路徑"], await listBackups(), [360, 620]);
backupSheet.freezePanes.freezeRows(3);

const cardSheet = workbook.worksheets.add("卡牌與系統");
cardSheet.showGridLines = false;
title(cardSheet, "A1:D1", "卡牌與系統狀態", "#1E3A8A");
writeTable(
  cardSheet,
  "A3",
  ["項目", "目前狀態", "相關資料夾/檔案", "說明"],
  [
    ["主線卡", "已匯入圖資", "card_bank/main_cards/images", "地方主題卡可放入 S1-S3，提供點數、現金流、人流。"],
    ["加成卡", "已匯入圖資", "card_bank/bonus_cards/images", "玩家可透過功能牌或商店取得。"],
    ["攻擊/防禦/陷阱/事件", "卡池已補齊", "sample-cards.js、card_bank", "以既有卡牌為準，不保留空卡。"],
    ["玩家視窗", "主要遊戲介面", "player_window/player-window.html", "大螢幕觸控、reel 桌面、HUD、商店、AI 流程。"],
    ["入口首頁", "老師設定入口", "index.html", "設定玩家數與 AI 代玩，進入觸控大螢幕遊戲。"],
    ["結局分析", "可列印獎狀", "player_window/player-window.html", "對應 108 課綱社會科指標並產生星芒圖。"],
    ["本輪新增", "列印後感謝幕", "player_window/player-window.html", "列印獎狀後自動進入電影字幕式感謝幕，最後顯示 THE END OR REPLAY AGAIN。"],
  ],
  [160, 130, 260, 520],
);

await fs.mkdir(`${rootDir}/doc`, { recursive: true });
const preview = await workbook.render({ sheetName: "開發指令總覽", range: "A1:E18", scale: 1, format: "png" });
await fs.writeFile(`${rootDir}/doc/愛我家鄉_開發指令工作簿_preview.png`, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(outputPath);
