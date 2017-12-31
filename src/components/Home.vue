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
                    <progress class="counter-progress progress"
                              :value="activeCounter.current_value"
                              :max="activeCounter.max_value"></progress>
                    <theme-editor></theme-editor>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CounterButton from "./Counter-Button";
  import ThemeEditor from './Theme-Editor';
  import Color from 'color';

  export default {
    components: {
      CounterButton,
      ThemeEditor
    },
    name: "home",
    computed: {
      activeCounter: function () {
        return this.$store.state.Counter.activeCounter;
      },
      icon() {
        return this.$store.state.Theme.activeTheme.icon;
      },
      iconColor() {
        return this.$store.state.Theme.activeTheme.iconColor;
      },
      primaryColor() {
        return this.$store.state.Theme.activeTheme.primaryColor;
      },
      inactiveBackground() {
        return this.primaryColor;
      },
      activeBackground() {
        return Color(this.primaryColor).darken(.05).string();
      },
      hoverBackground() {
        return Color(this.primaryColor).saturate(.15).string();
      },
      boxShadow() {
        return '0 15px 0 0 ' + Color(this.primaryColor).darken(.3).string() + ', 0 20px 0 0 #d1d1d1';
      }
    },
    methods: {
      clickButton() {
        this.$store.dispatch("incrementActiveCounter");
      }
    }
  }
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

    .counter-progress {
        width: 15vw;
        margin-top: 40px;
    }
</style>