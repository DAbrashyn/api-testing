const httpClient = require('./httpClient');

class ApiService {
    async get(url, params = {}) {
        return await httpClient.get(url, { params });
    }

    async post(url, data = {}) {
        return await httpClient.post(url, data);
    }

    // Методи для роботи з користувачами
    async getAllUsers() {
        return this.get('/users');
    }

    async getUserById(id) {
        return this.get(`/users/${id}`);
    }

    async createUser(userData) {
        return this.post('/users', userData);
    }
}

module.exports = new ApiService();