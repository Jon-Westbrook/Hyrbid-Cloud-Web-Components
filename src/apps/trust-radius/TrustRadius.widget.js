// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'render-trust-radius.jsx'),
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
            examples: ['5e948b56fdfae40038b2b107'],
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
  additionalCustomProperties: {
    webSegmentPaths: ['/cloud'],
    availableTranslations: ['en', 'es', 'ja', 'ar'],
  },
};
