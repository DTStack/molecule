const path = require('path');
const { merge } = require('webpack-merge');
const baseConf = require('../build/webpack.base');

module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async (config) => {
        baseConf.module.rules[0].use.push({
            loader: require.resolve('react-docgen-typescript-loader'),
        });
        return merge(config, baseConf);
    },
};
