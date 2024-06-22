import { createApp } from "vue";
import App from "./App.vue";
import "./assets/gloabl.css";
import router from "./router";
import Gate from "./pages/Gate.vue";
import Game from "./pages/Game.vue";

const app = createApp(App);
app.use(router);

app.mount("#app");
