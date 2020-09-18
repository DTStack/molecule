import { Extension } from '@/core/extension';
import { IMolecule } from '@/core/molecule';

import * as React from 'react';

export function activate() {
    console.log('test abc 123');
}

const BarB: React.FunctionComponent = () => {
    return (<div>affefefe</div>);
};

export default class CustomizeActivityBar implements Extension {
    public active(moleculeCtx: IMolecule) {
        moleculeCtx.activityBar.push({
            id: 'test',
            name: 'aaa',
        });

        moleculeCtx.activityBar.push({
            id: '2',
            name: 'bbb',
            render: function a() {
                return (<BarB />);
            },
        });

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
}
