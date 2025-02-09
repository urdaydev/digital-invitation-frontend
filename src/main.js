import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

const app = i18n(createApp(App));
app.use(router);
app.config.globalProperties.api = "https://api.partylistpro.com/api/guests";
// LOCAL
// app.config.globalProperties.api =
//   "http://192.168.18.5/digital-invitation-backend/public/api/guests";
app.mount("#app");
