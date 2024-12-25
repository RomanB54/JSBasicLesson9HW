import globals from 'globals';
import jest from 'eslint-plugin-jest';
import eslintRecommended from 'eslint-plugin-prettier/recommended';

export default [
  eslintRecommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      semi: 'error',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
    },
  },
  {
    files: ['src/**/*.js'],
    ...jest.configs['flat/recommended'],
  },
];