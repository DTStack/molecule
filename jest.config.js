// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    globals: {
        __DEVELOPMENT__: false,
    },
    testMatch: [
        '**/__tests__/**/(*.)+(spec|test).[jt]s?(x)',
        '**/test/**/(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: ['/node_modules/', 'esm', 'umd', 'stories'],
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/molecule.api.ts',
        '!src/index.ts',
        '!src/extensions/**',
    ],
    transformIgnorePatterns: ['/node_modules/(?!(.*monaco-editor|.*dnd.*)/)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/mock/fileMock.js',
        '\\.(css|scss|less)$': '<rootDir>/mock/styleMock.js',
        '^mo/monaco$': '<rootDir>/mock/monacoMock.js',
        '^mo/(.*)$': '<rootDir>/src/$1',
        '^mo$': '<rootDir>/src/index.ts',
        '^monaco-editor$': '<rootDir>/mock/monacoMock.js',
        '^@test/(.*)$': '<rootDir>/test/$1',
    },
    setupFiles: ['jest-canvas-mock', './test/setupTests.tsx'],
};
