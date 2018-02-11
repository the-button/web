<template>
    <div class="modal" v-bind:class="{ 'is-active' : open}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <template v-if="reward && reward.type === 'image'">
                <p class="image is-4by3">
                    <img :src="reward.url" class="reward--image">
                </p>
            </template>
        </div>
        <button class="modal-close is-large" aria-label="close" v-on:click="open = false"></button>
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
      open: {
        get: function () {
          return this.$store.state.Reward.open;
        },
        set: function (open) {
          this.$store.commit('setOpen', open);
        }
      }
    }
  };
</script>

<style scoped lang="scss">
    .reward--image {
        /*max-width: 10vw;*/
    }
</style>
