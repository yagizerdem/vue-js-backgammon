<template>
  <div class="container">
    <div class="dice d1" ref="d1"></div>
    <div class="dice d2" ref="d2"></div>
  </div>
  <button @click="spinDice">spin dice</button>
</template>

<script>
import { socket } from "@/socket";
import store from "../store";
import { mapState } from "vuex"; // Import mapState for Vuex state mapping
export default {
  data() {
    return {
      loop: null,
      imgmap: {
        1: "/d1.png",
        2: "/d2.png",
        3: "/d3.png",
        4: "/d4.png",
        5: "/d5.png",
        6: "/d6.png",
      },
    };
  },
  methods: {
    spinDice() {
      socket.emit("spinDice");
      //   store.dispatch("setIsSpinning", true);
    },
    spinAnimation() {
      this.$refs.d1.style.backgroundImage = `url(${
        this.imgmap[Math.floor(Math.random() * 7)]
      })`;
      this.$refs.d2.style.backgroundImage = `url(${
        this.imgmap[Math.floor(Math.random() * 7)]
      })`;
    },
  },
  computed: {
    ...mapState({
      isSpinning: (state) => state.isSpinning, // Map isSpinning state from Vuex store
      dices: (state) => state.dices,
    }),
  },
  watch: {
    isSpinning(newValue, oldValue) {
      if (!newValue) {
        clearInterval(this.loop);
        this.loop = null;
      }
      if (newValue) {
        this.loop = setInterval(this.spinAnimation, 100);
      }
    },
    dices(newValue, oldValue) {
      if (newValue[0] == undefined) {
        this.$refs.d1.style.backgroundImage = null;
      }
      if (newValue[0] != undefined) {
        this.$refs.d1.style.backgroundImage = `url(${
          this.imgmap[newValue[0] * 1]
        })`;
      }
      if (newValue[1] == undefined) {
        this.$refs.d2.style.backgroundImage = null;
      }
      if (newValue[1] != undefined) {
        this.$refs.d2.style.backgroundImage = `url(${
          this.imgmap[newValue[1] * 1]
        })`;
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.dice {
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: relative;
}
.container ~ button {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: block;
  margin: 30px auto;
  padding: 8px 5px;
  width: 150px;
  font-weight: bolder;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
