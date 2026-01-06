jest.mock('axios');

const axios = require('axios');

describe('Mocking Examples', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('mock GET request successfully', async () => {
        const mockedUsers = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
        ];

        axios.get.mockResolvedValue({
            status: 200,
            data: mockedUsers
        });

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        expect(response.status).toBe(200);
        expect(response.data).toEqual(mockedUsers);
        expect(response.data).toHaveLength(2);

        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('mock 404 error', async () => {
        axios.get.mockRejectedValue({
            response: {
                status: 404,
                statusText: 'Not Found',
                data: { error: 'User not found' }
            }
        });

        try {
            await axios.get('https://jsonplaceholder.typicode.com/users/999');
        } catch (error) {
            expect(error.response.status).toBe(404);
            expect(error.response.statusText).toBe('Not Found');
            expect(error.response.data.error).toBe('User not found');
        }

        expect(axios.get).toHaveBeenCalled();
    });
});