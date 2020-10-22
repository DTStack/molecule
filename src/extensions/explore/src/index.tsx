import * as React from 'react';
import { ActivityBarEvent, IActivityBarItem } from 'mo/core/workbench/activityBar';
import { IMolecule } from 'mo/core/molecule';
import { activityBarService } from 'mo/main';

import { Explorer } from './explore';

function initActivityBar(moleculeCtx: IMolecule) {
    const folderFeat: IActivityBarItem = {
        id: 'active-explorer',
        name: 'Explore',
        iconName: 'codicon-files',
        onClick: function(e, options) {

        },
    };

    activityBarService.push([folderFeat]);

    activityBarService.subscribe(ActivityBarEvent.OnClick, (data) => {
        console.log('Explore activityBar subscribe onClick:', data);
    });
}

function initSidebar(moleculeCtx: IMolecule) {
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
    initSidebar(moleculeCtx);
}
