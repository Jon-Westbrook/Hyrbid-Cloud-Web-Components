module.exports = {
  entry: './src/apps/journey-ai/index.tsx',
  shortcode: 'journey-ai',
  description:
    'Contains the Journey to AI visualization widget created by Havas.',
  status: 'stable',
  title: 'Journey to AI',
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],
  additionalCustomProperties: {
    webSegmentPaths: ['/analytics'],
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
