<script setup lang="ts">
import { useMessage } from "../../plugin";

const message = useMessage();

const timeoutList = [3, 10, -1] as const;
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <v-row>
        <v-col v-for="timeout of timeoutList" :key="timeout" cols="12">
          <v-btn
            block
            color="primary"
            variant="flat"
            @click="
              message(
                timeout > -1 ? `close after ${timeout}s` : 'always display',
                {
                  timeout: timeout > -1 ? timeout * 1000 : -1,
                },
              )
            "
          >
            {{ timeout > -1 ? `close after ${timeout}s` : "always display" }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
