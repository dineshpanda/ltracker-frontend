<template>
  <div id="app">  
    <v-app>
      <app-header /> 
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <app-footer />
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
  export default {
    name: 'app',

    components: {
      AppHeader: Header,
      AppFooter: Footer
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
