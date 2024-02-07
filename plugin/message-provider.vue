<script setup lang="ts">
import { computed, CSSProperties, nextTick, provide, ref } from "vue";
import { VFadeTransition, VSnackbar } from "vuetify/components";

import {
  injectKey,
  InjectValue,
  isMessageTopInstance,
  MessageBaseInstance,
  MessageBottomInstance,
  MessageInstance,
  MessageLocation,
  MessageOptions,
  MessageTopInstance,
} from "./type";

const defaultMessageOptions: MessageOptions = {
  color: "primary",
  location: "top center",
  timeout: 5000,
  variant: "elevated",
};

const componentOptions = withDefaults(defineProps<MessageOptions>(), {
  color: "primary",
  location: "top center",
  timeout: 5000,
  variant: "elevated",
});

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

const updateDom = (id: MessageInstance["id"], ref: VSnackbar | null) => {
  nextTick(() => {
    const dom = ref ? ref.contentEl : null;
    if (!dom) {
      instanceDomMap.value.delete(id);
      return;
    }
    instanceDomMap.value.set(id, dom);
  });
};

const locationList = computed<Array<MessageLocation>>(
  () => Object.keys(instanceLocationMap.value) as MessageLocation[],
);

const remove = (instance: MessageInstance) => {
  const { id, location } = instance;
  const instanceList = instanceLocationMap.value[location!];
  if (!instanceList) {
    return;
  }
  const index = instanceList.findIndex((inst) => inst.id === id);
  if (index > -1) {
    patchPosition(instanceList[index], index);
    instanceList.splice(index, 1);
  }
};

const close = (
  id: MessageInstance["id"],
  location: MessageInstance["location"],
) => {
  const instanceList = instanceLocationMap.value[location];
  if (!instanceList) {
    return;
  }
  const index = instanceList.findIndex((inst) => inst.id === id);
  if (index > -1) {
    instanceList[index].modelValue = false;
  }
};

const patchPosition = (removeInst: MessageInstance, index: number) => {
  const { location } = removeInst;
  const instanceList = instanceLocationMap.value[location];
  if (!instanceList) {
    return;
  }
  if (isMessageTopInstance(removeInst)) {
    const topInstanceList = instanceList as Array<MessageTopInstance>;
    for (let i = topInstanceList.length - 1; i > index; i--) {
      topInstanceList[i].top = topInstanceList[i - 1].top;
    }
  } else {
    const bottomInstanceList = instanceList as Array<MessageBottomInstance>;
    for (let i = bottomInstanceList.length - 1; i > index; i--) {
      bottomInstanceList[i].bottom = bottomInstanceList[i - 1].bottom;
    }
  }
};

const getNextDistance = (inst: MessageBaseInstance, gutter: number = 10) => {
  const location = inst.location;
  const instanceList = instanceLocationMap.value[location];
  if (instanceList === null) {
    return 0;
  }
  return instanceList
    .map((inst) => instanceDomMap.value.get(inst.id))
    .reduce<number>((pos, el) => {
      return pos + (el ? el.offsetHeight : 0) + gutter;
    }, 0);
};

const getStyle = (inst: MessageInstance) => {
  const style = {
    transition: "top .3s, bottom .3s",
  } as CSSProperties;
  if (isMessageTopInstance(inst)) {
    style.top = inst.top + "px";
  } else {
    style.bottom = inst.bottom + "px";
  }
  return style;
};

const message: InjectValue = ((text, messageOptions) => {
  const configs = {} as MessageOptions;
  Object.assign(
    configs,
    defaultMessageOptions,
    componentOptions,
    messageOptions,
  );

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
    text,
    color: configs.color!,
    timeout: configs.timeout!,
    variant: configs.variant!,
  } as MessageInstance;
  const nextPostion = getNextDistance(messageInstance);
  if (isMessageTopInstance(messageInstance)) {
    messageInstance.top = nextPostion;
  } else {
    messageInstance.bottom = nextPostion;
  }

  instanceList.push(messageInstance as MessageInstance);

  return {
    close: () => {
      close(messageInstance.id, messageInstance.location);
    },
  };
}) as InjectValue;

(["primary", "success", "warning", "error"] as const).forEach((key) => {
  message[key] = (text, config) => {
    config = Object.assign({}, config, {
      color: key,
    });
    return message(text, config);
  };
});

provide<InjectValue>(injectKey, message);
</script>

<template>
  <slot></slot>
  <template v-for="location of locationList" :key="location">
    <v-snackbar
      v-for="inst of instanceLocationMap[location]"
      :ref="
        (el: any) => {
          updateDom(inst.id, el);
        }
      "
      :key="inst.id"
      :style="getStyle(inst)"
      :model-value="inst.modelValue"
      :location="inst.location"
      :color="inst.color"
      :timeout="inst.timeout"
      :variant="inst.variant"
      :transition="{
        onAfterLeave: () => remove(inst),
        component: VFadeTransition,
      }"
    >
      <template v-if="typeof inst.text === 'string'">
        {{ inst.text }}
      </template>
      <component :is="inst.text" v-else></component>
    </v-snackbar>
  </template>
</template>
