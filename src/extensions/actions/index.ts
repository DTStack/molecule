import { IBottomActivityBarItem, IContributeType, type IExtension, IMenuItemProps, UniqueId } from 'mo/types';
import { concatMenu } from 'mo/utils';

import CopyAction from './copy';
import CopyLineUpAction from './copyLineUp';
import CutAction from './cut';
import PasteAction from './paste';
import { QuickAccessCommandAction } from './quickAccessCommandAction';
import { QuickAccessSettingsAction } from './quickAccessSettingsAction';
import QuickJumpToLineAction from './quickJumpToLineAction';
import QuickSelectLocaleAction from './quickSelectLocaleAction';
import QuickSelectThemeAction from './quickSelectThemeAction';
import QuickTogglePanelAction from './quickTogglePanelAction';
import QuickToggleSidebarAction from './quickToggleSideBarAction';
import RedoAction from './redo';
import SelectAllAction from './selectAll';
import UndoAction from './undo';

export const ExtendsActions: IExtension = {
    id: 'ExtendsActions',
    name: 'Extend The Default Actions',
    contributes: {
        [IContributeType.Commands]: [
            UndoAction,
            RedoAction,
            SelectAllAction,
            CopyLineUpAction,
            CutAction,
            CopyAction,
            PasteAction,
            QuickSelectThemeAction,
            QuickTogglePanelAction,
            QuickToggleSidebarAction,
            QuickJumpToLineAction,
            QuickAccessSettingsAction,
            QuickAccessCommandAction,
            QuickSelectLocaleAction,
        ],
    },
    activate: function (molecule): void {
        // append actions into settings' menu
        appendActionToSettingMenu(QuickAccessCommandAction);
        appendActionToSettingMenu(QuickAccessSettingsAction);
        appendActionToSettingMenu(QuickSelectThemeAction);

        appendActionGroupBy(molecule.builtin.getConstants().MENUBAR_ITEM_EDIT)
            .with(CutAction)
            .with(CopyAction)
            .with(PasteAction)
            .exhaust();

        // update menu's keybinding
        updateMenuKeybinding(QuickAccessCommandAction.ID);
        updateMenuKeybinding(QuickTogglePanelAction.ID);
        updateMenuKeybinding(QuickToggleSidebarAction.ID);
        updateMenuKeybinding(UndoAction.ID);
        updateMenuKeybinding(RedoAction.ID);
        updateMenuKeybinding(SelectAllAction.ID);
        updateMenuKeybinding(CopyLineUpAction.ID);
        updateMenuKeybinding(CutAction.ID);

        function appendActionToSettingMenu(ctor: { ID: string }) {
            const keybinding = molecule.action.queryGlobalKeybinding(ctor.ID);
            // Add Settings into setting's menus
            molecule.activityBar.update<IBottomActivityBarItem>(
                molecule.builtin.getState().constants.ACTIVITYBAR_ITEM_SETTING,
                (prev) => ({
                    id: prev.id,
                    contextMenu: [
                        ...(prev.contextMenu || []),
                        {
                            id: ctor.ID,
                            name: molecule.locale.localize(ctor.ID, ctor.ID),
                            keybinding: keybinding
                                ? molecule.action.convertSimpleKeybindingToString(keybinding)
                                : undefined,
                        },
                    ],
                })
            );

            molecule.activityBar.onContextMenuClick((item) => {
                if (item.id === ctor.ID) {
                    molecule.action.execute(ctor.ID);
                }
            });
        }

        function updateMenuKeybinding(id: UniqueId) {
            const keybinding = molecule.action.queryGlobalKeybinding(id);
            if (keybinding) {
                molecule.menuBar.update({
                    id,
                    keybinding: molecule.action.convertSimpleKeybindingToString(keybinding),
                });
            }
        }

        function appendActionGroupBy(parentId: UniqueId) {
            const items: IMenuItemProps[] = [];
            return new (class {
                with = (ctor: { ID: string }) => {
                    const keybinding = molecule.action.queryGlobalKeybinding(ctor.ID);
                    items.push({
                        id: ctor.ID,
                        name: molecule.locale.localize(ctor.ID, ctor.ID),
                        keybinding: keybinding
                            ? molecule.action.convertSimpleKeybindingToString(keybinding)
                            : undefined,
                    });
                    return this;
                };
                exhaust = () => {
                    const menuItems = concatMenu(molecule.menuBar.get(parentId)?.children || [], items);
                    molecule.menuBar.update(parentId, () => ({
                        children: menuItems,
                    }));
                };
            })();
        }
    },
};
