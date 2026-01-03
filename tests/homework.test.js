const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => {
    console.log(`🚀 Надсилаємо ${request.method.toUpperCase()} запит на: ${request.url}`);
    return request;
}, error => {
    return Promise.reject(error);
});

// Логування відповідей
axios.interceptors.response.use(response => {
    console.log(`✅ Отримано відповідь: ${response.status} від ${response.config.url}`);
    return response;
}, error => {
    console.log(`❌ Помилка запиту: ${error.response ? error.response.status : error.message}`);
    return Promise.reject(error);
});

describe('API Tests', () => {

   it('should return a list of users', async () => {
        const response = await axios.get(`${baseURL}/users`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data[0]).toHaveProperty('username');
        expect(response.data[0]).toHaveProperty('email');
   });

   it('should return specific user details', async () => {
        const response = await axios.get(`${baseURL}/users/1`);

        expect(response.status).toBe(200);

        expect(response.data.id).toBe(1);
        expect(response.data.address).toHaveProperty('geo');
   });

   it('should create a new post and return 201', async () => {
        const newPost = {
            title: 'Testing API',
            body: 'This is a test post body',
            userId: 1
        };

        const response = await axios.post(`${baseURL}/posts`, newPost);

        expect(response.status).toBe(201);
        expect(response.data.title).toBe(newPost.title);
   });

   it('should return comments for post 1', async () => {
        const response = await axios.get(`${baseURL}/posts/1/comments`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data[0].postId).toBe(1);
   });

   it('should return a todo with boolean status', async () => {
        const response = await axios.get(`${baseURL}/todos/1`);

        expect(response.status).toBe(200);
        expect(typeof response.data.completed).toBe('boolean');
        expect(response.data).toHaveProperty('title');
   });
});