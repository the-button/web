const state = {
  activeTheme: {
    display: 'Classic',
    icon: '',
    iconColor: '',
    primaryColor: '#e84545'
  },
  presetThemes: {
    classic: {
      display: 'Classic',
      icon: '',
      iconColor: '',
      primaryColor: '#e84545'
    },
    sigphi: {
      display: 'Sigma Phi Mu',
      icon: 'fa-anchor',
      iconColor: '#fff',
      primaryColor: '#47D2E9'
    },
    amazon: {
      display: 'Amazon',
      icon: 'fa-amazon',
      iconColor: '#fff',
      primaryColor: '#ff9900'
    }
  }
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
  },
  usePresetTheme (state, value) {
    state.activeTheme = state.presetThemes[value];
  }
};

const actions = {
};

export default {
  state,
  mutations,
  actions
};
