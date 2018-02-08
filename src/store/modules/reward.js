const state = {
  open: false,
  rewards: {
    puppy: {
      display: 'Puppy',
      type: 'image',
      url: 'http://google.com/'
    }
  }
};

const mutations = {
  SOCKET_REWARDSTATUS (context, reward) {
    context.reward = context.rewards[reward];
    context.open = true;
  }
};

export default {
  state,
  mutations
};
