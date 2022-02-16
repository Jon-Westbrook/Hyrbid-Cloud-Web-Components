module.exports = {
  entry: './src/apps/trust-radius/index.tsx',
  shortcode: 'trust-radius',
  title: 'Trust Radius Reviews',
  status: 'stable',
  description: 'Lists product reviews retrieved from Trust Radius service.',
  settingsSchema: {
    type: 'object',
    properties: {
      fields: {
        type: 'object',
        properties: {
          'trust-radius-id': {
            type: 'string',
            title: 'Trust Radius ID',
            description:
              'The ID found within the trust radius reviews URL that activates the product reviews',
            examples: ['5e20addcac72e40024d9a00a'],
          },
          'use-google-stars': {
            type: 'boolean',
            title: 'Use Google Review Stars',
            description:
              'Enable Stars and review data on this pages Google search results? True or False',
            examples: [false, true],
          },
        },
      },
    },
  },
  useExternalPeerDependencies: [
    'react',
    'react-dom',
    'react-intl',
    'react-slick',
  ],
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
