const CompressionPlugin = require('compression-webpack-plugin');
const {
  constants: { BROTLI_PARAM_QUALITY },
} = require('zlib');
const reactScriptsWebpackConfigBuilder = require('react-scripts/config/webpack.config');
const { merge } = require('webpack-merge');

module.exports = {
  register: ['../src/apps/**/*.widget.js'],
  webpackFinal: ({
    entry,
    output,
    target,
    mode,
    devtool,
    profile,
    plugins,
  }) => {
    const craConfig = reactScriptsWebpackConfigBuilder(mode);
    const config = merge(craConfig, {
      entry,
      output,
      target,
      mode,
      devtool,
      profile,
    });
    const isEnvProduction = config.mode === 'production';
    const skipCompression = process.env.WIDGETS_SKIP_COMPRESSION === 'true';

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@formatjs/icu-messageformat-parser'] =
      '@formatjs/icu-messageformat-parser/no-parser';

    config.plugins = config.plugins || [];
    const ignoredPlugins = [
      'HtmlWebpackPlugin',
      'WebpackManifestPlugin',
      'InlineChunkHtmlPlugin',
      'InterpolateHtmlPlugin',
    ];
    config.plugins = config.plugins.filter(
      (plugin) => ignoredPlugins.indexOf(plugin.constructor.name) === -1,
    );
    if (isEnvProduction && !skipCompression) {
      config.plugins.push(
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
        })
      );
    }

    return fixOutputPaths(config);
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

/**
 * Fix the CSS extraction paths.
 *
 * @param {Object} config
 *   The webpack configuration.
 *
 * @return {Object}
 *   The altered webpack configuration.
 */
function fixOutputPaths(config) {
  // See if there is a Mini CSS Extract plugin.
  const miniCssIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
  );
  if (miniCssIndex !== -1) {
    config.plugins[miniCssIndex].options.filename =
      '[name]/css/main.[contenthash:8].css';
    config.plugins[miniCssIndex].options.chunkFilename =
      '[name]/css/main.[contenthash:8].chunk.css';
  }
  config.module.rules[1].oneOf[2].use[1].options.outputPath = (
    url,
    resourcePath,
    context,
  ) => {
    const relativePath = resourcePath.substring(`${context}/src/apps/`.length);
    const parts = relativePath.split('/');
    const widgetId = parts[0];
    return `../static/${widgetId}/${url}`;
  };
  config.module.rules[1].oneOf[2].use[1].options.name =
    'assets/[name].[hash].[ext]';
  config.output.assetModuleFilename = '../static/assets/[name].[hash][ext]';
  return config;
}
