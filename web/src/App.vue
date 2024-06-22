<template>
  <router-view></router-view>
</template>

<script>
import { socket } from "./socket";

export default {
  name: "App",
  components: {},
  created: function () {
    socket.connect();
  },
};
</script>

<style></style>
