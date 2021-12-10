module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: { 'import/no-anonymous-default-export': 'off' },
    },
    {
      files: ['src/apps/**/*.js'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
  ],
  plugins: ['formatjs'],
  rules: {
    'formatjs/no-offset': 'error',
    'formatjs/enforce-id': [
      'error',
      // Use interpolation pattern to force update translations after changes
      // to the default message.
      { idInterpolationPattern: '[sha512:contenthash:base64:6]' },
    ],
  },
};
