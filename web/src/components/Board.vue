<template>
  <div class="board">
    <div class="left">
      <div class="top">
        <stack direaction="down" :stackNo="stackNo[23]"></stack>
        <stack direaction="down" :stackNo="stackNo[22]"></stack>
        <stack direaction="down" :stackNo="stackNo[21]"></stack>
        <stack direaction="down" :stackNo="stackNo[20]"></stack>
        <stack direaction="down" :stackNo="stackNo[19]"></stack>
        <stack direaction="down" :stackNo="stackNo[18]"></stack>
      </div>
      <div class="bottom">
        <stack direaction="up" :stackNo="stackNo[0]"></stack>
        <stack direaction="up" :stackNo="stackNo[1]"></stack>
        <stack direaction="up" :stackNo="stackNo[2]"></stack>
        <stack direaction="up" :stackNo="stackNo[3]"></stack>
        <stack direaction="up" :stackNo="stackNo[4]"></stack>
        <stack direaction="up" :stackNo="stackNo[5]"></stack>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <stack direaction="down" :stackNo="stackNo[17]"></stack>
        <stack direaction="down" :stackNo="stackNo[16]"></stack>
        <stack direaction="down" :stackNo="stackNo[15]"></stack>
        <stack direaction="down" :stackNo="stackNo[14]"></stack>
        <stack direaction="down" :stackNo="stackNo[13]"></stack>
        <stack direaction="down" :stackNo="stackNo[12]"></stack>
      </div>
      <div class="bottom">
        <stack direaction="up" :stackNo="stackNo[6]"></stack>
        <stack direaction="up" :stackNo="stackNo[7]"></stack>
        <stack direaction="up" :stackNo="stackNo[8]"></stack>
        <stack direaction="up" :stackNo="stackNo[9]"></stack>
        <stack direaction="up" :stackNo="stackNo[10]"></stack>
        <stack direaction="up" :stackNo="stackNo[11]"></stack>
      </div>
    </div>
  </div>
</template>

<script>
import Stack from "./Stack";
import store from "../store";
import SD from "@/SD";
export default {
  components: {
    stack: Stack,
  },
  computed: {
    stackNo() {
      console.log(store.state.color);
      if (store.state.color == SD.color.white) {
        return Array.from({ length: 24 }, (_, index) => index);
      } else {
        return [
          ...Array.from({ length: 12 }, (_, index) => index + 12),
          ...Array.from({ length: 12 }, (_, index) => index),
        ];
      }
    },
  },
};
</script>

<style scoped>
.board {
  width: 100%;
  height: 100%;
  background: #455d7a;
  display: flex;
}
.left,
.right {
  width: 50%;
  background: transparent;
  border: 20px solid #402a23;
  padding-left: 3px;
}
.top,
.bottom {
  height: 50%;
  width: 100%;
  display: flex;
}
</style>
