class TableReelSystem {
  constructor() {
    this.seatClasses = ["self", "right", "left", "top"];
    this.lanes = [
      { key: "trap", label: "前驅陷阱", kind: "trap", faceDown: true },
      { key: "boost", label: "前驅加成", kind: "boost", faceDown: false },
      { key: "attack-1", label: "攻擊", kind: "attack", faceDown: false },
      { key: "attack-2", label: "攻擊", kind: "attack", faceDown: false },
      { key: "attack-3", label: "攻擊", kind: "attack", faceDown: false },
      { key: "defense-1", label: "防禦", kind: "defense", faceDown: true },
      { key: "defense-2", label: "防禦", kind: "defense", faceDown: true },
    ];
  }

  getSeatClass(seatIndex) {
    return this.seatClasses[seatIndex] || "top";
  }

  getRotation(turnIndex = 0) {
    return `${turnIndex * 90}deg`;
  }

  getLaneGroups() {
    return {
      top: this.lanes.slice(0, 2),
      middle: this.lanes.slice(2, 5),
      bottom: this.lanes.slice(5, 7),
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
