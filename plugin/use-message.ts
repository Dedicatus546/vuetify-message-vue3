import { inject } from "vue";

import { injectKey, InjectValue } from "./type";

export default function useMessage() {
  const message = inject<InjectValue>(injectKey);
  if (!message) {
    throw new Error(
      "[vuetify-message-vue3]: you must use `message` function after using `message-provider` component in your parent component.",
    );
  }
  return message;
}
