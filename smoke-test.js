const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const sampleCards = require("./sample-cards.js");

assert.ok(sampleCards.length >= 60, "啟用卡池至少需要 60 張以上。");
assert.equal(sampleCards.filter((card) => !card.image).length, 0, "啟用卡池不可含無圖資卡。");
assert.ok(sampleCards.some((card) => card.type === "MainTheme"), "需要主線卡。");
assert.ok(sampleCards.some((card) => card.type === "Attack"), "需要攻擊卡。");
assert.ok(sampleCards.some((card) => card.type === "Defense"), "需要防禦卡。");
assert.ok(sampleCards.some((card) => card.type === "Trap"), "需要陷阱卡。");
assert.ok(sampleCards.some((card) => card.type === "Utility"), "需要加成或功能卡。");

const indexHtml = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
assert.ok(indexHtml.includes("player_window/player-window.html"), "首頁需要連到玩家視窗。");
assert.ok(!indexHtml.includes("demo.html"), "首頁不可再連到 demo 戰情室。");

const playerHtml = fs.readFileSync(path.join(__dirname, "player_window", "player-window.html"), "utf8");
assert.ok(playerHtml.includes("../sample-cards.js"), "玩家視窗需要載入卡池。");
assert.ok(playerHtml.includes("endingOverlay"), "玩家視窗需要保留結局分析系統。");

console.log("Smoke test passed.");
