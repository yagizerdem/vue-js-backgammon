import { createWebHistory, createRouter } from "vue-router";
import Gate from "./pages/Gate.vue";
import Game from "./pages/Game.vue";
const routes = [
  { path: "/gate", component: Gate, name: "gate" },
  { path: "/", redirect: "/gate", name: "home" },
  { path: "/game", component: Game, name: "game" },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
