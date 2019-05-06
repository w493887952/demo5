// 入口文件


import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)



/* 
import { Header,Swipe,SwipeItem,Button } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.component(Button.name, Button) */

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false;
import router from './router.js'


import app from './App.vue'




var vm = new Vue({
    el: '#app',
    render: c=>c(app),
        router

})