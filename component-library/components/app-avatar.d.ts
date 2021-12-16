import type { Components, JSX } from "../dist/types/components";

interface AppAvatar extends Components.AppAvatar, HTMLElement {}
export const AppAvatar: {
  prototype: AppAvatar;
  new (): AppAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
