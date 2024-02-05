<script setup lang="ts">
import { useMessage } from "../../plugin";

const message = useMessage();

const locationList = [
  "top left",
  "top center",
  "top right",
  "bottom left",
  "bottom center",
  "bottom right",
] as const;
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <v-row>
        <v-col v-for="location of locationList" :key="location" cols="4">
          <v-btn
            variant="flat"
            color="primary"
            block
            @click="
              message(`${location} location`, {
                location,
              })
            "
          >
            {{ location }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
