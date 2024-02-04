# Dependency

Because of the lib is on top of Vue3 and Vuetify3, so you project must use `vue@>3.0.0` and `vuetify@>3.0.0`.

# How to use

## install

```bash
npm add vuetify-message-vue3
# or pnpm add vuetify-message-vue3
# or yarn add vuetify-message-vue3
```

## use `MessageProvider` component.

Put you content in `MessageProvider` component. the `MessageProvider` component exports a default slot that it will render the incoming content as it.

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

## use `useMessage` composable.

use `useMessage` composable, and it's returning is a function that you can create a `snackbar`.

```vue
<!-- HelloWorld.vue -->
<script setup lang="ts">
import { useMessage } from "vuetify-message-vue3";

const message = useMessage();

const show = () => {
  message.show("hello world!");
}
</script>

<template>
  <v-btn @click="show">show message</v-btn>
</template>
```