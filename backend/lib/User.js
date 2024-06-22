class User {
  constructor({
    userName = null,
    roomid = null,
    socketid = null,
    userStatus = null,
  }) {
    this.userName = userName;
    this.roomid = roomid;
    this.socketid = socketid;
    this.userStatus = userStatus;
  }
}
module.exports = User;
