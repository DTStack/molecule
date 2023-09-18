import type { IMenuItemProps, IMoleculeContext } from 'mo/types';
import { searchById, toggleNextIcon } from 'mo/utils';

/**
 * Toggles the visibility of an activity bar item.
 */
export function toggleActivityBarHidden(molecule: IMoleculeContext, item: IMenuItemProps) {
    const activityBarItem = molecule.activityBar.get(item.id);
    const hidden = !activityBarItem?.hidden;
    molecule.activityBar.update({
        id: item.id,
        hidden,
    });

    return hidden;
}

/**
 * Updates the icon of a specific context menu item
 *
 * @param {IMoleculeContext} molecule - The molecule context to update the icon in.
 * @param {string} token - The token of the context menu item to update.
 * @param {IMenuItemProps} item - The context menu item to update.
 * @param {boolean} nextHidden - The new hidden state for the icon.
 */
export function updateContextMenuIcon(
    molecule: IMoleculeContext,
    token: string,
    item: IMenuItemProps,
    nextHidden: boolean
) {
    molecule.contextMenu.updateItem(token, {
        id: item.id,
        icon: toggleNextIcon(item.icon, nextHidden),
    });
}

/**
 * Toggles the next active item in the activity bar and sidebar.
 *
 * @param {IMoleculeContext} molecule - The molecule context.
 * @param {IMenuItemProps} item - The menu item to toggle.
 * @returns {void}
 */
export function toggleNextActive(molecule: IMoleculeContext, item: IMenuItemProps): void {
    if (molecule.activityBar.getState().selected === item.id) {
        const tops = molecule.activityBar
            .getState()
            .data.filter((i) => i.alignment === 'top' && !i.hidden);
        const idx = tops.findIndex(searchById(item.id));
        if (tops.length > 1) {
            const next = tops[idx + 1] ?? tops[idx - 1];
            molecule.activityBar.setActive(next.id);
            molecule.sidebar.setActive(next.id);
        } else {
            molecule.activityBar.setActive(undefined);
            molecule.sidebar.setActive(undefined);
        }
    }
}
