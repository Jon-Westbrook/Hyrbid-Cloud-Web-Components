module.exports = {
  entry: './src/apps/product-explorer-it-infra/index.tsx',
  shortcode: 'product-explorer-it-infra',
  title: 'Product Explorer It-Infra',
  status: 'stable',
  description:
    'Allows users to explore various IBM products on offer. Localized for it-infra.',
  settingsSchema: {
    type: 'object',
    properties: {
      fields: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            title: 'Title',
            description: '',
          },
          description: {
            type: 'string',
            title: 'Description',
            description: '',
          },
        },
      },
      required: ['title', 'description'],
    },
  },
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
