<template>
  <v-toolbar fixed class='blue-grey' dark>
    <v-toolbar-title class="title" @click="goHome">
      $ Tracker
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="! this.$store.getters.getUser" flat exact :to="{name: 'Login'}">Login</v-btn>
      <v-btn v-if="! this.$store.getters.getUser" flat :to="{name: 'Register'}">Register</v-btn>
      <v-btn v-if="this.$store.getters.getUser" flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    methods: {
      goHome() {
        if(this.$store.getters.getUser) {
          this.$router.push({name: 'Home'});
        } else {
          this.$router.push({name: 'Login'});
        }
      },

      logout() {
        this.$store.commit('setUser', null);
        this.$router.push({name: 'Login'});
      }
    }
}
</script>

<style scoped>
.title{
  cursor: pointer;
}
</style>
