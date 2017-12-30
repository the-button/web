<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="counter-button-container">
                    <counter-button inactiveBackground="#e84545"
                                    active-background="#c81919"
                                    hover-background="#de1c1c"
                                    box-shadow="0 15px 0 0 #b11616, 0 20px 0 0 #d1d1d1"
                                    @click="clickButton"/>
                    <progress class="counter-progress progress" :value="activeCounter.current_value" :max="activeCounter.max_value"></progress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CounterButton from "./Counter-Button";

  export default {
    components: {
      CounterButton
    },
    name: "home",
    computed: {
      activeCounter: function () {
        return this.$store.state.Counter.activeCounter;
      }
    },
    methods: {
      clickButton () {
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