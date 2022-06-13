module.exports = {
  rules: {
    ['wrap-iife']: ['error', 'inside', { functionPrototypeMethods: false }],
    ['no-unused-expressions']: [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    ['no-restricted-properties']: [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: 'reduce',
        message: 'Please use Array.map instead',
      },
    ],
    ['no-param-reassign']: [
      'error',
      {
        ignorePropertyModificationsFor: ['draft', 'context'],
        ignorePropertyModificationsForRegex: ['Ref$', 'Draft$'],
        props: true,
      },
    ],
  },
};
