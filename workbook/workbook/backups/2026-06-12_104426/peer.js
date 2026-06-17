/**
 * BattlePeerHub is a local monitoring bridge.
 * It keeps the battle engine separate from the frontend and emits snapshots for HUD / tabletop rendering.
 */

class BattlePeerHub {
  constructor(engine = null) {
    this.engine = engine;
    this.listeners = new Set();
    this.focusSeat = 0;
  }

  bind(engine) {
    this.engine = engine;
    this.emit("bind");
    return this;
  }

  setFocusSeat(seat) {
    this.focusSeat = seat;
    this.emit("focus", { seat });
  }

  snapshot() {
    if (!this.engine) {
      return {
        focusSeat: this.focusSeat,
        players: [],
        log: [],
      };
    }

    const snap = this.engine.snapshot ? this.engine.snapshot() : {};
    return {
      ...snap,
      focusSeat: this.focusSeat,
    };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.snapshot());
    return () => this.listeners.delete(listener);
  }

  emit(type, payload = {}) {
    const packet = {
      type,
      payload,
      snapshot: this.snapshot(),
      ts: Date.now(),
    };

    this.listeners.forEach((listener) => listener(packet));
    return packet;
  }

  refresh(reason = "sync") {
    return this.emit("refresh", { reason });
  }
}

function createBattlePeerHub(engine) {
  return new BattlePeerHub(engine);
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = createBattlePeerHub;
  module.exports.BattlePeerHub = BattlePeerHub;
} else {
  window.createBattlePeerHub = createBattlePeerHub;
  window.BattlePeerHub = BattlePeerHub;
}
