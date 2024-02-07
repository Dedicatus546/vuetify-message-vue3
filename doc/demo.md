<script setup lang="ts">
import Example1 from "./src/example-1.vue";
import Example2 from "./src/example-2.vue";
import Example3 from "./src/example-3.vue";
import Example4 from "./src/example-4.vue";
import Example5 from "./src/example-5.vue";
import Example6 from "./src/example-6.vue";
import { onMounted } from "vue";
import { useTheme } from "vuetify";
import { MessageProvider } from "../plugin";

const vuetifyTheme = useTheme();

onMounted(() => {
  const isDarkModeMathMedia = matchMedia("(prefers-color-scheme: dark)");

  const updateTheme = (theme: string) => {
    const userSetTheme = localStorage.getItem("vitepress-theme-appearance");
    vuetifyTheme.global.name.value =
      userSetTheme === null || userSetTheme === "auto" ? theme : userSetTheme;
  };
  updateTheme(isDarkModeMathMedia.matches ? "dark" : "light");

  isDarkModeMathMedia.addEventListener("change", (mql) => {
    updateTheme(mql.matches ? "dark" : "light");
  });

  const __setItem = localStorage.setItem.bind(localStorage) as Storage["setItem"];

  localStorage.setItem = function (key: string, value: string) {
    if (key === "vitepress-theme-appearance") {
      if (value !== "auto") {
        vuetifyTheme.global.name.value = value;
      } else {
        vuetifyTheme.global.name.value = matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";
      }
    }
    return __setItem(key, value);
  };
})

</script>

<MessageProvider>

# Demo

## show a message

<<< ./src/example-1.vue {vue}

<Example1 />

> [!TIP]
> If you find the component lost the animation, the reason is that the vitepress check `prefers-reduced-motion`.
> 
> ![](/vitepress-1.jpg)
>
> you can open window10/11 animation effects to fix this problem.

## location

<<< ./src/example-2.vue {vue}

<Example2 />


## color

<<< ./src/example-3.vue {vue}

<Example3 />

## timeout

<<< ./src/example-4.vue {vue}

<Example4 />

## variant

<<< ./src/example-5.vue {vue}

<Example5 />

## html content or other component

<<< ./src/example-6.vue {vue}

<Example6 />

</MessageProvider>