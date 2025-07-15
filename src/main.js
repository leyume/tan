import { createApp } from "vue";
import router from "./router";
import "./assets/main.css";
import App from "./App.vue";

const app = createApp(App).use(router);
app.mount("#app");
