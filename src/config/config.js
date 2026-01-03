require('dotenv').config();

const config = {
    baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com',
    timeout: parseInt(process.env.REQUEST_TIMEOUT) || 10000,
    defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

module.exports = config;