const findWidgetIdsFsSync = require('./findWidgetIdsFsSync');
const { merge } = require('webpack-merge');

const widgetIds = findWidgetIdsFsSync();

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    './docs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-i18n',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
  ],
  staticDirs: [
    '../public',
    // Adds support in Storybook for static assets in per-widget public folder.
    ...widgetIds.map((id) => ({
      from: `../src/apps/${id}/public`,
      to: `/static/${id}`,
    })),
  ],
  webpackFinal: (config) => merge(config, { performance: { hints: false } }),
};
