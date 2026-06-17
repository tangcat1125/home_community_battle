const assert = require("node:assert/strict");
const BattleCardEngine = require("./battle-system.js");
const sampleCards = require("./sample-cards.js");

const game = new BattleCardEngine(sampleCards, { drawPerTurn: 2, handLimit: 6 });
const p1 = game.addPlayer({ name: "Tester" });
const p2 = game.addPlayer({ name: "AI", isAI: true });

game.startMatch();
assert.equal(game.players.length, 2);
assert.equal(game.players[0].hand.length, 3);
assert.equal(game.players[1].hand.length, 3);

const current = game.startTurn();
assert.ok(current);
assert.equal(current.name, "Tester");

const beforeLogCount = game.log.length;
const result = game.endTurn();
assert.ok(game.log.length >= beforeLogCount);
assert.ok(result === null || typeof result === "object");

console.log("Smoke test passed.");
