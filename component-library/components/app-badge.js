import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

let AppBadge$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, "Badge Component"));
  }
};
AppBadge$1 = /*@__PURE__*/ proxyCustomElement(AppBadge$1, [1, "app-badge"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["app-badge"];
  components.forEach(tagName => { switch (tagName) {
    case "app-badge":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AppBadge$1);
      }
      break;
  } });
}

const AppBadge = AppBadge$1;
const defineCustomElement = defineCustomElement$1;

export { AppBadge, defineCustomElement };
