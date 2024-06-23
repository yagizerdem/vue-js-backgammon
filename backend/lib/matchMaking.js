const { v4: uuidv4 } = require("uuid");
const db = require("../db");
const Room = require("./Room");
const SD = require("../SD");
const { getIo } = require("../socket-setup");
const { createBoard } = require("../util/createBoard");
const startGame = require("../emitters/startGame");
const emitBoard = require("../emitters/emitBoard");
const emitColor = require("../emitters/emitColor");
var pointer = null;
const io = getIo();
function triggerHook() {
  if (db.waitroom.length >= 2 && !pointer) {
    pointer = setInterval(match, 100);
  }
}
function match() {
  var flag = clearHook();
  if (flag) return;

  const s1 = db.removeFirstWaitRoom();
  const s2 = db.removeFirstWaitRoom();
  const p1 = db.getUser(s1);
  const p2 = db.getUser(s2);
  const newRoom = new Room();
  newRoom.id = uuidv4();
  p1.roomid = newRoom.id;
  p2.roomid = newRoom.id;

  // prepare room
  newRoom.whiteCaptured = 0;
  newRoom.blackCaptured = 0;
  newRoom.turn = SD.color.white;
  newRoom.whitePlayer = p1;
  newRoom.blackPlayer = p2;
  newRoom.board = createBoard();

  const socket1 = io.sockets.sockets.get(s1);
  const socket2 = io.sockets.sockets.get(s2);

  socket1.join(newRoom.id);
  socket2.join(newRoom.id);

  db.addGameRoom(newRoom);
  // emitters
  startGame(s1);
  startGame(s2);
  emitBoard(s1, newRoom.board);
  emitBoard(s2, newRoom.board);
  emitColor(s1, SD.color.white);
  emitColor(s2, SD.color.black);
}
function clearHook() {
  if (db.waitroom.length < 2 && pointer) {
    clearInterval(pointer);
    pointer = null;
    return true;
  }
  return false;
}

module.exports = { triggerHook, clearHook };
