const express = require("express");
const http = require("http");
const { setIo } = require("./socket-setup");
var cors = require("cors");
const app = express();
app.use(cors());

const server = http.createServer(app);
const io = setIo(server);
const User = require("./lib/User");
const SD = require("./SD");
const db = require("./db");
const registerDisconnectHandler = require("./listeners/disconnect");
const registerSearchMatchHandler = require("./listeners/searchMatch");
const registerChatHandler = require("./listeners/chat");
const registerSpinDiceHandler = require("./listeners/spinDice");

io.on("connection", (socket) => {
  const newUser = new User({
    userStatus: SD.userStatus.inHome,
    socketid: socket.id,
  });
  db.setUser(newUser);

  registerDisconnectHandler(io, socket);
  registerSearchMatchHandler(io, socket);
  registerChatHandler(io, socket);
  registerSpinDiceHandler(io, socket);
});
io.of("/").adapter.on("delete-room", (room) => {
  if (db.gameRoom[room]) {
    db.deleteGameRoom(room);
  }
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
