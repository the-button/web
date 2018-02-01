<template>
    <progress class="counter-progress progress"

             :value="currentValue"
             :max="maxValue">
    </progress>
</template>

<script>
  export default {
    name: 'counter-progress',
    props: {
      currentValue: {
        required: true,
        type: Number
      },
      maxValue: {
        require: true,
        type: Number
      },
      primaryColor: {
        type: String
      }
    }
  };
</script>

<style scoped lang="scss">
    .counter-progress {
        width: 15vw;
        margin-top: 40px;
    }
    .counter-progress::-webkit-progress-value {
        color: #fff;
        background-color: #fff;
    }
</style>
