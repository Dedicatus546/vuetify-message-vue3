import { inject } from "vue";
import { InjectValue, injectKey } from ".";

export default function () {
  const message = inject<InjectValue>(injectKey);
  if (!message) {
    throw new Error("/* TODO */");
  }
  return message;
}
