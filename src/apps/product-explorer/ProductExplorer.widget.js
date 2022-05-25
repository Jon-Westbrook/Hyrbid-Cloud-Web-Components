module.exports = {
  entry: './src/apps/product-explorer/index.tsx',
  shortcode: 'product-explorer',
  title: 'Product Explorer',
  status: 'stable',
  description:
    'JavaScript widget that allows users to explore various IBM products on offer.',
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],
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
            enum: ['product', 'pricing'],
          },
        },
      },
    },
  },
  uiFormSchema: {
    'link-type': {
      'ui:widget': 'radios',
      'ui:help':
        'Selecting "Product" will render links to the product page. Selecting "Pricing" will render links to the product\'s pricing page. If a product has no pricing url the product will not be shown in the widget.',
      'ui:enum': {
        labels: {
          mappings: {
            product: 'Product',
            pricing: 'Pricing',
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
