import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

let AppAvatar$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, "Avatar Component"));
  }
};
AppAvatar$1 = /*@__PURE__*/ proxyCustomElement(AppAvatar$1, [1, "app-avatar"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["app-avatar"];
  components.forEach(tagName => { switch (tagName) {
    case "app-avatar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AppAvatar$1);
      }
      break;
  } });
}

const AppAvatar = AppAvatar$1;
const defineCustomElement = defineCustomElement$1;

export { AppAvatar, defineCustomElement };
