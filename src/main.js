import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'

import headComponent from "./components/global/headComponent";
import footComponent from "./components/global/footComponent";

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
//mockjs
import useMock from './mock/mock'
useMock(false)

Vue.component('headComponent', headComponent);
Vue.component('footComponent', footComponent);

//全局变量
import doMain from '@/axios/addres'
import {get, post} from '@/axios/http'
Vue.prototype.$doMain = doMain
Vue.prototype.$get = get
Vue.prototype.$post = post



const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
