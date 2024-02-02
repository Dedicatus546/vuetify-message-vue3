# Vuetify Message 

It is a lib that can let you use `message(text, {})` to show a `v-snackbar` component.

## version

you must use `vue@>3.0.0` and `vuetify@>3.0.0`.

## How to use

### install

```bash
pnpm add vuetify-message-vue3
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