<template>
  <div>
    <v-alert
            :value="showSignUpMsg"
            type="success"
            outline
            >
            Sign Up successful!
      </v-alert>
    <h1>Hello {{ user.firstname }}!</h1>
  </div>
</template>

<script>
  //import UserService from '../services/UserService';

  export default {
    data() {
      return {
        user : {},
        showSignUpMsg: false
      }
    },

    mounted() {
      this.user = this.$store.getters.getUser;
      if(this.$route.query.newUser) {
        this.showSignUpMsg = true;
      }

    }
  }
</script>

<style scoped>

</style>

