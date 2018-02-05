import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import vueSocketio from 'vue-socket.io';

import 'bulma';
import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false;

Vue.use(vueSocketio, 'http://localhost:8080', store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
