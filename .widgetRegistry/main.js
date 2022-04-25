const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const {
  constants: { BROTLI_PARAM_QUALITY },
} = require('zlib');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  register: ['../src/apps/**/*.widget.js'],
  webpackFinal: (config) => {
    const isEnvDevelopment = config.mode === 'development';
    const isEnvProduction = config.mode === 'production';
    const disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true';
    const emitErrorsAsWarnings = process.env.ESLINT_NO_DEV_ERRORS === 'true';
    const hasJsxRuntime = (() => {
      if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
        return false;
      }

      try {
        require.resolve('react/jsx-runtime');
        return true;
      } catch (e) {
        return false;
      }
    })();

    // Add MiniCssExtractPlugin.
    config.module.rules[0].use.unshift(MiniCssExtractPlugin.loader);
    // Add the React and Typescript configurations to babel loader to process
    // .tsx files.
    let presets = config.module.rules[2].use.options.presets;
    presets.push(['@babel/preset-react', { runtime: 'automatic' }]);

    // The default configuration adds the ts-loader, which we don't need now.
    config.module.rules[2].use.options.presets = presets;
    const babelPlugins = config.module.rules[2].use.options.plugins || [];
    babelPlugins.push('@babel/plugin-transform-runtime');
    config.module.rules[2].use.options.plugins = babelPlugins;

    // Support turning SVGs into React components.
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@formatjs/icu-messageformat-parser'] =
      '@formatjs/icu-messageformat-parser/no-parser';

    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      // Generate an asset manifest file with the following content:
      // - "files" key: Mapping of all asset filenames to their corresponding
      //   output file so that tools can pick it up without having to parse
      //   `index.html`
      // - "entrypoints" key: Array of files which are included in `index.html`,
      //   can be used to reconstruct the HTML if necessary
      new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        useEntryKeys: true,
      }),
      new MiniCssExtractPlugin({
        filename: isEnvDevelopment
          ? '[name]/css/main.css'
          : '[name]/css/main.[contenthash:6].css',
        chunkFilename: '[id].css',
      }),
      !disableESLintPlugin &&
        new ESLintPlugin({
          // Plugin options
          extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
          formatter: require.resolve('react-dev-utils/eslintFormatter'),
          eslintPath: require.resolve('eslint'),
          failOnError: !(isEnvDevelopment && emitErrorsAsWarnings),
          context: path.resolve(__dirname, '../src'),
          cache: true,
          cacheLocation: path.resolve(
            __dirname,
            '../node_modules/.cache/.eslintcache',
          ),
          // ESLint class options
          cwd: path.resolve(__dirname, '..'),
          resolvePluginsRelativeTo: __dirname,
          baseConfig: {
            extends: [require.resolve('eslint-config-react-app/base')],
            rules: {
              ...(!hasJsxRuntime && {
                'react/react-in-jsx-scope': 'error',
              }),
            },
          },
        }),
      isEnvProduction &&
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
    ].filter(Boolean);

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
