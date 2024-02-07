<script setup lang="tsx">
import {VRow, VCol, VBtn} from "vuetify/components";
import { useMessage } from "../../plugin";

const message = useMessage();

const showHtml = () => {
  message(() => (<strong>a strong html</strong>));
};

const showComponent = () => {
  message(() => <VRow>
    <VCol cols={4}>
      <VBtn color="success">Btn1</VBtn>
    </VCol>
    <VCol cols={4}>
      <VBtn color="primary">Btn2</VBtn>
    </VCol>
    <VCol cols={4}>
      <VBtn color="warning">Btn3</VBtn>
    </VCol>
  </VRow>)
}
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-btn block color="primary" variant="flat" @click="showHtml">
            HTML
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn block color="primary" variant="flat" @click="showComponent">
            Other Component
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
