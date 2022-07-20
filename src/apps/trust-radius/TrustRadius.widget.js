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
        required: ['trust-radius-ids'],
        properties: {
          'trust-radius-ids': {
            type: 'string',
            title: 'Trust Radius IDs',
            description:
              'The ID found within the trust radius reviews URL that activates the product reviews. Enter a single ID to display a single-product widget, or enter multiple IDs on separate lines to display a multi-product widget.',
            examples: [
              '5e20addcac72e40024d9a00a\n61e97281a2b7200025596c0b\n61c342fe85d5d1004dd83a3d',
            ],
          },
          theme: {
            type: 'string',
            title: 'Carbon Theme',
            description:
              "Force the palette of the widget to 'White', 'Cool Gray 10', or 'Black'. Otherwise the CMS should provide a value based on the page context.",
            default: 'null',
            examples: ['WHITE'],
            enum: ['null', 'WHITE', 'GRAY_10', 'GRAY_100'],
          },
          'google-stars': {
            type: 'string',
            title: 'Google Review Stars',
            description: `In single-product widgets, this enables Stars and review data on this page's Google search results.`,
            default: 'false',
            examples: ['false'],
            enum: ['true', 'false'],
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
    uiFormSchema: {
      'trust-radius-ids': {
        'ui:widget': 'textarea',
        'ui:placeholder':
          '5e20addcac72e40024d9a00a\n61e97281a2b7200025596c0b\n61c342fe85d5d1004dd83a3d',
      },
      theme: {
        'ui:widget': 'select',
        'ui:enum': {
          labels: {
            mappings: {
              null: '-Derive value from page-',
              WHITE: 'White',
              GRAY_10: 'Cool Gray 10',
              GRAY_100: 'Gray 100',
            },
          },
        },
      },
      'google-stars': {
        'ui:widget': 'select',
        'ui:enum': {
          labels: {
            mappings: {
              true: 'yes',
              false: 'no',
            },
          },
        },
      },
    },
  },
};
