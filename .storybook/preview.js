import { withTests } from '@storybook/addon-jest';

const results = require('../src/.jest-test-results.json');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  showRoots: true,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: 'en',
  locales: {
    ar: { title: 'Arabic' },
    en: { title: 'English' },
    es: { title: 'Spanish' },
    ja: { title: 'Japanese' },
  },
};

export const decorators = [
  (story) => (
    <div
      role="main"
      style={{
        padding: '3em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ position: 'relative', width: '100%', zIndex: 0 }}>
        {story()}
      </div>
    </div>
  ),

  withTests({ results }),
];
