import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'

Vue.use(ElementUI)
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 }

new Vue({
  render: (h) => h(App),
}).$mount('#app')
