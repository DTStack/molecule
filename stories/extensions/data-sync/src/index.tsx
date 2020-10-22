import { moleculeService } from 'mo/main';

// import * as React from 'react';

// const BarB: React.FunctionComponent = () => {
//     return (<div>affefefe</div>);
// };

export function activate() {
    moleculeService.activityBar.push({
        id: '3333',
        iconName: 'codicon-sync',
        name: '数据同步',
    });

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
