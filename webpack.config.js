const path = require('path');
const { merge } = require('webpack-merge');
const loadPresets = require('./build-tools/load-presets');

module.exports = (env) => {
  const modeConfig = require(`./build-tools/webpack.${env.mode}.config`)(env);
  const sharedConfig = {
    mode: env.mode || 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js'],
    },
  };
  const presets = loadPresets(env);

  return merge(sharedConfig, modeConfig, presets);
};
