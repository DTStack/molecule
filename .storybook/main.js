const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
    {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
    }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    config.node = {
        fs: 'empty',
        module: "empty",
    };

    config.plugins.push(new webpack.ContextReplacementPlugin(
        /monaco-editor(\\|\/)esm(\\|\/)vs(\\|\/)editor(\\|\/)common(\\|\/)services/,
        __dirname
    ))

  
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
      '@stories': path.resolve(__dirname, '../stories'),
    }
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    config.devtool = 'cheap-module-eval-source-map';

    return config;
  },
};
