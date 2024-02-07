# API

## MessageProvider

The component define the [MessageConfig](#messageconfig) props, and you can configure it to rewrite the global behavior.

```md
<template>
  <MessageProvider 
    color="primary" 
    location="top center" 
    :timeout="-1"
    variant="elevated">
    <!-- your component here -->
  </MessageProvider>
</template>
```

## useMessage

It is a composable, and it will return a function that you can execute it to show a snackbar. It's second argument is the same as MessageProvider's prop.

It will return a object that contain a close method that can hide snackbar immediatly. When you create a snackbar that it will not hide automatically, it is a good way to control the time you want to hide it.

```typescript
export interface Message<T = any> {
  (
    text: string | (() => VNodeChild),
    config?: T extends string ? Omit<MessageOptions, "color"> : MessageOptions,
  ): {
    close: () => void;
  };
}
```

## Short call

the result which is returned by `useMessage` function has four short functions.

- primary
- success
- warning
- error

they just use the config which is be set color property.

```md
<script setup lang="ts">
import { onMounted } from "vue";
import { useMessage } from "vuetify-message-vue3";

const message = useMessage();

onMounted(() => {
  // it is same as message("hello world!", { color: "primary" })
  message.primary("hello world!"); 
})
</script>
```

## MessageConfig

```typescript
export interface MessageOptions {
  color?: VSnackbarProps["color"];
  location?:
    | "top left"
    | "top center"
    | "top right"
    | "bottom left"
    | "bottom center"
    | "bottom right";
  timeout?: VSnackbarProps["timeout"];
  variant?: VSnackbarProps["variant"];
}
```
