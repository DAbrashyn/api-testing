const httpClient = require('../src/services/httpClient');

describe('HTTP Client', () => {
    test('should make GET request', async () => {
        const response = await httpClient.get('/users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });
});