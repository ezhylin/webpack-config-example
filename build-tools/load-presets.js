const { merge } = require('webpack-merge');

const loadPresets = (env) => {
  const { presets = '' } = env;
  const mergedConfigs = presets.split(',').map((presetName) => require(`./presets/${presetName}.preset`)(env));

  return merge(...mergedConfigs);
};

module.exports = loadPresets;
