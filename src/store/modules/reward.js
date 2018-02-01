import Vue from 'vue';

const state = {
  reward: {},
  viewed: false
};

const mutations = {
  setReward (state, value) {
    state.reward = value;
  }
};

const actions = {
  getReward (context) {
    Vue.http.get('http://localhost:8080/reward/').then(response => {
      context.commit('setReward', response.body);
      console.log(response.body);
    }, response => {
      console.log(response.body);
    });
  },
  setRewardAsViewed (context) {

  }
};

export default {
  state,
  mutations,
  actions
};
