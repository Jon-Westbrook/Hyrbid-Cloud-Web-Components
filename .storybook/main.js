module.exports = {
  stories: [
    './docs/*.stories.@(js|jsx|ts|tsx|mdx)',
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
};
