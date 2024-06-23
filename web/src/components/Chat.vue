<template>
  <div class="container">
    <div class="screen">
      <div v-for="item in chatData" class="message">
        {{ item }}
      </div>
    </div>
    <input type="text" placeholder="you can caht" ref="input" />
    <button @click="chat">send chat</button>
    <button @click="leave">leave</button>
  </div>
</template>

<script>
import { socket } from "@/socket";
import store from "@/store";

export default {
  data() {
    return {
      chatData: store._state.data.chat,
    };
  },
  methods: {
    leave() {
      window.location.reload();
    },
    chat() {
      const chatData_ = this.$refs.input.value;
      socket.emit("newChat", chatData_);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: white;
  overflow: auto;
}
.screen {
  width: 90%;
  height: 65%;
  margin: 5% auto;
  background: #ebd5d5;
  border-radius: 4px;
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: relative;
}
.screen ~ input {
  border: none;
  outline: none;
  display: block;
  margin: auto;
  background: #e3f6f5;
  font-weight: bolder;
  padding: 8px 5px;
  width: 160px;
}
button {
  display: block;
  margin: 5px auto;
  width: 130px;
  border: none;
  outline: none;
  height: 20px;
  cursor: pointer;
  font-weight: bolder;
  border-radius: 2px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
button:last-child {
  background: #f76b8a;
}
button:first-of-type {
  background: #bae8e8;
}
.message {
  word-break: break-all;
  width: 80%;
  display: block;
  margin: 5px auto;
  text-align: center;
  background-color: #bae8e8;
  font-weight: 500;
  padding: 5px 9px;
}
</style>
