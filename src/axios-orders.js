import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-68f48.firebaseio.com/'
});

export default instance;