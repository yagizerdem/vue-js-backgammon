import { createStore } from "vuex";
import SD from "./SD";

const store = createStore({
  state() {
    return {
      playerStatus: SD.userStatus.inHome,
      board: null,
      chat: [],
      color: null,
      dices: [],
      isSpinning: false,
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
    setColor(state, payload) {
      state.color = payload;
    },
    setDices(state, payload) {
      state.dices = payload;
    },
    setIsSpinning(state, payload) {
      state.isSpinning = payload;
    },
    setDices(state, payload) {
      state.dices = payload;
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
    setColor(context, payload) {
      context.commit("setColor", payload);
    },
    setDice(context, payload) {
      context.commit("setDice", payload);
    },
    setIsSpinning(context, payload) {
      context.commit("setIsSpinning", payload);
    },
    setDice(context, payload) {
      context.commit("setDices", payload);
    },
  },
});

export default store;
