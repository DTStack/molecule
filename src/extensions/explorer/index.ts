import { IExtension } from 'mo/types';

export const ExtendsExplorer: IExtension = {
    id: 'ExtendsExplorer',
    name: 'Extend The Default Explorer',
    activate: function (molecule): void {
        molecule.explorer.onPanelToolbarClick((toolbar, panelId) => {
            const { EXPLORER_TOGGLE_CLOSE_ALL_EDITORS, EXPLORER_TOGGLE_SAVE_ALL, EDITOR_PANEL_ID } =
                molecule.builtin.getState().constants;
            if (panelId === EDITOR_PANEL_ID) {
                switch (toolbar.id) {
                    case EXPLORER_TOGGLE_CLOSE_ALL_EDITORS: {
                        molecule.editor.closeAll();
                        break;
                    }

                    case EXPLORER_TOGGLE_SAVE_ALL: {
                        molecule.editor.getState().groups.forEach((group) => {
                            const unsaved = group.data
                                .filter((tab) => tab.modified)
                                .map((t) => t.id);
                            molecule.editor.saveTabs(unsaved, group.id);
                        });
                        break;
                    }

                    default:
                        break;
                }
            }
        });

        molecule.explorer.onCollapseChange((keys) => {
            molecule.explorer.setExpandedPanels(keys);
        });
    },
};
