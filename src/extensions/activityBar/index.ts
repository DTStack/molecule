import { Alignment, IExtension } from 'mo/types';
import { classify, concatMenu, sortByIndex } from 'mo/utils';

import { createContextMenu, createMenuDuplicate } from '../utils';

export const ExtendsActivityBar: IExtension = {
    id: 'ExtendsActivityBar',
    name: 'Extend The Default ActivityBar',
    activate: function (molecule): void {
        molecule.activityBar.onClick((item) => {
            if (item.id === molecule.activityBar.getCurrent()) {
                molecule.layout.setSidebar((prev) => !prev);
            } else {
                molecule.layout.setSidebar(true);
                molecule.activityBar.setCurrent(item.id);
                molecule.sidebar.setCurrent(item.id);
            }
        });

        molecule.activityBar.onContextMenu((pos, activityItem) => {
            const { ACTIVITYBAR_CONTEXTMENU = [] } = molecule.builtin.getModules();
            const activityBar = molecule.activityBar.getState().data;
            const [top = [], bottom = []] = classify(
                activityBar,
                (item) => item.alignment === Alignment.top
            );
            let contextMenu = concatMenu(
                createContextMenu(top.sort(sortByIndex)),
                createContextMenu(bottom.sort(sortByIndex)),
                ACTIVITYBAR_CONTEXTMENU
            );
            const target = contextMenu.find((item) => item.id === activityItem?.id);
            if (target) {
                contextMenu = concatMenu([createMenuDuplicate(target)], contextMenu);
            }
            molecule.contextMenu.open(
                contextMenu,
                pos,
                // remark current contextMenu
                molecule.builtin.getConstants().CONTEXTMENU_ITEM_ACTIVITYBAR
            );
        });
    },
};
