module.exports = {
  entry: './src/apps/interactive-integration-walkthrough/index.tsx',
  shortcode: 'interactive-integration-walkthrough',
  title: 'Interactive Integration Walkthrough',
  status: 'stable',
  description:
    'This interactive walkthrough is for the Cloud Pak for Watson AIOPS product.',
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
