module.exports = {
  entry: './src/apps/product-explorer/index.tsx',
  shortcode: 'product-explorer',
  title: 'Product Explorer',
  status: 'stable',
  description:
    'JavaScript widget that allows users to explore various IBM products on offer.',
  settingsSchema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      fields: {
        type: 'object',
        properties: {
          'link-type': {
            type: 'string',
            title: 'Link Type',
            enum: ['product', 'pricing', 'data-link-type'],
          },
        },
      },
    },
  },
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
