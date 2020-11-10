import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import router from './router/index.js';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
