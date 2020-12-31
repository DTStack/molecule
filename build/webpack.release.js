const path = require('path');
const { merge } = require('webpack-merge');
const webpackConf = require('./webpack.base');

// There list the SASS style files manually
const styles = [
    // ============= The Workbench parts =============
    'components/actionBar/style',
    'components/breadcrumb/style',
    'components/button/style',
    'components/checkbox/style',
    'components/collapse/style',
    'components/contextView/style',
    'components/dialog/style',
    'components/dropdown/style',
    'components/input/style',
    'components/list/style',
    'components/menu/style',
    'components/scrollable/style',
    'components/select/style',
    'components/tabs/style',
    'components/toolbar/style',
    'components/tree/style',
    // ============= The Workbench core component =============
    'workbench/style',
    'workbench/activityBar/style',
    'workbench/editor/style',
    'workbench/editor/welcome/style',
    'workbench/menuBar/style',
    'workbench/panel/style',
    'workbench/settings/style',
    'workbench/sidebar/style',
    'workbench/statusBar/style',
    // ============= Molecule.css =============
    'style/mo',
];

function getSassEntries() {
    const cssFiles = [];
    styles.forEach((file) => {
        const input = path.resolve(__dirname, '../src/', file);
        cssFiles.push(input + '.scss');
    });
    return cssFiles;
}

module.exports = function (env) {
    return merge(webpackConf, {
        devtool: 'inline-source-map',
        entry: [...getSassEntries()],
        output: {
            pathinfo: false,
            filename: '[name].css',
            path: path.resolve(__dirname, '../lib'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(jpg|png|gif|eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
                    use: ['file-loader'],
                },
            ],
        },
    });
};
