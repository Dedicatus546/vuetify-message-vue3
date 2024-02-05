// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import { Theme } from "vitepress";
import { createVuetify } from "vuetify";
import "vuetify/styles";

const vuetify = createVuetify();

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify);
  },
};

export default theme;
