import { IExtension } from 'mo/types';
import { concatMenu, searchById, sortByIndex } from 'mo/utils';

import { createContextMenu, createMenuDuplicate } from '../utils';

export const ExtendsExplorer: IExtension = {
    id: 'ExtendsExplorer',
    name: 'Extend The Default Explorer',
    activate: function (molecule): void {
        molecule.explorer.onPanelToolbarClick((toolbar, panelId) => {
            const {
                EXPLORER_TOOLBAR_CLOSE_ALL,
                EXPLORER_TOOLBAR_SAVE_ALL,
                EXPLORER_ITEM_OPEN_EDITOR,
            } = molecule.builtin.getState().constants;
            if (panelId === EXPLORER_ITEM_OPEN_EDITOR) {
                switch (toolbar.id) {
                    case EXPLORER_TOOLBAR_CLOSE_ALL: {
                        molecule.editor.closeAll();
                        break;
                    }

                    case EXPLORER_TOOLBAR_SAVE_ALL: {
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
            molecule.explorer.setActive(keys);
        });

        molecule.explorer.onContextMenu((pos, panel) => {
            const data = molecule.explorer.getState().data.concat().sort(sortByIndex);
            let contextMenu = concatMenu(createContextMenu(data));

            const target = contextMenu.find(searchById(panel.id));
            if (target) {
                contextMenu = concatMenu([createMenuDuplicate(target)], contextMenu);
            }
            molecule.contextMenu.open(
                contextMenu,
                pos,
                // remark current contextMenu
                molecule.builtin.getConstants().CONTEXTMENU_ITEM_EXPLORER
            );
        });
    },
};
