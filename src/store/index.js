import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import Counter from './modules/counter';
import Theme from './modules/theme';

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
  modules: {
    Counter,
    Theme
  },
  strict: process.env.NODE_ENV !== 'production'
});
