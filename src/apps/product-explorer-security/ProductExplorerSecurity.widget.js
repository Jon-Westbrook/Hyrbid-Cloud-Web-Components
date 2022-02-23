module.exports = {
  entry: './src/apps/product-explorer-security/index.tsx',
  shortcode: 'product-explorer-security',
  title: 'Product Explorer Security',
  status: 'stable',
  description:
    'JavaScript widget that allows users to explore various IBM products on offer.',
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
