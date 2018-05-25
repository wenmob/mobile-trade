// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-layer-mobile/need/layer.css' //弹出框
import layer from 'vue-layer-mobile'
import 'normalize.css';//元素在不同浏览器显示一致

import '@/assets/icomoon/style.css'

Vue.config.productionTip = false;
Vue.prototype.Tactive = "buy";
Vue.prototype.stockPosition = new Map();
Vue.prototype.OS_Title = "自选";
Vue.prototype.k = 0;
Vue.use(layer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
