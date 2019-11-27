import axios from 'axios';

const axiosFetch = axios.create({
    baseURL: 'http://localhost:5000'
});

export default axiosFetch;