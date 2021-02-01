const devConfig = () => {
  return {
    output: {
      filename: '[name].[contenthash].bundle.js',
    },
  };
};

module.exports = devConfig;
