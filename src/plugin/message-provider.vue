<script setup lang="ts">
import { provide, ref } from "vue";
import { VSnackbar, VFadeTransition } from "vuetify/components";
import {
  injectKey,
  InjectValue,
  MessageOptions,
  MessageInstance,
  MessageLocation,
  isMessageTopInstance,
} from ".";
import { nextTick } from "vue";
import { computed } from "vue";

let id = 0;

const instanceLocationMap = ref<
  Record<MessageLocation, Array<MessageInstance> | null>
>({
  "top left": null,
  "top center": null,
  "top right": null,
  "bottom left": null,
  "bottom center": null,
  "bottom right": null,
});
const instanceDomMap = ref<Map<number, HTMLElement>>(new Map());

const updateDom = (id: MessageInstance["id"], dom: HTMLElement | null) => {
  console.log(dom);
  if (dom === null) {
    instanceDomMap.value.delete(id);
    return;
  }
  instanceDomMap.value.set(id, dom);
};

const locationList = computed<Array<MessageLocation>>(
  () => Object.keys(instanceLocationMap.value) as MessageLocation[]
);

const defaultMessageOptions: MessageOptions = {
  text: "",
  location: "top center",
  timeout: 5000,
  variant: "elevated",
};

const close = (instance: MessageInstance) => {
  nextTick(() => {
    const { id, location } = instance;
    const instanceList = instanceLocationMap.value[location!];
    if (!instanceList) {
      return;
    }
    const index = instanceList.findIndex((inst) => inst.id === id);
    if (index > -1) {
      instanceList.splice(index, 1);
    }
  });
};

const getNextPosition = (inst: MessageInstance, gutter: number = 10) => {
  const location = inst.location;
  const instanceList = instanceLocationMap.value[location];
  if (instanceList === null) {
    return 0;
  }
  return instanceList
    .map((inst) => instanceDomMap.value.get(inst.id))
    .reduce<number>((pos, el) => {
      return pos + (el ? el.offsetTop : 0) + gutter;
    }, 0);
};

const show = ((
  textOrConfig: string | MessageOptions,
  messageOptions: MessageOptions
) => {
  const configs = {} as MessageOptions;
  Object.assign(configs, defaultMessageOptions, messageOptions, {
    text: textOrConfig,
  });

  const location = configs.location!;

  let instanceList = instanceLocationMap.value[location];
  if (instanceList === null) {
    instanceList = instanceLocationMap.value[location] = [];
  }

  const instanceId = id++;
  const messageInstance: MessageInstance = {
    id: instanceId,
    modelValue: true,
    location,
    text: configs.text,
    color: configs.color!,
    timeout: configs.timeout!,
    variant: configs.variant!,
  } as MessageInstance;
  const nextPostion = getNextPosition(messageInstance);
  if (isMessageTopInstance(messageInstance)) {
    messageInstance.top = nextPostion;
  } else {
    messageInstance.bottom = nextPostion;
  }

  instanceList.push(messageInstance);

  return {
    close: () => {
      close(messageInstance);
    },
  };
}) as InjectValue;

(["primary", "success", "warn", "error"] as const).forEach((key) => {
  show[key] = (text, config) => {
    Object.assign(config, {
      color: key,
    });
    return show(text, config);
  };
});

provide<InjectValue>(injectKey, show);
</script>

<template>
  <slot></slot>
  <template v-for="location of locationList" :key="location">
    <v-snackbar
      v-for="inst of instanceLocationMap[location]"
      :ref="(el: any) => updateDom(inst.id, el)"
      :style="{
        top: inst.top + 'px',
        bottom: inst.bottom + 'px',
      }"
      :key="inst.id"
      :model-value="inst.modelValue"
      :location="inst.location"
      :color="inst.color"
      :text="inst.text"
      :timeout="inst.timeout"
      :variant="inst.variant"
      :transition="{
        onAfterLeave: () => close(inst),
        component: VFadeTransition,
      }"
    ></v-snackbar>
  </template>
</template>
