class Room {
  constructor() {
    this.id = null;
    this.whitePlayer = null;
    this.blackPlayer = null;
    this.board = null;
    this.whiteCaptured = null;
    this.blackCaptured = null;
    this.turn = null;
  }
  getOpponentBySocketid(socketid) {
    if (this.whitePlayer.socketid == socketid) return this.blackPlayer;
    return this.whitePlayer;
  }
}

module.exports = Room;
