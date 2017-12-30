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
    Vue.http.get('http://localhost:8080/counters/active').then(response => {
      Vue.http.get('http://localhost:8080/counters/' + response.body.active_counter_uuid).then(response => {
        context.commit('setActiveCounter', response.body.counter);
      }, response => {
        console.log(response.body);
      });
    }, response => {
      console.log(response.body);
    });
  },
  incrementActiveCounter (context) {
    console.log('Incrementing counter');
    Vue.http.post('http://localhost:8080/counters/' + state.activeCounter.counter_uuid).then(response => {
      context.commit('setActiveCounter', response.body.counter);
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
