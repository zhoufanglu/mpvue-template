import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'

import headComponent from "./components/global/headComponent";
import footComponent from "./components/global/footComponent";

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false


Vue.component('headComponent', headComponent);
Vue.component('footComponent', footComponent);

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
