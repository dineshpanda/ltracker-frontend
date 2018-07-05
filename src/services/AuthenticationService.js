import api from './api';

export default {
    login(credentials) {
        return api.post('login', credentials);
    },

    register(user) {
        return api.post('register', user);
    }
}