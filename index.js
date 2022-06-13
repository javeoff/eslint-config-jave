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
  ].map(element => require.resolve(element)),
};
