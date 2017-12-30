import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import Counter from './modules/counter';

Vue.use(Vuex);
Vue.use(VueResource);

Vue.http.interceptors.push(function (request, next) {
  // request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
  next();
});

export default new Vuex.Store({
  modules: {
    Counter
  },
  strict: process.env.NODE_ENV !== 'production'
});
