import { io } from "socket.io-client";
import store from "./store";
import SD from "./SD";
import router from "./router";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL, {
  autoConnect: false,
});

socket.on("startgame", () => {
  store.dispatch("setStatus", SD.userStatus.inMatch);
  router.push("/game");
});
socket.on("newBoard", (newboard) => {
  store.dispatch("setBoard", newboard);
});
socket.on("newChat", (newChatData) => {
  store.dispatch("pushChat", newChatData);
});
socket.on("color", (color) => {
  store.dispatch("setColor", color);
});
