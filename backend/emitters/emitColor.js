const { getIo } = require("../socket-setup");

const io = getIo();
module.exports = (socketid, color) => {
  io.to(socketid).emit("color", color);
};
