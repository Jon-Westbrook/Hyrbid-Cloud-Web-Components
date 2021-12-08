const CompressionPlugin = require('compression-webpack-plugin');
const {
  constants: { BROTLI_PARAM_QUALITY },
} = require('zlib');

const additionalPlugins = [
  new CompressionPlugin({
    deleteOriginalAssets: true,
    algorithm: 'brotliCompress',
    test: /\.(js|css|svg)$/,
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

    config.output.clean = true;

    return config;
  },
};
