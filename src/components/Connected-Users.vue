<template>
    <div>
        <p>{{ userPhrase }}</p>
    </div>
</template>

<script>
  export default {
    name: 'connected-users',
    props: {
      connectedUsers: {
        required: true,
        type: Number
      },
      userNounSingular: {
        required: true,
        type: String
      },
      userNounPlural: {
        required: true,
        type: String
      }
    },
    computed: {
      userPhrase: function () {
        if (this.connectedUsers === 1) {
          return 'There are no other ' + this.userNounPlural + ' here now';
        } else if (this.connectedUsers === 2) {
          return 'There is ' + this.connectedUsers + ' other ' + this.userNounSingular + ' here now';
        } else {
          return 'There are ' + this.connectedUsers + ' other ' + this.userNounPlural + ' here now';
        }
      }
    }
  };
</script>

<style scoped>

</style>
