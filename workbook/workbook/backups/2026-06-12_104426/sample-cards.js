const sampleCards = [
  {
    id: "strike",
    name: "Strike",
    cost: 1,
    type: "Attack",
    rarity: "Common",
    desc: "Deal 4 damage.",
    effect: { damage: 4 },
  },
  {
    id: "shield_wall",
    name: "Shield Wall",
    cost: 1,
    type: "Defense",
    rarity: "Common",
    desc: "Gain 5 armor.",
    effect: { block: 5 },
  },
  {
    id: "first_aid",
    name: "First Aid",
    cost: 2,
    type: "Heal",
    rarity: "Rare",
    desc: "Heal 6 HP.",
    effect: { heal: 6 },
  },
  {
    id: "poison_dart",
    name: "Poison Dart",
    cost: 2,
    type: "Debuff",
    rarity: "Rare",
    desc: "Apply poison and vulnerability.",
    effect: { poison: 1, vulnerable: 1 },
  },
  {
    id: "snare_trap",
    name: "Snare Trap",
    cost: 1,
    type: "Trap",
    rarity: "Rare",
    desc: "Set a hidden trap. When triggered, deal 3 damage and poison the attacker.",
    effect: { damage: 3, poison: 1 },
  },
  {
    id: "battle_focus",
    name: "Battle Focus",
    cost: 0,
    type: "Utility",
    rarity: "Epic",
    desc: "Draw 2 cards and gain 1 energy.",
    effect: { draw: 2, energy: 1 },
  },
];

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = sampleCards;
} else {
  window.sampleCards = sampleCards;
}
