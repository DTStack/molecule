const path = require('path');
const { merge } = require('webpack-merge');
const baseConf = require('../build/webpack.base');
module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async (config) => {
        return merge(config, baseConf);
    },
    typescript: {
        reactDocgen: 'none',
    },
    features: {
        postcss: false,
        babelModeV7: true,
    },
    core: {
        builder: 'webpack5',
    },
};
