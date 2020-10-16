// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    testMatch: [
        '**/__tests__/**/(*.)+(spec|test).[jt]s?(x)',
        '**/test/**/(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
