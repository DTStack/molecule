import React from 'react';
import { IExtensionService } from '@dtinsight/molecule';
import { IExtension } from '@dtinsight/molecule';
import molecule from '@dtinsight/molecule';

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
