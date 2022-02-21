import React from 'react';
import { IExtensionService } from 'mo/services';
import { IExtension } from 'mo/model';
import molecule from 'mo';

import { Pane } from './pane';

export const ExtendPanel: IExtension = {
    id: 'ExtendsProblems',
    name: 'Extends Problems',
    activate(extensionCtx: IExtensionService) {
        molecule.panel.add({
            id: 'TestPanel',
            name: 'Test Panel',
            renderPane: () => <Pane />,
        });
    },
    dispose() {
        molecule.problems.remove(1);
    },
};
