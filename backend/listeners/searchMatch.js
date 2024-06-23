const db = require("../db");
const { triggerHook } = require("../lib/matchMaking");
module.exports = (io, socket) => {
  const searchMatch = ({ userName }) => {
    const playerFromdb = db.getUser(socket.id);
    playerFromdb.userName = userName;
    db.pushWaitRoom(socket.id);
    triggerHook();
  };
  socket.on("searchMatch", searchMatch);
};
