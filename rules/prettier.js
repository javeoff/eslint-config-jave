module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
        tabWidth: 2,
        jsdocSingleLineComment: false,
      }
    ],
  },
};
