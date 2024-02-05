<script setup lang="ts">
import { useMessage } from "../../plugin";

const message = useMessage();

const variantList = [
  "flat",
  "text",
  "elevated",
  "tonal",
  "outlined",
  "plain",
] as const;
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <v-row>
        <v-col v-for="variant of variantList" :key="variant" cols="12">
          <v-btn
            block
            color="primary"
            variant="flat"
            @click="
              message(variant, {
                variant,
              })
            "
          >
            {{ variant }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
