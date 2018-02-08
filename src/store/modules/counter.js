const state = {
  counter: undefined
};

const mutations = {
  SOCKET_COUNTERSTATUS (context, counter) {
    context.counter = counter;
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
