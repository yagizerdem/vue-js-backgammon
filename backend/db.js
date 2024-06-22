class Database {
  constructor() {
    // singelton
    if (Database._instance) {
      return Database._instance;
    }
    Database._instance = this;
    this.allUsers = {};
    this.allRooms = {};
  }
  setUser(newUser) {
    this.allUsers[newUser.socketid] = newUser;
  }
  getUser(socketid) {
    this.allUsers[socketid];
  }
  removeUser(socketid) {
    delete this.allUsers[socketid];
  }
}
const db = new Database();
module.exports = db;
