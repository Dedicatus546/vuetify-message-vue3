import { createApp } from "vue";
import { createVuetify } from "vuetify";

import App from "./App.vue";

import "vuetify/styles";

createApp(App).use(createVuetify()).mount("#app");
