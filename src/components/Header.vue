<template>
  <v-toolbar fixed class='blue-grey' dark>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title class="title" @click="goHome">
      $ Tracker
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="! this.$store.getters.getUser" flat exact :to="{name: 'Login'}">Login</v-btn>
      <v-btn v-if="! this.$store.getters.getUser" flat :to="{name: 'Register'}">Register</v-btn>
      <v-btn v-if="this.$store.getters.getUser" flat @click="logout">Logout</v-btn>
    </v-toolbar-items>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      height="500px"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </v-toolbar>
</template>

<script>
export default {
    data() {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },

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
