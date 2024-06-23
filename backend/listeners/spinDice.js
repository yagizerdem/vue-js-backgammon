const db = require("../db");
const emitError = require("../emitters/emitError");
const emitSpinDice = require("../emitters/emitSpinDice");
module.exports = (io, socket) => {
  function spin() {
    const playerFromDb = db.getUser(socket.id);
    const roomFromDb = db.getGameRoom(playerFromDb.roomid);
    var flag = roomFromDb.isTurn(playerFromDb.socketid);
    if (!flag) {
      return emitError(socket.id, "not your turn");
    }
    if(roomFromDb.dices.length >0){
      return emitError(socket.id, "you already throw dice");
    }
    const dieces = [Math.floor(Math.random()*7) , Math.floor(Math.random()*7)]
    roomFromDb.dices = dieces
    emitSpinDice(socket.id,dieces)
  }

  socket.on("spinDice", spin);
};
