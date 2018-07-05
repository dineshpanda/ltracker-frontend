import api from './api';

export default {

    index(userId) {
        return api.get('user/'+ userId);
    }

}