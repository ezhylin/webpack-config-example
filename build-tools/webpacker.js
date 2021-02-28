const {merge} = require('webpack-merge');
const {existsSync} = require('fs');
const path = require('path');

const webpacker = presets => env => {
    const mode = env.mode || 'production';
    const modes = ['all', mode];
    const enabledPresets = Object.keys(presets)
        .filter(name => Array.isArray(presets[name]))
        .filter(name => modes.some(m => presets[name].includes(m)));
    const paths = [
        './webpack.config.js',
        './webpack.' + mode + '.config.js',
        ...enabledPresets.map(name => './presets/' + name + '.js'),
    ];
    const configs = paths.filter(p => existsSync(path.resolve(__dirname, p))).map(p => require(p)(env));

    return merge(...configs);
};

module.exports = webpacker;
