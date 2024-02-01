<script setup lang="ts">
import { VApp } from "vuetify/components";
import MessageProvider from "./plugin/message-provider.vue";
import Example from "./components/example.vue";
</script>

<template>
  <v-app>
    <MessageProvider>
      <Example></Example>
    </MessageProvider>
  </v-app>
</template>

<style>
html {
  overflow-y: auto !important;
}
</style>
