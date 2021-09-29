import { create } from '@storybook/theming';
import '!style-loader!css-loader!resolve-url-loader!sass-loader!../src/ibm-plex/scss/ibm-plex.scss';

export default create({
  base: 'light',

  colorPrimary: '#f4f4f4',
  colorSecondary: '#0062ff',

  // UI
  appBorderColor: '#f4f4f4',
  appBorderRadius: 0,

  // Typography
  fontBase: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  fontCode:
    "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",

  // Text colors
  textColor: '#161616',
  textInverseColor: 'white',

  brandTitle: 'Hybrid Cloud React Widgets',
  brandUrl: 'https://github.ibm.com/MSC-Cloud/hc-widgets',
  brandImage: '/logo.png',
});
