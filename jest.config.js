// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    testMatch: [
        '**/__tests__/**/(*.)+(spec|test).[jt]s?(x)',
        '**/test/**/(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: ['/node_modules/', 'stories'],
    modulePathIgnorePatterns: ['<rootDir>/src'],
    coveragePathIgnorePatterns: ['/node_modules/', 'esm/(.*)', 'test/(.*)'],
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    // refer to: https://github.com/facebook/jest/issues/2081#issuecomment-699558143
    transformIgnorePatterns: ['node_modules/(?!(.*monaco-editor|.*dnd.*)/)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/mock/fileMock.js',
        '\\.(css|scss|less)$': '<rootDir>/mock/styleMock.js',
        // redirect monorepo's sub files to its correct path
        // such as '@dtinsight/molecule-common/esm/xxx/yyy -> packages/common/esm/xxx/yyy'
        '^@dtinsight/molecule-(.*)/(.*)': '<rootDir>/packages/$1/$2',
        // redirect monorepo to its correct path, such as '@dtinsight/molecule-common -> packages/common/src/index.ts'
        '^@dtinsight/molecule-(.*)': '<rootDir>/packages/$1/src/index.ts',
        '^mo/monaco$': '<rootDir>/mock/monacoMock.js',
        // redirect mo/xxx to packages/ide/src/xxxx
        '^mo/(.*)$': '<rootDir>/packages/ide/src/$1',
        '^monaco-editor$': '<rootDir>/mock/monacoMock.js',
        '^@test/(.*)$': '<rootDir>/test/$1',
    },
    setupFiles: ['jest-canvas-mock', './test/setupTests.tsx'],
};
