const axios = require('axios');
const config = require('../config/config');
const logger = require('../utils/logger');

// Створюємо Axios instance з базовою конфігурацією
const httpClient = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: config.defaultHeaders
});

// Request interceptor - логуємо вихідні запити
httpClient.interceptors.request.use(
    (request) => {
        logger.request(request.method, request.url);
        return request;
    },
    (error) => {
        logger.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor - логуємо відповіді
httpClient.interceptors.response.use(
    (response) => {
        logger.response(response.status, response.data);
        return response;
    },
    (error) => {
        if (error.response) {
            logger.error(
                `Response error: ${error.response.status}`,
                error.response.data
            );
        } else {
            logger.error('No response received:', error.message);
        }
        return Promise.reject(error);
    }
);

module.exports = httpClient;