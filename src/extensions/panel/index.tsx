import { IExtension } from 'mo/types';
import { concatMenu, sortByIndex } from 'mo/utils';

import { createContextMenu, createMenuDuplicate } from '../utils';

export const ExtendsPanel: IExtension = {
    id: 'ExtendsPanel',
    name: 'Extend The Default Panel',
    activate: function (molecule): void {
        molecule.panel.onChange((key) => {
            molecule.panel.setCurrent(key);
        });

        molecule.panel.onClose((key) => {
            const { current, data } = molecule.panel.getState();
            molecule.panel.remove(key);
            if (current === key) {
                const idx = data
                    .filter((i) => !i.hidden)
                    .sort(sortByIndex)
                    .findIndex((i) => i.id === key);
                const nextKey = data[idx + 1]?.id ?? data[idx - 1]?.id;
                molecule.panel.setCurrent(nextKey);
            }
        });

        molecule.panel.onToolbarClick((item) => {
            const { PANEL_TOOLBAR_CLOSE, PANEL_TOOLBAR_MAXIMIZE } =
                molecule.builtin.getState().constants;
            switch (item.id) {
                case PANEL_TOOLBAR_CLOSE: {
                    molecule.layout.setPanel(false);
                    break;
                }
                case PANEL_TOOLBAR_MAXIMIZE: {
                    molecule.layout.setPanelMaximized((prev) => !prev);
                    const next = molecule.layout.getState().panel.panelMaximized;
                    molecule.panel.updateToolbar(
                        next
                            ? molecule.builtin.getModules().PANEL_RESTORE
                            : molecule.builtin.getModules().PANEL_MAXIMIZE
                    );
                    break;
                }
                default:
                    break;
            }
        });

        molecule.panel.onContextMenu((pos, panelItem) => {
            const { PANEL_CONTEXTMENU = [] } = molecule.builtin.getModules();
            const data = molecule.panel.getState().data.concat().sort(sortByIndex);
            let contextMenu = concatMenu(createContextMenu(data), PANEL_CONTEXTMENU);
            const target = contextMenu.find((item) => item.id === panelItem?.id);
            if (target) {
                contextMenu = concatMenu([createMenuDuplicate(target)], contextMenu);
            }
            molecule.contextMenu.open(
                contextMenu,
                pos,
                // remark current contextMenu
                molecule.builtin.getConstants().CONTEXTMENU_ITEM_PANEL
            );
        });
    },
};
