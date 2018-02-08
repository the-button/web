<template>
    <div>
        {{ reward }}
    </div>
</template>

<script>
  export default {
    name: 'reward-modal',
    computed: {
      rewards () {
        return this.$store.state.Reward.rewards;
      },
      reward () {
        return this.$store.state.Reward.reward;
      },
      open () {
        return this.$store.state.Reward.open;
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
