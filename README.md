# ⚡ ⚡ ⚡ <img width="20" src="https://vuejs.org/images/logo.png" alt="Vue logo"> + <img width="20" src="https://vitejs.dev/logo.svg" alt="Vite logo"> + <img width="80" src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg"> ⚡ ⚡ ⚡

</p>

## [vite](https://vitejs.dev/)

`yarn create vite vite-vue2 --template vue`

## vue2

- `yarn add vue@2 vue-template-compiler`
- `yarn add vite-plugin-vue2 -D`

```js
// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [createVuePlugin()],
})
```

```js
// main.js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

- modify component with vue2 syntax

## [element-ui](https://element.eleme.io/#/zh-CN/component/quickstart)

- `yarn add element-ui`

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```

### custom theme

- `yarn add sass`

```scss
// element-variables
/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import '~element-ui/packages/theme-chalk/src/index';
```

```js
// vite.config.js
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: '$1',
      },
      {
        find: /^@\//,
        replacement: `${path.resolve(__dirname, 'src')}/`,
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        additionalData: `@import '@/element-variables.scss';`,
      },
    },
  },
})
```

```json
// https://github.com/vitejs/vite/issues/6736
// package.json
"devDependencies": {
  "sass": "npm:sass-embedded@latest",
}
```
