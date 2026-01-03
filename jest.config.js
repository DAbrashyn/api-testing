module.exports = {
    // Середовище для Node.js
    testEnvironment: 'node',

    // Патерн для пошуку тестових файлів
    testMatch: [
        '**/tests/**/*.test.js'
    ],

    // Timeout для тестів (10 секунд)
    testTimeout: 10000,

    // Детальний вивід
    verbose: true,

    // Coverage налаштування (якщо встановлені репортери)
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/**/index.js',
        '!**/node_modules/**',
    ],
    coverageDirectory: 'reports/coverage',
    coverageReporters: ['text', 'lcov', 'html'],

    // Репортери (якщо встановлені jest-junit та jest-html-reporters)
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'reports/junit',
                outputName: 'junit.xml',
            },
        ],
        [
            'jest-html-reporters',
            {
                publicPath: 'reports/html',
                filename: 'report.html',
                expand: true,
                pageTitle: 'API Test Report (Jest)',
            },
        ],
    ],
};