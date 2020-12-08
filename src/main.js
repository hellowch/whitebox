import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import echarts from 'echarts'
import  VueTouch from 'vue-touch'

Vue.config.productionTip = false

// use
// Vue.use(echarts)
Vue.use(VueTouch,{name:'v-touch'})
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

VueTouch.config.swipe = {
  threshold:50  //设置左右滑动的距离
}