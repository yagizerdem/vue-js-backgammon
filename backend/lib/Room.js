const SD = require("../SD");

class Room {
  constructor() {
    this.id = null;
    this.whitePlayer = null;
    this.blackPlayer = null;
    this.board = null;
    this.whiteCaptured = null;
    this.blackCaptured = null;
    this.turn = null;
    this.dices = [];
  }
  getOpponentBySocketid(socketid) {
    if (this.whitePlayer.socketid == socketid) return this.blackPlayer;
    return this.whitePlayer;
  }
  isTurn(socketid) {
    if (this.turn == SD.color.white && socketid == this.whitePlayer.socketid)
      return true;
    if (this.turn == SD.color.black && socketid == this.blackPlayer.socketid)
      return true;
    return false;
  }
}

module.exports = Room;
