<template>
    <panel title="Register">
        <v-text-field
            label="Username"
            v-model="user.username"
        ></v-text-field>
        <v-text-field
            label="First Name"
            v-model="user.firstname"
        ></v-text-field>
        <v-text-field
            label="Last Name"
            v-model="user.lastname"
        ></v-text-field>
        <v-text-field
            label="Password"
            v-model="user.password"
            type="password"
        ></v-text-field>
        <v-text-field
            label="Confirm Password"
            v-model="user.confirmPassword"
            type="password"
        ></v-text-field>
        <v-btn 
            class="red accent-2" 
            dark
            @click="register"
        >Sign Up</v-btn>

        <v-alert
            :value="showError"
            type="error"
            outline
            >
            {{ errorMessage }}
        </v-alert>
    </panel>
</template>

<script>
import Panel from './Panel';
import AuthenticationService from '../services/AuthenticationService';

    export default {
        components : {
            Panel
        },

        data() {
            return {
                user: {
                    firstname: null,
                    lastname: null,
                    username: null,
                    password: null,
                    confirmPassword: null
                },

                showError: false,
                errorMessage: ''
            }
        },

        methods: {
            async register() {
                try {
                    const user = (await AuthenticationService.register({
                        username: this.user.username,
                        firstname: this.user.firstname,
                        lastname: this.user.lastname,
                        password: this.user.password
                    })).data;
                    
                    this.$store.commit('setUser', user);
                    this.$router.push({
                        name: 'Home',
                        query: {
                            newUser: 'true'
                        }
                    });

                } catch(err) {
                    this.showError = true;
                    this.errorMessage = err.response.data.error;
                }
            }
        }
    }
</script>

<style scoped>

</style>
