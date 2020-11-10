import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routers: [{
    name: '首頁',
    path: '/index',
    component: 'Home',
  }],
});
