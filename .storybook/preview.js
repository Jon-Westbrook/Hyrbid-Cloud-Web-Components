import { withTests } from '@storybook/addon-jest';
import { initialize as initializeMsw, mswDecorator } from 'msw-storybook-addon';

// start mock server worker to intercept API calls
initializeMsw();

const results = require('../src/.jest-test-results.json');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  showRoots: true,
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: 'en',
  locales: {
    ar: { title: 'Arabic' },
    de: { title: 'German' },
    en: { title: 'English' },
    es: { title: 'Spanish (Spain)' },
    esla: { title: 'Spanish (Latin America)' },
    fr: { title: 'French' },
    it: { title: 'Italian' },
    ja: { title: 'Japanese' },
    ko: { title: 'Korean' },
    pl: { title: 'Polish' },
    pt: { title: 'Portuguese' },
    ru: { title: 'Russian' },
    tr: { title: 'Turkish' },
    'zh-cn': { title: 'Chinese (PRC)' },
    'zh-tw': { title: 'Chinese (Taiwan)' },
  },
};

export const decorators = [
  (story) => (
    <div
      role="main"
      style={{
        padding: '1em',
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
  mswDecorator,
];
