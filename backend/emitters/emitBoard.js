const { getIo } = require("../socket-setup");

const io = getIo();
module.exports = (socketid, board) => {
  io.to(socketid).emit("newBoard", board);
};
