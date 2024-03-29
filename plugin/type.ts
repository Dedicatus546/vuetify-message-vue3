import { ExtractPropTypes, VNodeChild } from "vue";
import { VSnackbar } from "vuetify/components";

export const injectKey = Symbol("vuetify-message");

export type TextType = string | (() => VNodeChild);

export interface closable {
  close: () => void;
}

export type VSnackbarProps = ExtractPropTypes<VSnackbar>;

export type MessageLocation =
  | "top left"
  | "top center"
  | "top right"
  | "bottom left"
  | "bottom center"
  | "bottom right";

export interface MessageOptions {
  color?: VSnackbarProps["color"];
  location?: MessageLocation;
  timeout?: VSnackbarProps["timeout"];
  variant?: VSnackbarProps["variant"];
}

export interface MessageBaseInstance extends Required<MessageOptions> {
  id: number;
  modelValue: boolean;
  text: TextType;
  top?: number;
  bottom?: number;
}

export interface MessageTopInstance extends MessageBaseInstance {
  location: Extract<MessageLocation, `top ${string}`>;
  top: number;
}

export interface MessageBottomInstance extends MessageBaseInstance {
  location: Extract<MessageLocation, `bottom ${string}`>;
  bottom: number;
}

export type MessageInstance = MessageTopInstance | MessageBottomInstance;

export const isMessageTopInstance = (
  inst: MessageBaseInstance,
): inst is MessageTopInstance => {
  return inst.location.startsWith("top");
};

export interface Message<T = any> {
  (
    text: TextType,
    config?: T extends string ? Omit<MessageOptions, "color"> : MessageOptions,
  ): closable;
}

export interface InjectValue extends Message<void> {
  primary: Message<"primary">;
  success: Message<"success">;
  warning: Message<"warning">;
  error: Message<"error">;
}
