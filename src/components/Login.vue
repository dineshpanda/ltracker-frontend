<template>
    <panel title="Login">
        <v-form v-model="valid" ref="form">
            <v-text-field
                label="Username"
                v-model="user.username"
                :rules="rules.usernameRules"
            ></v-text-field>
            <v-text-field
                label="Password"
                v-model="user.password"
                type="password"
                :rules="rules.passwordRules"
            ></v-text-field>
            <v-btn 
                class="red accent-2, white--text" 
                @click="login"
                :disabled="!valid"
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

        </v-form>
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
                errorMessage: '',

                valid: true,
                rules: {
                    usernameRules: [username => !!username || 'This field is required.'],
                    passwordRules: [password => !!password || 'This field is required.']
                }
            }
        },

        methods : {
            async login() {
                if(this.$refs.form.validate()) {
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
                } else {
                    this.errorMessage = 'Fill all the required fields.';
                    this.showError = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>
