<script setup lang="ts">
import { useMessage } from "../../plugin";

const message = useMessage();

const colorList = ["primary", "success", "warning", "error"] as const;
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <v-row>
        <v-col v-for="color of colorList" :key="color" cols="12">
          <v-btn
            block
            :color="color"
            variant="flat"
            @click="
              message(`${color}`, {
                color,
              })
            "
          >
            {{ color }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
