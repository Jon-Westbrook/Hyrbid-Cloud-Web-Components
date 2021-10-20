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
    config.module.rules = config.module.rules.filter(
      (rule) => rule.loader !== 'ts-loader',
    );

    config.devtool = 'inline-source-map';
    return config;
  },
};
