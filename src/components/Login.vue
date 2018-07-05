<template>
    <panel title="Login">
        <form>
            <v-text-field
                label="Username"
                v-model="user.username"
            ></v-text-field>
            <v-text-field
                label="Password"
                v-model="user.password"
                type="password"
            ></v-text-field>
            <v-btn 
                class="red accent-2" 
                dark
                @click="login"
            >Login</v-btn>

            <p>Do not have an account yet?&nbsp;
                <router-link :to="{name: 'Register'}" tag="a">Sign Up</router-link>
            </p>

            <v-alert
            :value="showError"
            type="error"
            outline
            >
            {{ errorMessage }}
            </v-alert>

        </form>
    </panel>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService';
import Panel from './Panel';
    export default {
        components: {
            Panel
        },

        data() {
            return {
                user :{
                    username: null,
                    password: null
                },

                showError: false,
                errorMessage: ''
            }
        },

        methods : {
            async login() {
                try {
                    const user = (await AuthenticationService.login(this.user)).data;
                    this.$store.commit('setUser', user);
                    this.$router.push({
                        name: 'Home'
                    });
                } catch(err) {
                    this.errorMessage = err.response.data.error;
                    this.showError = true;
                    console.log(this.errorMessage);
                }
                
            }
        }
    }
</script>

<style scoped>

</style>
