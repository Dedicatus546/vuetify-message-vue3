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
      <v-col cols="4">
        <v-card>
          <v-card-title> 颜色 </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-btn block color="primary" @click="message.primary('primary')"
                  >primary</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-btn block color="success" @click="message.success('success')"
                  >success</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-btn block color="warning" @click="message.warning('warning')"
                  >warn</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-btn block color="error" @click="message.error('error')"
                  >error</v-btn
                >
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
              <v-col cols="12">
                <v-btn
                  block
                  @click="
                    message(
                      '据央视新闻报道，当地时间2月1日，美国佛罗里达州州长德桑蒂斯宣布，将派遣佛州国民警卫队及州警卫队前往美墨边境，帮助得克萨斯州阻止非法移民入境。据悉，美国最高法院于上周下令允许边境巡逻队拆除该州设置的刀片刺网。对此，美国得州副州长帕特里克表示，该州将继续在美墨边境修建刀片刺网和其他屏障。如果执法部门对其进行拆除，该州将会与其“对抗”，同时更换新的屏障。（央视记者 刘骁骞）',
                    )
                  "
                >
                  很长的文字
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
