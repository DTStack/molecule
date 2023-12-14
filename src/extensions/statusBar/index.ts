import { Alignment, IExtension } from 'mo/types';
import { classify, concatMenu, sortByIndex } from 'mo/utils';

import { createContextMenu, createMenuDuplicate } from '../utils';

export const ExtendsStatusBar: IExtension = {
    id: 'ExtendsStatusBar',
    name: 'Extend The Default StatusBar',
    activate: function (molecule): void {
        molecule.statusBar.onContextMenu((pos, statusItem) => {
            const { STATUSBAR_CONTEXTMENU = [] } = molecule.builtin.getModules();
            const data = molecule.statusBar.getState().data;
            const [l = [], r = []] = classify(data, (item) => item.alignment === Alignment.left);

            let contextMenu = concatMenu(
                createContextMenu([...l.sort(sortByIndex), ...r.sort(sortByIndex)]),
                STATUSBAR_CONTEXTMENU
            );
            const target = contextMenu.find((item) => item.id === statusItem?.id);
            if (target) {
                contextMenu = concatMenu([createMenuDuplicate(target)], contextMenu);
            }
            molecule.contextMenu.open(
                contextMenu,
                pos,
                // remark current contextMenu
                molecule.builtin.getConstants().CONTEXTMENU_ITEM_STATUS_BAR
            );
        });
    },
};
