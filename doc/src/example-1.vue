<script setup lang="ts">
import { useMessage } from "../../plugin";

const message = useMessage();

const show = () => {
  message("hello world!");
};
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <v-btn color="primary" block variant="flat" @click="show">
        show message
      </v-btn>
    </v-card-text>
  </v-card>
</template>
