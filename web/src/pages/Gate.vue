<template>
  <div class="center">
    <div v-if="mode == 'home'">
      <h1>backgammon</h1>
      <hr />
      <input placeholder="eneter your name" ref="input" />
      <button @click="findMatch">find match</button>
    </div>
    <div v-if="mode == 'search'" class="search">
      <div>searching for match ...</div>
      <br />
      <spinner></spinner>
      <br />
      <button @click="cancelMatch()">cancel</button>
    </div>
  </div>
</template>

<script>
import SD from "@/SD";
import Spinner from "@/components/Spinner.vue";
import { socket } from "@/socket";

export default {
  components: {
    spinner: Spinner,
  },
  methods: {
    findMatch() {
      const userName = this.$refs.input.value;
      this.$store.dispatch("setStatus", SD.userStatus.inSearch);
      socket.emit("searchMatch", { userName });
    },
    cancelMatch() {
      window.location.reload();
    },
  },
  computed: {
    mode() {
      return this.$store._state.data.playerStatus == SD.userStatus.inHome
        ? "home"
        : "search";
    },
  },
};
</script>
<style scoped>
.search {
  text-align: center;
  margin: 10px;
}
.search > button {
  width: 100px;
  height: 30px;
  display: block;
  margin: auto;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  font-weight: bolder;
}
.center {
  width: 200px;
  height: 200px;
  background-color: #7cb9e8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.center > div > h1 {
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
}
.center > div > hr {
  width: 80%;
  display: block;
  margin: 0px auto;
}
.center > div > input {
  margin-top: 10px;
  border: none;
  outline: none;
  padding: 8px 5px;
  display: block;
  width: 160px;
  margin: 10px auto;
  border-radius: 3px;
  background: #e7eaf6;
  font-weight: bolder;
}
.center > div > input + button {
  width: 160px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: bolder;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
</style>
