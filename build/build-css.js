const sass = require('sass'); // or require('node-sass');
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
    // ============= Molecule.css =============
    'style/mo',
];

function buildSass() {
    styles.forEach((file) => {
        const input = path.resolve(__dirname, '../src/', file);
        const output = path.resolve(__dirname, '../lib/', file);

        const result = sass.renderSync({
            file: input + '.scss',
            sourceMap: true,
            outFile: output + '.css',
        });
    });
}

buildSass();
