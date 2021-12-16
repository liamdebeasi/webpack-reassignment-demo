# Webpack Demo

## Steps to reproduce

1. Run `cd component-library && npm install && npm run build` to build the Stencil component library.
2. In the `component-library` directory, run `npm pack`.
3. In the root directory, run `npm install`.
4. Open `src/index.js`. Observe that only `AppBadge` is imported.
5. Run `npx webpack`.
6. Run `grep -o -i -E 'Avatar Component|Badge Component' dist/main.js`. This will search the built output for the `"Avatar Component"` and `"Badge Component"` strings. These strings are found in the `app-avatar.js` and `app-badge.js` files and are used to quickly tell if Webpack is bundling the components when building. Observe that both strings appear, meaning both `AppBadge` and `AppAvatar` are bundled with the app.
7. Update `node_modules/component-library/components/app-badge.js` with the following modifications:

```diff
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
-AppBadge$1 = /*@__PURE__*/ proxyCustomElement(AppBadge$1, [1, "app-badge"]);
+const AppBadge = /*@__PURE__*/ proxyCustomElement(AppBadge$1, [1, "app-badge"]);
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

-const AppBadge = AppBadge$1;
const defineCustomElement = defineCustomElement$1;

export { AppBadge, defineCustomElement };

```
8. Update `node_modules/component-library/components/app-avatar.js` with the following modifications:

```diff
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
-AppAvatar$1 = /*@__PURE__*/ proxyCustomElement(AppAvatar$1, [1, "app-avatar"]);
+const AppAvatar = /*@__PURE__*/ proxyCustomElement(AppAvatar$1, [1, "app-avatar"]);
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

-const AppAvatar = AppAvatar$1;
const defineCustomElement = defineCustomElement$1;

export { AppAvatar, defineCustomElement };
```
9. Run `npx webpack`.
10. Run `grep -o -i -E 'Avatar Component|Badge Component' dist/main.js`. Observe that only the ``"Badge Component"`` string appears, meaning only `AppBadge` is bundled.