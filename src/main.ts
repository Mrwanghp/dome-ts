import Vue from 'vue';
import './plugins/axios';
import './plugins/vant';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible/index.js';
import '@/assets/scss/common.scss';

// import _ from 'lodash';
// Vue.config.productionTip = false;
// declare global { // 全局变量设置
//   const _: typeof _;
// }
// import BaiduMap from 'vue-baidu-map';

// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: ''
// });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
