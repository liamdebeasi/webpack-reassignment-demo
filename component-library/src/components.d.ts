/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppAvatar {
    }
    interface AppBadge {
    }
}
declare global {
    interface HTMLAppAvatarElement extends Components.AppAvatar, HTMLStencilElement {
    }
    var HTMLAppAvatarElement: {
        prototype: HTMLAppAvatarElement;
        new (): HTMLAppAvatarElement;
    };
    interface HTMLAppBadgeElement extends Components.AppBadge, HTMLStencilElement {
    }
    var HTMLAppBadgeElement: {
        prototype: HTMLAppBadgeElement;
        new (): HTMLAppBadgeElement;
    };
    interface HTMLElementTagNameMap {
        "app-avatar": HTMLAppAvatarElement;
        "app-badge": HTMLAppBadgeElement;
    }
}
declare namespace LocalJSX {
    interface AppAvatar {
    }
    interface AppBadge {
    }
    interface IntrinsicElements {
        "app-avatar": AppAvatar;
        "app-badge": AppBadge;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-avatar": LocalJSX.AppAvatar & JSXBase.HTMLAttributes<HTMLAppAvatarElement>;
            "app-badge": LocalJSX.AppBadge & JSXBase.HTMLAttributes<HTMLAppBadgeElement>;
        }
    }
}
