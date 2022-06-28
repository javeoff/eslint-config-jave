module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['import'],
  rules: {
    'import/first': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-useless-path-segments': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'groups': [
          ['builtin', 'external', 'object', 'type'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
