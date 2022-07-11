module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error'],
    'comma-spacing': ['error', { before: false, after: true }],
    'func-names': ['off'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
      },
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 1,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-tabs': 'off',
    'no-underscore-dangle': 'off',
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'any', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'never', prev: 'directive', next: 'directive' },
    ],
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: false, numbers: false },
    ],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': 'error',
  },
};
