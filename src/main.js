import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import './assets/css/init.css'//样式初始化
import 'amfe-flexible' //适配

import {
  Field
} from 'vant';
Vue.use(Field)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
