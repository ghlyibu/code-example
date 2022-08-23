/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'linebreak-style': ['error', 'unix'],
        '@typescript-eslint/no-unused-vars': 0,
        'comma-dangle': ['error', 'always-multiline'],
    },
};
