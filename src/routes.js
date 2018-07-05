import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';

export default [
    {path: "/", component: Login, name: 'Login'},
    {path: "/register", component: Register, name: 'Register'},
    {path: '/users', component: Home, name: 'Home'}
];