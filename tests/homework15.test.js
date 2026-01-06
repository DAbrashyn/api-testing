const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

async function invalidUrl(url) {
    try {
        await axios.get(`${url}/invalid`);
    } catch (error) {
        if (error.response) {
            return error.response.statusText;
        }
        return error.message;
    }
}

async function getPosts(postId) {
     return await axios.get(`${baseURL}/comments`, {
        params: {
            postId: postId
        },
        headers: {
            "Content-Type": "application/json"
        }
    });
}

describe('API Tests HW 15.1. Error Handling', () => {

    it('1.Error Handling: should handle 404 error when URL is incorrect', async () => {
        const result = await invalidUrl(baseURL);

        expect(result).toBe('Not Found');
    });

    it('2.Testing Request Headers and Params', async () => {
        const testPostId = 1;
        const response = await getPosts(testPostId);

        expect(response.status).toBe(200);
        expect(response.config.params.postId).toBe(testPostId);
        expect(response.config.headers['Content-Type']).toBe('application/json');
    });
});