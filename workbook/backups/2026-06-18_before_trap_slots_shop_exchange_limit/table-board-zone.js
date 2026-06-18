class TableBoardZoneSystem {
  constructor(reelSystem) {
    this.reel = reelSystem;
    this.title = "桌牌區";
  }

  getTitle() {
    return this.title;
  }

  getSeatClass(seatIndex) {
    return this.reel.getSeatClass(seatIndex);
  }

  getSeatLabel(seatIndex) {
    return this.reel.getSeatLabel(seatIndex);
  }

  getRotation(seatIndex) {
    return this.reel.getRotation(seatIndex);
  }

  getCardLane(type) {
    return this.reel.getCardLane(type);
  }

  getLaneGroups() {
    return this.reel.getLaneGroups();
  }

  getAllLanes() {
    const groups = this.getLaneGroups();
    return [...groups.main, ...groups.front];
  }

  getSlotValue(player, lane) {
    if (!player?.board || !lane) return null;
    if (lane.slot === "attack") return player.board.attack[lane.slotIndex] || null;
    if (lane.slot === "defense") return player.board.defense[lane.slotIndex] || null;
    if (lane.slot === "boost") return player.board.boost[lane.slotIndex] || null;
    if (lane.slot === "theme") return player.board.theme[lane.slotIndex] || null;
    if (lane.key === "trap") return player.board.trap[0] || null;
    return null;
  }

  getManageItems(player) {
    return this.getAllLanes().map((lane) => ({
      lane,
      value: this.getSlotValue(player, lane),
    }));
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = TableBoardZoneSystem;
} else {
  window.TableBoardZoneSystem = TableBoardZoneSystem;
}
