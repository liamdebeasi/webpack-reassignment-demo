# Webpack Demo

## Steps to reproduce

1. Run `npm install`.
2. Open `src/index.js`. Observe that only `Badge` is imported.
2. Run `npx webpack`.
3. Run `grep -o -i -E 'avatar bundle|badge bundle' dist/main.js`. This will search the built output for the `"avatar bundle"` and `"badge bundle"` strings. These strings are found in the `avatar.js` and `badge.js` files and are used to quickly tell if Webpack is bundling the components when building. Observe that both strings appear, meaning both `Badge` and `Avatar` are bundled with the app.
4. In `components/avatar.js` remove `Avatar = Avatar`.
5. In `components/badge.js` remove `Badge = Badge`.
6. Run `npx webpack`.
7. Run `grep -o -i -E 'avatar bundle|badge bundle' dist/main.js`. Observe that only the ``"badge bundle"`` string appears, meaning only `Badge` is bundled.