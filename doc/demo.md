<script setup>
import Example1 from "./src/example-1.vue";
import Example2 from "./src/example-2.vue";
import Example3 from "./src/example-3.vue";
import Example4 from "./src/example-4.vue";
import Example5 from "./src/example-5.vue";
import { MessageProvider } from "../plugin";
</script>

# Demo

## show a message

<<< ./src/example-1.vue {vue}

<MessageProvider>
  <Example1 />
</MessageProvider>

> [!TIP]
> If you find the component lost the animation, the reason is that the vitepress check `prefers-reduced-motion`.
> 
> ![](/vitepress-1.jpg)
>
> you can open window10/11 animation effects to fix this problem.

## location

<<< ./src/example-2.vue {vue}

<MessageProvider>
  <Example2 />
</MessageProvider>

## color

<<< ./src/example-3.vue {vue}

<MessageProvider>
  <Example3 />
</MessageProvider>

## timeout

<<< ./src/example-4.vue {vue}

<MessageProvider>
  <Example4 />
</MessageProvider>

## variant

<<< ./src/example-5.vue {vue}

<MessageProvider>
  <Example5 />
</MessageProvider>