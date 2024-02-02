import { inject } from "vue";

import { injectKey, InjectValue } from ".";

export default function () {
  const message = inject<InjectValue>(injectKey);
  if (!message) {
    throw new Error(
      "[vuetify-message]: you must use `message` function after using `message-provider` component in your parent component.",
    );
  }
  return message;
}
