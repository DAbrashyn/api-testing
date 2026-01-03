const logger = {
    info: (message, data = null) => {
        console.log(`[INFO] ${message}`);
        if (data) {
            console.log(JSON.stringify(data, null, 2));
        }
    },

    error: (message, error = null) => {
        console.error(`[ERROR] ${message}`);
        if (error) {
            console.error('Error:', error.message);
        }
    },

    request: (method, url) => {
        console.log(`[REQUEST] ${method.toUpperCase()} ${url}`);
    },

    response: (status, data = null) => {
        console.log(`[RESPONSE] Status: ${status}`);
        if (data) {
            console.log('Data:', JSON.stringify(data, null, 2));
        }
    }
};

module.exports = logger;