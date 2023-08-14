module.exports = {
    extends: [require.resolve('ko-lint-config/.eslintrc')],
    ignorePatterns: ['esm'],
    rules: {
        'react-hooks/exhaustive-deps': 'off',
    },
};
