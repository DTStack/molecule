import * as React from 'react';
import { IActivityBarItem } from '@/core/activityBar';
import { IMolecule } from '@/core/molecule';

import { Explorer } from './explore';

function initActivityBar(moleculeCtx: IMolecule) {
    const folderFeat: IActivityBarItem = {
        id: 'active-explorer',
        name: 'Explore',
        iconName: 'codicon-files',
        onClick: function(e, options) {

        },
    };

    moleculeCtx.activityBar.push([folderFeat]);
    moleculeCtx.activityBar.onSelect('folder');


    moleculeCtx.activityBar.onClick = (e: React.MouseEvent) => {
        console.log('moleculeCtx onClick ', e);
    };
}

function initSideBar(moleculeCtx: IMolecule) {
    moleculeCtx.sidebar.panes.push({
        id: 'explore',
        name: 'EXPLORER',
        render() {
            return <Explorer />;
        },
    });
}


export function activate(moleculeCtx: IMolecule) {
    initActivityBar(moleculeCtx);
    initSideBar(moleculeCtx);
}
