<script setup lang="ts">
import { useMessage } from "../../plugin";

const message = useMessage();

let close: (() => void) | null = null;
const open = () => {
  if (close) {
    return;
  }
  close = message.primary("hello", {
    timeout: -1,
  }).close;
};
const handleClose = () => {
  close?.();
  close = null;
};
</script>

<template>
  <v-divider />
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title>方向</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'top left',
                    })
                  "
                >
                  上左
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'top center',
                    })
                  "
                >
                  上中
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'top right',
                    })
                  "
                >
                  上右
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'bottom left',
                    })
                  "
                >
                  上左
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'bottom center',
                    })
                  "
                >
                  上中
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'bottom right',
                    })
                  "
                >
                  上右
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>延迟关闭</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'top center',
                      timeout: 2000,
                    })
                  "
                >
                  2s 后关闭
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'top center',
                      timeout: 5000,
                    })
                  "
                >
                  5s 后关闭
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn
                  block
                  @click="
                    message.primary('hello', {
                      location: 'top center',
                      timeout: -1,
                    })
                  "
                >
                  一直打开
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title> 手动关闭 </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-btn block @click="open">一直打开</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn block @click="handleClose">手动关闭</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
