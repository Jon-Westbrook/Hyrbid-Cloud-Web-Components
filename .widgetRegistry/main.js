const CompressionPlugin = require('compression-webpack-plugin');
const {
  constants: { BROTLI_PARAM_QUALITY },
} = require('zlib');

const additionalPlugins = [
  new CompressionPlugin({
    deleteOriginalAssets: true,
    algorithm: 'brotliCompress',
    test: /\.(js|css|svg|js\.map)$/,
    compressionOptions: {
      params: {
        [BROTLI_PARAM_QUALITY]: 11,
      },
    },
    threshold: 10240,
    minRatio: 0.8,
    filename: '[path][base]',
  }),
];

module.exports = {
  register: ['../src/apps/**/*.widget.js'],
  webpackFinal: (config) => {
    // Ensure we handle TypeScript using the babel loader.
    config.module.rules[2].test = /\.(j|t)sx?$/;
    // Add the React and Typescript configurations to babel loader to process
    // .tsx files.
    let presets = config.module.rules[2].use.options.presets;
    presets.push(['@babel/preset-react', { runtime: 'automatic' }]);
    presets.push('@babel/preset-typescript');

    // The default configuration adds the ts-loader, which we don't need now.
    config.module.rules[2].use.options.presets = presets;
    const babelPlugins = config.module.rules[2].use.options.plugins || [];
    babelPlugins.push('@babel/plugin-transform-runtime');
    config.module.rules[2].use.options.plugins = babelPlugins;
    config.module.rules = config.module.rules.filter(
      (rule) => rule.loader !== 'ts-loader',
    );

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@formatjs/icu-messageformat-parser'] =
      '@formatjs/icu-messageformat-parser/no-parser';

    config.plugins = config.plugins || [];
    config.plugins = [...config.plugins, ...additionalPlugins];

    return config;
  },
  externalPeerDependencies: {
    react: {
      src: 'https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js',
      external: 'React',
    },
    'react-dom': {
      src: 'https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js',
      external: 'ReactDOM',
    },
    'react-intl': {
      src: 'https://cdn.jsdelivr.net/npm/react-intl@5/dist/react-intl.min.js',
      external: 'ReactIntl',
    },
    'react-slick': {
      src: 'https://cdn.jsdelivr.net/npm/react-slick@0/dist/react-slick.min.js',
      external: 'Slider',
    },
  },
};
