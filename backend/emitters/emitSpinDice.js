const { getIo } = require("../socket-setup");

const io = getIo();
module.exports = (socketid, dices) => {
  io.to(socketid).emit("spinDice", dices);
};
