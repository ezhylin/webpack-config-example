const path = require('path');

module.exports = env => ({
    mode: env.mode || 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js'],
    },
});
