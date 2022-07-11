module.exports = {
  rules: {
    'dot-notation': ['error', { allowKeywords: true }],
    'curly': ['error'],
    'no-cond-assign': ['error', 'except-parens'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],
    'guard-for-in': ['off'],
  },
};
