module.exports = {
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['unicorn'],
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/prefer-module': 'off',
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/numeric-separators-style': [
      'error',
      {
        number: {
          groupLength: 3,
          minimumDigits: 0,
        },
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      }
    ]
  },
};
