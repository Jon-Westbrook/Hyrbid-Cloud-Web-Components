module.exports = {
  stories: [
    './Introduction/Introduction.stories.js',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-i18n',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
  ],
};
