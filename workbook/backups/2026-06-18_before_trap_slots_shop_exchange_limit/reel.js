class TableReelSystem {
  constructor() {
    this.seatClasses = ["self", "right", "left", "top"];
    this.lanes = [
      { key: "attack-1", label: "攻擊 1", slot: "attack", slotIndex: 0, slotType: "ATTACK", kind: "attack", faceDown: false },
      { key: "attack-2", label: "攻擊 2", slot: "attack", slotIndex: 1, slotType: "ATTACK", kind: "attack", faceDown: false },
      { key: "attack-3", label: "攻擊 3", slot: "attack", slotIndex: 2, slotType: "ATTACK", kind: "attack", faceDown: false },
      { key: "defense-1", label: "防禦 1", slot: "defense", slotIndex: 0, slotType: "DEFENSE", kind: "defense", faceDown: true },
      { key: "defense-2", label: "防禦 2", slot: "defense", slotIndex: 1, slotType: "DEFENSE", kind: "defense", faceDown: true },
      { key: "boost-1", label: "加成 1", slot: "boost", slotIndex: 0, slotType: "BOOST", kind: "boost", faceDown: false },
      { key: "boost-2", label: "加成 2", slot: "boost", slotIndex: 1, slotType: "BOOST", kind: "boost", faceDown: false },
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
      front: this.lanes.slice(5, 7),
      main: this.lanes.slice(0, 5),
    };
  }

  getCardLane(type) {
    switch (type) {
      case "MainTheme":
        return "theme";
      case "Trap":
      case "Utility":
      case "Bonus":
      case "Heal":
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
