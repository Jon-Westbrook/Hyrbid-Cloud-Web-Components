module.exports = {
  entry: './src/apps/pricing-band/index.tsx',
  shortcode: 'pricing-band',
  title: 'Pricing Band',
  status: 'stable',
  description:
    'JavaScript widget that displays a selection of FlashSystem Products.',
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],
  additionalCustomProperties: {
    webSegmentPaths: ['/cloud'],
    availableTranslations: [
      'ar',
      'de',
      'en',
      'es',
      'esla',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt',
      'ru',
      'tr',
      'zh-cn',
      'zh-tw',
    ],
  },
};
