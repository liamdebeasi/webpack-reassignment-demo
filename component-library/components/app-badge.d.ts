import type { Components, JSX } from "../dist/types/components";

interface AppBadge extends Components.AppBadge, HTMLElement {}
export const AppBadge: {
  prototype: AppBadge;
  new (): AppBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
