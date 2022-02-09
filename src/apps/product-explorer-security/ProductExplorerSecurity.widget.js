import allLanguageCodes from 'src/common/allLanguageCodes';

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  entry: 'index.tsx',
  shortcode: 'product-explorer-security',
  title: 'Product Explorer Security',
  status: 'stable',
  description:
    'JavaScript widget that allows users to explore various IBM products on offer.',
  additionalCustomProperties: {
    webSegmentPaths: ['/cloud'],
    availableTranslations: allLanguageCodes,
  },
};
