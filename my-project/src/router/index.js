import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Location1 from "../components/location/location1.vue"
Vue.use(Router);
import Ushome from '../components/us/ushome.vue'
import Login from '../components/us/login'
import Upset from '../components/us/setpassword'
import Balance from '../components/us/messages/money.vue'
import Moneystate from '../components/us/messages/moneystate/moneystate.vue'
import Integral from '../components/us/messages/integral'
import Integralstate from '../components/us/messages/moneystate/integralstate.vue'
import Download from '../components/us/messages/download'

import Fuwu from '../components/us/messages/fuwuzhongxin'

import Fuwustate from '../components/us/messages/moneystate/fuwustate.vue'
import Huxinxi from '../components/us/messages/huxinxi'





export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      //城市列表
      path:'/home',
      component:HelloWorld
    },
    {
      //搜索地址
      path:"/city/:id",
      component:Location1
    },{
      //我的 模块
      path:"/profile",
      component:Ushome
    },{
      //登录
      path:'/login',
      component:Login
    },
    {
      //重置
      path:'/forget',
      component:Upset
    },{
      path:"/balance",
      component:Balance
      
    },{
      path:"/balance/detail",
      component:Moneystate
    },{
      path:"/points",
      component:Integral
    },{
      path:"/points/detail",
      component:Integralstate
    },{
      path:'/download',
      component:Download
    },{
      path:"/service",
      component:Fuwu
    },{
      path:"/service/questionDetail",
      component:Fuwustate
    },{
      path:"/profile/info",
      component:Huxinxi
    }
  ]
})
