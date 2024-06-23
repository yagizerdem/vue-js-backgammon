const { getIo } = require("../socket-setup");

const io = getIo();
module.exports = (socketid, chat) => {
  io.to(socketid).emit("newChat", chat);
};
