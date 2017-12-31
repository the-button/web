const state = {
  activeTheme: {
    icon: '',
    iconColor: '',
    primaryColor: '#e84545'
  },
  presetThemes: []
};

const mutations = {
  setIcon (state, value) {
    state.activeTheme.icon = value;
  },
  setIconColor (state, value) {
    state.activeTheme.iconColor = value;
  },
  setPrimaryColor (state, value) {
    state.activeTheme.primaryColor = value;
  }
};

const actions = {
};

export default {
  state,
  mutations,
  actions
};
