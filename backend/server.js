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

io.on("connection", (socket) => {
  const newUser = new User({
    userStatus: SD.userStatus.inHome,
    socketid: socket.id,
  });
  db.setUser(newUser);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
