import { withTests } from '@storybook/addon-jest';

const results = require('../src/.jest-test-results.json');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => <div style={{ padding: '50px 100px' }}>{story()}</div>,
  withTests({ results }),
];
