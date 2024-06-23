<template>
  <div class="arrow-up" v-if="direaction == 'up'">
    <div class="background" :style="{ borderBottomColor: color }"></div>
    <div class="stack">
      {{ stackNo }}
      <div class="tile" v-for="item in generateTiles.tiles">
        <div v-if="generateTiles.color * 1 == 0" class="white-tile"></div>
        <div v-if="generateTiles.color * 1 == 1" class="black-tile"></div>
      </div>
    </div>
  </div>
  <div class="arrow-down" v-if="direaction == 'down'">
    <div class="background" :style="{ borderTopColor: color }"></div>
    <div class="stack">
      {{ stackNo }}
      <div class="tile" v-for="item in generateTiles.tiles">
        <div v-if="generateTiles.color * 1 == 0" class="white-tile"></div>
        <div v-if="generateTiles.color * 1 == 1" class="black-tile"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SD from "@/SD";
import store from "@/store";

export default {
  props: {
    direaction: String,
    stackNo: Number,
  },
  computed: {
    color() {
      return this.stackNo % 2 == 0 ? "#dbd8e3" : "#352f44";
    },
    generateTiles() {
      if (!store.state.board) return [];
      const color = store.state.board[this.stackNo][0];
      const amount = store.state.board[this.stackNo].length;
      if (!color || !amount) return [];
      console.log("color", color);
      return {
        tiles:
          color == SD.color.white
            ? Array.from({ length: amount }).fill("W")
            : Array.from({ length: amount }).fill("B"),
        extra: amount > 5 ? amount - 5 : 0,
        color: color * 1,
      };
    },
  },
};
</script>
<style>
.arrow-down,
.arrow-up {
  width: 40px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
}
.arrow-up > .background {
  width: 0;
  height: 0px;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 160px solid transparent;
  position: absolute;
  z-index: 1;
}
.arrow-down > .background {
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 160px solid transparent;
  position: absolute;
  top: 0;
  z-index: 1;
}
.stack {
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.arrow-down .stack {
  justify-content: flex-start;
}
.arrow-up .stack {
  justify-content: flex-end;
}
.white-tile,
.black-tile {
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
}
.white-tile {
  background: white;
}
.white-tile::after {
  content: "";
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.white-tile::before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.black-tile::after {
  content: "";
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.black-tile::before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.black-tile {
  background-color: black;
}
</style>
