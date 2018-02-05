const state = {
  counter: {}
};

const mutations = {
  SOCKET_COUNTERSTATUS (context, counter) {
    context.counter = counter[0];
  }
};

const actions = {
  getCounterStatus (context) {
    this._vm.$socket.emit('getCounter');
  },
  incrementCounter (context) {
    this._vm.$socket.emit('incrementCounter');
  }
};

export default {
  state,
  mutations,
  actions
};
