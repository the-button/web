<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="counter-button-container">
                    <counter-button :icon="icon"
                                    :icon-color="iconColor"
                                    :inactive-background="inactiveBackground"
                                    :active-background="activeBackground"
                                    :hover-background="hoverBackground"
                                    :box-shadow="boxShadow"
                                    @click="clickButton"/>
                    <counter-progress :currentValue="counter.currentValue"
                                      :maxValue="counter.maxValue"/>
                    <theme-editor/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CounterButton from './Counter-Button';
  import Color from 'color';
  import ThemeEditor from './Theme-Editor';
  import CounterProgress from './Counter-Progress';

  export default {
    components: {
      CounterProgress,
      ThemeEditor,
      CounterButton,
    },
    name: 'home',
    created: function () {
      this.$store.dispatch('getCounterStatus');
    },
    data: function () {
      return {
        showReward: false
      };
    },
    computed: {
      counter () {
        return this.$store.state.Counter.counter;
      },
      icon () {
        return this.$store.state.Theme.activeTheme.icon;
      },
      iconColor () {
        return this.$store.state.Theme.activeTheme.iconColor;
      },
      primaryColor () {
        return this.$store.state.Theme.activeTheme.primaryColor;
      },
      inactiveBackground () {
        return this.primaryColor;
      },
      activeBackground () {
        return Color(this.primaryColor).darken(.05).string();
      },
      hoverBackground () {
        return Color(this.primaryColor).saturate(.15).string();
      },
      boxShadow () {
        return '0 15px 0 0 ' + Color(this.primaryColor).darken(.3).string() + ', 0 20px 0 0 #d1d1d1';
      },
      reward () {
        return this.$store.state.Reward.reward;
      }
    },
    methods: {
      clickButton () {
        this.$store.dispatch('incrementCounter');
      }
    }
  };
</script>

<style scoped lang="scss">
    .counter-button-container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        .counter-progress {
            width: 50vw;
        }
    }
</style>
