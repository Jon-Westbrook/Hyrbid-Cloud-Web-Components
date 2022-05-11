module.exports = {
  entry: './src/apps/product-explorer/index.tsx',
  shortcode: 'product-explorer',
  title: 'Product Explorer',
  status: 'stable',
  description:
    'JavaScript widget that allows users to explore various IBM products on offer.',
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
