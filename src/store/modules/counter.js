import Vue from 'vue';

const state = {
  activeCounter: {},
  isLoaded: false
};

const mutations = {
  setActiveCounter (state, value) {
    state.activeCounter = value;
    state.isLoaded = true;
  }
};

const actions = {
  getActiveCounter (context) {
    Vue.http.get(process.env.API_URL + '/api/counter/active').then(response => {
      // load counter details
    }, response => {
      console.log(response.body);
    });
  }
};

export default {
  state,
  mutations,
  actions
};
