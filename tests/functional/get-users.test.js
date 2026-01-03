const apiService = require('../../src/services/apiService');

describe('GET /users', () => {
    test('should return all users', async () => {
        // Act - виконуємо запит
        const response = await apiService.getAllUsers();

        // Assert - перевіряємо результат
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('should return user by id', async () => {
        // Arrange - підготовка
        const userId = 1;

        // Act - виконуємо запит
        const response = await apiService.getUserById(userId);

        // Assert - перевіряємо результат
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(userId);
        expect(response.data).toHaveProperty('name');
        expect(response.data).toHaveProperty('email');
    });
});