// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入vue.js核心库(模块化方式)
import Vue from 'vue'
//导入App.vue组件

import App from './App'
//导入路由模块
import router from './router'
//引入vuex封装模块
import store from './store'

import VueAwesomeSwiper from  'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'


//引入自定义的请求模块
import {Plugin1} from './lib/request'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
//引入vuex-along模块


Vue.use(VueAxios, axios);
axios.defaults.baseURL='/api'; 


Vue.use(ElementUI);



Vue.use(Plugin1,66,666)
//如何给所有组件实例配置共享方法?? 给Vue原型添加
//Vue.use()发生了什么?  会回调插件中install方法,并传递vue实例



Vue.use(VueAwesomeSwiper, /* { default global options } */)
import { format } from 'path';


//Vue.config.productionTip = false







/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  //声明组件
  components: { App },
  template: '<App/>'
})


