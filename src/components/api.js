import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers : {
        Authorization : 'Client-ID 80b322d29669c9566d9e66b669ef65d49e3a90bc16128c50d6167a66a40c7d73'
    }
});