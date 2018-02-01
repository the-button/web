<template>
    <div id="app">
        <div class="appContent">
            <router-view/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    created: function () {
      this.$store.dispatch('getCounter');
    }
  };
</script>

<style lang="scss" scoped>
    .appContent {
        min-height: 100vh;
    }
</style>
