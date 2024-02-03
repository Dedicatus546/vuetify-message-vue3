# Vuetify Message 

It is a lib that can let you use `message(text, {})` to show a `v-snackbar` component.

## version

you must use `vue@>3.0.0` and `vuetify@>3.0.0`.

## How to use

### install

```bash
npm add vuetify-message-vue3
# or pnpm add vuetify-message-vue3
# or yarn add vuetify-message-vue3
```

### put you content in MessageProvider which is exported from this package.


```vue
<!-- App.vue -->
<script setup lang="ts">
import { MessageProvider } from "vuetify-message-vue3";
</script>

<template>
  <MessageProvider>
    <!-- here write you content -->
    <HelloWorld />
  </MessageProvider>
</template>
```

### use `useMessage` composable to show a message.

```vue
<!-- HelloWorld.vue -->
<script setup lang="ts">
import { useMessage } from "vuetify-message-vue3";

const message = useMessage();

const show = () => {
  message.show("hello world!", {});
}
</script>

<template>
  <v-btn @click="show">show message</v-btn>
</template>
```

## API

```typescript
function message(text: string, config: MessageConfig): {
  close: () => void;
}

interface MessageConfig {
  // VSnackbar's color prop
  color?: VSnackbarProps["color"];
  text: string;
  // six location 
  location?:
    | "top left"
    | "top center"
    | "top right"
    | "bottom left"
    | "bottom center"
    | "bottom right";
  // VSnackbar's timeout prop
  timeout?: VSnackbarProps["timeout"];
  // VSnackbar's variant prop
  variant?: VSnackbarProps["variant"];
}

// message.primary 
// color property will be set 'primary'
function primary(text: string, config: Omit<MessageConfig, "color">): {
  close: () => void;
}

// message.success 
// color property will be set 'success'
function success(text: string, config: Omit<MessageConfig, "color">): {
  close: () => void;
}

// message.warn 
// color property will be set 'warn'
function warn(text: string, config: Omit<MessageConfig, "color">): {
  close: () => void;
}

// message.error 
// color property will be set 'error'
function error(text: string, config: Omit<MessageConfig, "color">): {
  close: () => void;
}
```