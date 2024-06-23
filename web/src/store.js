import { createStore } from "vuex";
import SD from "./SD";

const store = createStore({
  state() {
    return {
      playerStatus: SD.userStatus.inHome,
      board: null,
      chat: [],
    };
  },
  mutations: {
    setStatus(state, payload) {
      state.playerStatus = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },
    pushChat(state, payload) {
      state.chat.push(payload);
    },
  },
  actions: {
    setStatus(context, payload) {
      context.commit("setStatus", payload);
    },
    setBoard(context, payload) {
      context.commit("setBoard", payload);
    },
    pushChat(context, payload) {
      context.commit("pushChat", payload);
    },
  },
});

export default store;
