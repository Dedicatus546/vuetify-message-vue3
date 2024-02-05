// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import { Theme } from "vitepress";
import { createVuetify } from "vuetify";
import "vuetify/styles";

const isDarkModeMathMedia = window.matchMedia("(prefers-color-scheme: dark)");
const vuetify = createVuetify();

const updateTheme = (theme: string) => {
  const userSetTheme = localStorage.getItem("vitepress-theme-appearance");
  vuetify.theme.global.name.value =
    userSetTheme === null || userSetTheme === "auto" ? theme : userSetTheme;
};
updateTheme(isDarkModeMathMedia.matches ? "dark" : "light");

isDarkModeMathMedia.addEventListener("change", (mql) => {
  updateTheme(mql.matches ? "dark" : "light");
});

const __setItem = window.localStorage.setItem.bind(
  localStorage
) as Storage["setItem"];

window.localStorage.setItem = function (key: string, value: string) {
  if (key === "vitepress-theme-appearance") {
    if (value !== "auto") {
      vuetify.theme.global.name.value = value;
    } else {
      vuetify.theme.global.name.value = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
    }
  }
  return __setItem(key, value);
};

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(vuetify);
  },
};

export default theme;
