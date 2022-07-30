module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/prettier',
    './rules/react',
    './rules/typescript',
    './rules/unicorn',
    './rules/variables',
    './rules/styleguide',
    './rules/eslint-comments',
    // './rules/putout',
  ].map(function(element) {
    return require.resolve(element);
  }),
  ecmaFeatures: {
    jsx: true,
    modules: true
  },
  ignorePatterns: [
    'dist',
    'public',
    'var',
    '__migration__',
    '.eslintrc.json',
    'node_modules',
  ],
};
