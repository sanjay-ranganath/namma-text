import axios from 'axios';

const instance = axios.create({
    baseURL: "https://nammatext.onrender.com/"
});

export default instance;