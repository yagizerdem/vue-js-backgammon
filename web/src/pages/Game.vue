<template>
  <div class="table">
    <div class="container-board" v-show="showBoard">
      <board></board>
    </div>
    <div class="container-chat">
      <chat></chat>
    </div>
  </div>
</template>

<script>
import SD from "@/SD";
import store from "@/store";
import Chat from "../components/Chat.vue";
import Board from "../components/Board.vue";
export default {
  data() {},
  components: {
    chat: Chat,
    board: Board,
  },
  beforeRouteEnter(to, from, next) {
    if (store._state.data.playerStatus != SD.userStatus.inMatch) {
      return next("/");
    }
    next(true);
  },
  computed: {
    showBoard() {
      return store._state.data.board;
    },
  },
};
</script>
<style scoped>
.table {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.container-board {
  width: 550px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin-right: 20px;
}
.container-chat {
  width: 200px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin-left: 20px;
}
</style>
