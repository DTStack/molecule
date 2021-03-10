const path = require('path');

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
    'workbench/sidebar/explore/style',
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

module.exports = function () {
    return {
        mode: 'development',
        entry: [...getSassEntries()],
        output: {
            path: path.resolve(__dirname, '../lib'),
            publicPath: 'lib/',
        },
        resolve: {
            extensions: ['.css', '.scss'],
            alias: {
                mo: path.resolve(__dirname, '../src'),
                '@stories': path.resolve(__dirname, '../stories'),
            },
        },
        module: {
            rules: [
                {
                    test: [...getSassEntries()],
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].css',
                                outputPath: (url, resourcePath, context) => {
                                    const relativePath = path.relative(
                                        context,
                                        resourcePath
                                    );
                                    const target = relativePath.replace(
                                        /(src|(style|mo)\.scss)/g,
                                        ''
                                    );
                                    return `${target}${url}`;
                                },
                            },
                        },
                        {
                            loader: 'extract-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
    };
};
