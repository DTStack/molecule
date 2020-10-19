// import { IActivityBarItem } from 'mo/core/activityBar';
import { IMolecule } from 'mo/core/molecule';

import * as React from 'react';

// const BarB: React.FunctionComponent = (props) => {
//     return (<div>affefefe</div>);
// };

export function activate(moleculeCtx: IMolecule) {
    const searchFeat = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };

    moleculeCtx.activityBar.push([searchFeat]);
    moleculeCtx.activityBar.onSelect('folder');

    moleculeCtx.activityBar.onClick = (e: React.MouseEvent) => {
        console.log('moleculeCtx onClick ', e);
    };

    // moleculeCtx.sidebar;

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
