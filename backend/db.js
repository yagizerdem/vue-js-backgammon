class Database {
  constructor() {
    // singelton
    if (Database._instance) {
      return Database._instance;
    }
    Database._instance = this;
    this.allUsers = {};
    this.gameRoom = {};
    this.waitroom = [];
  }
  setUser(newUser) {
    this.allUsers[newUser.socketid] = newUser;
  }
  getUser(socketid) {
    return this.allUsers[socketid];
  }
  removeUser(socketid) {
    delete this.allUsers[socketid];
  }
  pushWaitRoom(socketid) {
    this.waitroom.push(socketid);
  }
  deleteWaitRoom(socketid) {
    this.waitroom = this.waitroom.filter((item) => item != socketid);
  }
  removeFirstWaitRoom() {
    return this.waitroom.shift();
  }
  deleteGameRoom(roomid) {
    delete this.gameRoom[roomid];
  }
  addGameRoom(newRoom) {
    this.gameRoom[newRoom.id] = newRoom;
  }
  getGameRoom(roomid) {
    return this.gameRoom[roomid];
  }
}
const db = new Database();
module.exports = db;
