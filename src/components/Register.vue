<template>
    <panel title="Register">
        <v-form ref="form" v-model="valid">
            <v-text-field
                label="Username"
                v-model="user.username"
                :rules="usernameRules"
            ></v-text-field>
            <v-text-field
                label="First Name"
                v-model="user.firstname"
                :rules="firstnameRules"
            ></v-text-field>
            <v-text-field
                label="Last Name"
                v-model="user.lastname"
                :rules="lastnameRules"
            ></v-text-field>
            <v-text-field
                label="Password"
                v-model="user.password"
                type="password"
                :rules="passwordRules"
            ></v-text-field>
            <v-text-field
                label="Confirm Password"
                v-model="user.confirmPassword"
                type="password"
                :rules="confirmPasswordRules"
            ></v-text-field>
            <v-btn 
                class="red accent-2, white--text" 
                :disabled="!valid"
                @click="register"
            >Sign Up</v-btn>
        </v-form>

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
                valid: true,

                user: {
                    firstname: null,
                    lastname: null,
                    username: null,
                    password: null,
                    confirmPassword: null
                },

                showError: false,
                errorMessage: '',

                usernameRules: [
                    username => !! username || 'This field is required.'
                ],

                passwordRules: [
                    password => {
                        if(! password || ! password.trim()) {
                            return "This field is required.";
                        } else if(password.length < 8) {
                            return "Password lenght must be at least 8 characters.";
                        }

                        return true;
                    }
                ],

                confirmPasswordRules: [
                    confirmPassword => !!confirmPassword || 'This field can not be left blank.'
                ],

                firstnameRules: [
                    firstname => !!firstname || 'This field is required.'
                ],

                lastnameRules: [
                    lastname => !!lastname || 'This field is required.'
                ]
            }
        },

        methods: {
            async register() {
                if(this.$refs.form.validate()) {

                    if(this.user.password !== this.user.confirmPassword) {
                        
                        this.showError = true;
                        this.errorMessage = 'Password fields do not match.';
                        return;
                    }

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
    }
</script>

<style scoped>

</style>
