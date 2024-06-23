const db = require("../db");
const { clearHook } = require("../lib/matchMaking");
module.exports = (io, socket) => {
  const disconnect = (reason) => {
    console.log(`player disconnected reason -> ${reason}`);
    db.removeUser(socket.id);
    db.removeFirstWaitRoom(socket.id);
    clearHook();
  };
  socket.on("disconnect", disconnect);
};
