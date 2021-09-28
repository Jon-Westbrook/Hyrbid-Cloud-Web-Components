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
  ],
};
