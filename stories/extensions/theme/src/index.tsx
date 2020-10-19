import { IMolecule } from 'mo/core/molecule';

import * as React from 'react';

// const BarB: React.FunctionComponent = () => {
//     return (<div>affefefe</div>);
// };

export function activate(moleculeCtx: IMolecule) {
    moleculeCtx.activityBar.push({
        id: '3333',
        iconName: 'codicon-sync',
        name: '数据同步',
    });

    // moleculeCtx.theme.

    moleculeCtx.activityBar.onClick = (e: React.MouseEvent) => {
        console.log('moleculeCtx onClick ', e);
    };

    // moleculeCtx.a.components.push();

    // moleculeCtx.sidebar.components.push();

    // moleculeCtx.activityBar.onSelect = function(key, options) {
    //     moleculeCtx.sidebar.render();
    // };

    // moleculeCtx.sidebar.onSelect = function(key, options) {
    //     moleculeCtx.sidebar.render('fafa', callback);
    // };

    // moleculeCtx.editor.open(title, content, options, callback);
}
