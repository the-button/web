import Vue from 'vue';

const state = {
  counter: {},
  isLoaded: false
};

const mutations = {
  setCounter (state, value) {
    state.counter = value;
    state.isLoaded = true;
  }
};

const actions = {
  getCounter (context) {
    Vue.http.get('http://localhost:8080/counter/').then(response => {
      context.commit('setCounter', response.body);
      console.log(response.body);
    }, response => {
      console.log(response.body);
    });
  },
  incrementCounter (context) {
    Vue.http.post('http://localhost:8080/counter/').then(response => {
      context.commit('setCounter', response.body);
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
