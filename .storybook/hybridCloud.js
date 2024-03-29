import { create } from '@storybook/theming';
import { g10 } from '@carbon/themes';

const {
  field01,
  interactive01,
  selectedUI,
  text01,
  inverse01,
  ui01,
  ui03,
  uiBackground,
} = g10;

export default create({
  base: 'light',

  colorPrimary: interactive01,
  colorSecondary: selectedUI,

  // UI
  appBg: uiBackground,
  appContentBg: ui01,
  appBorderColor: ui03,
  appBorderRadius: 0,

  // Typography
  fontBase: '"IBM Plex Sans", sans-serif',
  fontCode: '"IBM Plex Mono", monospace',

  // Text colors
  textColor: text01,
  textInverseColor: inverse01,

  // Toolbar default and active colors
  barTextColor: text01,
  barSelectedColor: interactive01,
  barBg: uiBackground,

  // Form colors
  inputBg: field01,
  inputBorder: ui03,
  inputTextColor: text01,
  inputBorderRadius: 0,

  brandTitle: 'Hybrid Cloud React Widgets',
  brandUrl: 'https://github.ibm.com/MSC-Cloud/hc-widgets',
  brandImage: 'logo.png',
});
