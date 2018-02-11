const state = {
  open: false,
  reward: null,
  rewards: {
    puppy: {
      display: 'Puppy',
      type: 'image',
      url: 'http://theprojectheal.org/wp-content/uploads/2016/01/Aaaaaawwwwwwwwww-Sweet-puppies-9415255-1600-1200.jpg'
    }
  }
};

const mutations = {
  setOpen (state, value) {
    state.open = value;
  },
  SOCKET_REWARD (context, reward) {
    context.reward = context.rewards[reward];
    context.open = true;
  }
};

export default {
  state,
  mutations
};
