module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: true,
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
      ],
      rules: {
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        // ['@typescript-eslint/naming-convention']: [
        //   'error',
        //   {
        //     custom: {
        //       match: true,
        //       regex: '^I[A-Z]',
        //     },
        //     format: ['PascalCase'],
        //     selector: ['interface'],
        //   },
        //   {
        //     custom: {
        //       match: true,
        //       regex: '^[TI][A-Z]',
        //     },
        //     format: ['PascalCase'],
        //     selector: ['typeAlias'],
        //   },
        // ],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowDirectConstAssertionInArrowFunctions: true,
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple',
            readonly: 'array-simple',
          },
        ],
        "@typescript-eslint/no-floating-promises": [
          'error',
          {
            ignoreIIFE: true,
            ignoreVoid: true,
          },
        ],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
