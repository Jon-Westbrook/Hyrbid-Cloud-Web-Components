const path = require('path');
const twConfig = require('@lullabot/gatsby-theme-adr/tailwind.config');

const themePath = path.dirname(
  require.resolve('@lullabot/gatsby-theme-adr/tailwind.config'),
);

module.exports = {
  ...twConfig,
  content: [
    `${themePath}/src/**/*.{js,jsx,ts,tsx}`,
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...twConfig.theme,
    colors: {
      ...twConfig.theme.colors,
      gray: {
        ...twConfig.theme.colors.gray,
        500: '#6f6f6f',
      },
      charcoal: {
        700: '#161616', // Base color.
        800: '#262626', // Base color.
      },
      red: {
        400: '#da1e28',
      },
      blue: {
        500: '#0f62fe',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      serif: ['IBM Plex Serif', 'serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
  },
};
