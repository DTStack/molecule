import React from 'react';
import { IExtensionService } from 'mo/services';
import { IExtension } from 'mo/model';
import molecule from 'mo';

import { Pane } from './pane';
import { MenuBarMode } from 'mo/model/workbench/layout';

export const ExtendPanel: IExtension = {
    id: 'ExtendsProblems',
    name: 'Extends Problems',
    activate(extensionCtx: IExtensionService) {
        molecule.panel.add({
            id: 'TestPanel',
            name: 'Test Panel',
            renderPane: () => <Pane />,
        });

        molecule.editorTree.onLayout(() => {
            molecule.layout.setEditorGroupDirection((pre) =>
                pre === MenuBarMode.horizontal
                    ? MenuBarMode.vertical
                    : MenuBarMode.horizontal
            );
        });
    },
    dispose() {
        molecule.problems.remove(1);
    },
};
