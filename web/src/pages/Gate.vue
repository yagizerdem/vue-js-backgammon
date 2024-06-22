<template>
  <div class="center">
    <h1>backgammon</h1>
    <hr />
    <input placeholder="eneter your name" ref="input" />
    <button @click="findMatch">find match</button>
  </div>
</template>

<script>
export default {
  methods: {
    findMatch() {
      const userName = this.$refs.input.value;
    },
  },
};
</script>
<style scoped>
.center {
  width: 200px;
  height: 200px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
}
.center > h1 {
  font-size: 20px;
  text-align: center;
  margin: 10px 0;
}
.center > hr {
  width: 80%;
  display: block;
  margin: 0px auto;
}
.center > input {
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
.center > input + button {
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
