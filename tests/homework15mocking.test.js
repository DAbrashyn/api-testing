const axios = require('axios');
jest.mock('axios');

async function fetchUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        throw new Error('User not found');
    }
}

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

        const response = await fetchUsers();
        expect(response).toEqual(mockedUsers);

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

        await expect(fetchUsers()).rejects.toThrow('User not found');
        expect(axios.get).toHaveBeenCalled();
    });
});