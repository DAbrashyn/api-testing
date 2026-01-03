const apiService = require('../../src/services/apiService');

describe('POST /users', () => {
    it('should create new user', async () => {
        // Arrange
        const newUser = {
            name: 'John Doe',
            email: 'john@example.com'
        };

        // Act
        const response = await apiService.createUser(newUser);

        // Assert
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data.name).toBe(newUser.name);
        expect(response.data.email).toBe(newUser.email);
    });
});