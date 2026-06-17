class TableReelSystem {
  constructor() {
    this.seatClasses = ["self", "right", "left", "top"];
    this.lanes = [
      { key: "trap", label: "陷阱區", slot: "front", slotIndex: 0, slotType: "front", kind: "trap", faceDown: true },
      { key: "boost", label: "加成區", slot: "front", slotIndex: 1, slotType: "front", kind: "boost", faceDown: false },
      { key: "attack-1", label: "攻擊 1", slot: "attack", slotIndex: 0, slotType: "attack", kind: "attack", faceDown: false },
      { key: "attack-2", label: "攻擊 2", slot: "attack", slotIndex: 1, slotType: "attack", kind: "attack", faceDown: false },
      { key: "attack-3", label: "攻擊 3", slot: "attack", slotIndex: 2, slotType: "attack", kind: "attack", faceDown: false },
      { key: "defense-1", label: "防禦 1", slot: "defense", slotIndex: 0, slotType: "defense", kind: "defense", faceDown: true },
      { key: "defense-2", label: "防禦 2", slot: "defense", slotIndex: 1, slotType: "defense", kind: "defense", faceDown: true },
    ];
  }

  getSeatClass(seatIndex) {
    return this.seatClasses[seatIndex] || "top";
  }

  getSeatLabel(seatIndex) {
    switch (seatIndex) {
      case 0:
        return "你 / P1";
      case 1:
        return "右手 / P2";
      case 2:
        return "左手 / P3";
      case 3:
        return "對家 / P4";
      default:
        return `P${seatIndex + 1}`;
    }
  }

  getRotation(turnIndex = 0) {
    return `${turnIndex * 90}deg`;
  }

  getLaneGroups() {
    return {
      front: this.lanes.slice(0, 2),
      main: this.lanes.slice(2, 7),
    };
  }

  getCardLane(type) {
    switch (type) {
      case "Trap":
        return "trap";
      case "Utility":
        return "boost";
      case "Defense":
        return "defense";
      case "Attack":
      case "Debuff":
        return "attack";
      default:
        return "boost";
    }
  }

  getLaneLabel(key) {
    const lane = this.lanes.find((item) => item.key === key || item.key.startsWith(key));
    return lane ? lane.label : key;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = TableReelSystem;
} else {
  window.TableReelSystem = TableReelSystem;
}
