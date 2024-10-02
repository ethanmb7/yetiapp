// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

const register = (username, email, password, bio) => {
    return axios.post(API_URL + 'register', { username, email, password, bio });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login', { email, password });
};

export default { register, login };
