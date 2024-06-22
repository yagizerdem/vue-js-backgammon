var _io = null;
const { Server } = require("socket.io");
function setIo(server) {
  _io = new Server(server, {
    cors: {
      origin: "http://localhost:8080",
    },
  });
  return _io;
}

function getIo() {
  return _io;
}
module.exports = { setIo, getIo };
