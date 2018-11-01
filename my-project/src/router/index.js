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
import Gai from '../components/us/messages/xiugainame'
import Dizhi from '../components/us/messages/shouhuodizhi'
import Xinzeng from '../components/us/messages/xinzengdizhi'

import Soudi from '../components/us/messages/soudizhi'

import Youhui from '../components/us/messages/youhui'

import Shuoming from '../components/us/messages/hongbao/hongbaoshuoming.vue'
import Lishi from '../components/us/messages/hongbao/lishihongbao.vue'

import Duihuan from '../components/us/messages/hongbao/duihuan.vue'
import Tuijian from '../components/us/messages/hongbao/tuijian.vue'
import Huiyuan from '../components/us/messages/huiyuanzhongxin/huiyuan.vue'
import Zaixian from '../components/us/messages/huiyuanzhongxin/zaixianzhifu.vue'
import Duihuiyuan from '../components/us/messages/huiyuanzhongxin/duihuanhuiyuan.vue'
import Jilu from '../components/us/messages/huiyuanzhongxin/goumaijilu.vue'
import Dingdan from '../components/us/messages/wodedingdan.vue'
import Jifen from '../components/us/messages/jifen.vue'
import Quanshuo from '../components/us/messages/moneystate/quanshuoming.vue'
import Yuanshuo from '../components/us/messages/huiyuanzhongxin/huiyuanshuoming.vue'
//hcf部分 
import Htakeout from '../components/vue-ele/htakeout'
import Hfind from '../components/vue-ele/hfind'
import Hsearch from '../components/vue-ele/hsearch'
import Hmine from '../components/vue-ele/hmine'
import Shopslist from  '../components/vue-ele/home/shopslist' 

import Zzs from '../components/vue-ele/home/zzs'
//店铺详情
import Business from '@/components/cicle/business-list'
import Detail from '@/components/cicle/shopDetail'
import Safe from '@/components/cicle/shopSafe'

import Tan from '@/components/cicle/safe01'
import Pay from '@/components/cicle/payment'
import Address from '@/components/cicle/address'
import Addlist from '@/components/cicle/addlist'



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
    },
    {
      //修改用户名
      path: "/profile/info/setusername",
      component: Gai
    }, {
      path: "/profile/info/address",
      component: Dizhi
    },{
      //新增地址
      path:"/profile/info/address/add",
      component:Xinzeng
    },{
      //搜索地址
      path:"/profile/info/address/add/addDetail",
      component:Soudi
    },{
      //我的优惠
      path:"/benefit",
      component:Youhui
    },{
      //红包说明
      path:'/benefit/hbDescription',
      component:Shuoming

    },
    {
      //红包历史
      path:"/benefit/hbHistory",
      component:Lishi
    },{
      //兑换红包
      path:'/benefit/exchange',
      component:Duihuan
    },{
      path:'/benefit/coupon',
      component:Quanshuo
    },{
      //推荐有奖
      path:"/benefit/commend",
      component:Tuijian
    },{
      //会员中心
      path:'/vipcard',
      component:Huiyuan
    },{
      //会员在线支付
      path:"/confirmOrder/payment",
      component:Zaixian
    },{
      //兑换会员
      path:"/vipcard/useCart",
      component:Duihuiyuan
    },{
      //会员购买记录
        path:"/vipcard/invoiceRecord",
        component:Jilu
    },{
      //我的订单
      path:"/order",
      component:Dingdan
    },{
      path:"/chome/index",
      component:Jifen
    },{
      //会员说明
      path:"/vipcard/vipDescription",
      component:Yuanshuo
    },
    //hcf部分 
    {
      //外卖页面
      path: '/htakeout',
      name: 'htakeout',
      component: Htakeout
    },
    {
      // 搜索页面
       path: '/hsearch',
      name: 'hsearch',
       component: Hsearch
     },{
       //发现页面
      path: '/hfind',
      name: 'hfind',
       component: Hfind
     },{
       //我的页面
      path: '/hmine',
      name: 'hmine',
       component: Hmine
     },{
       //商铺列表页面
      path: '/shopslist',
      name: 'shopslist',
       component:Shopslist
     },
        //商铺详情页面
     {
      path: '/shop',
      name: 'business-list',
       component: Business
     },
    {
      path: '/shop/shopDetail',
      name: 'shopdetail',
      component: Detail
    },
    {
      path: '/shop/shopDetail/shopSafe',
      name: 'shopSafe',
      component: Safe
    },
    {
      path: '/shop/list01',
      name: 'safe01',
      component: Tan
    },
    {
      path: '/shop/payment',
      name: 'shopche',
      component: Pay
    },
    {
      path: '/shop/payment/address',
      name: 'address',
      component: Address
    },
    {
      path: '/shop/payment/address/addlist',
      name: 'addlist',
      component: Addlist
    }

  ]
})
