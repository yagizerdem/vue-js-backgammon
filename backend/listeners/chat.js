const db = require("../db");
const emitChat = require("../emitters/emitChat");
module.exports = (io, socket) => {
  function handleChat(chatData) {
    const playerFromDb = db.getUser(socket.id);
    if (!playerFromDb) return;
    const roomFromDb = db.getGameRoom(playerFromDb.roomid);
    const opponentsocketid = roomFromDb.getOpponentBySocketid(
      socket.id
    ).socketid;
    emitChat(socket.id, chatData);
    emitChat(opponentsocketid, chatData);
  }
  socket.on("newChat", handleChat);
};
