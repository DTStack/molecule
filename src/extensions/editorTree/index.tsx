import { IExtension } from 'mo/types';

export const ExtendsEditorTree: IExtension = {
    id: 'ExtendsEditorTree',
    name: 'Extend The Default Editor Tree',
    activate: function (molecule): void {
        molecule.editorTree.onSelect((tabId, groupId) => {
            molecule.editor.setActive(tabId, groupId);
        });

        molecule.editorTree.onClose((tabId, groupId) => {
            molecule.editor.closeTab(tabId, groupId);
        });

        molecule.editorTree.onGroupClick((groupId) => {
            const firstTab = molecule.editor.getGroupById(groupId)?.data.at(0);
            if (firstTab) {
                molecule.editor.setActive(firstTab.id, groupId);
            }
        });

        molecule.editorTree.onToolbarClick((item, groupId) => {
            const { EDITORTREE_TOOLBAR_CLOSE_GROUP, EDITORTREE_TOOLBAR_SAVE_GROUP } =
                molecule.builtin.getState().constants;

            switch (item.id) {
                case EDITORTREE_TOOLBAR_CLOSE_GROUP: {
                    molecule.editor.closeAll(groupId);
                    break;
                }
                case EDITORTREE_TOOLBAR_SAVE_GROUP: {
                    const unsaved =
                        molecule.editor.getGroupById(groupId)?.data?.filter((i) => i.modified) ||
                        [];
                    molecule.editor.saveTabs(
                        unsaved.map((tab) => tab.id),
                        groupId
                    );
                    break;
                }

                default:
                    break;
            }
        });

        molecule.editorTree.onContextMenu((menu, tabId, groupId) => {
            const {
                EDITOR_CONTEXTMENU_CLOSE: EDITOR_MENU_CLOSE,
                EDITOR_CONTEXTMENU_CLOSE_ALL: EDITOR_MENU_CLOSE_ALL,
                EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT: EDITOR_MENU_CLOSE_TO_RIGHT,
                EDITOR_CONTEXTMENU_CLOSE_TO_LEFT: EDITOR_MENU_CLOSE_TO_LEFT,
                EDITOR_CONTEXTMENU_CLOSE_OTHERS: EDITOR_MENU_CLOSE_OTHERS,
            } = molecule.builtin.getState().constants;

            switch (menu.id) {
                case EDITOR_MENU_CLOSE: {
                    molecule.editor.closeTab(tabId, groupId);
                    break;
                }
                case EDITOR_MENU_CLOSE_ALL: {
                    molecule.editor.closeAll(groupId);
                    break;
                }
                case EDITOR_MENU_CLOSE_TO_RIGHT: {
                    molecule.editor.closeToRight(tabId, groupId);
                    break;
                }
                case EDITOR_MENU_CLOSE_TO_LEFT: {
                    molecule.editor.closeToLeft(tabId, groupId);
                    break;
                }
                case EDITOR_MENU_CLOSE_OTHERS: {
                    molecule.editor.closeOther(tabId, groupId);
                    break;
                }
                default:
                    break;
            }
        });

        molecule.editorTree.onGroupContextMenu((menu, groupId) => {
            const {
                EDITOR_CONTEXTMENU_CLOSE_SAVED: EDITOR_MENU_CLOSE_SAVED,
                EDITOR_CONTEXTMENU_CLOSE_ALL: EDITOR_MENU_CLOSE_ALL,
            } = molecule.builtin.getState().constants;
            switch (menu.id) {
                case EDITOR_MENU_CLOSE_ALL: {
                    molecule.editor.closeAll(groupId);
                    break;
                }

                case EDITOR_MENU_CLOSE_SAVED: {
                    molecule.editor.closeSaved(groupId);
                    break;
                }

                default:
                    break;
            }
        });
    },
};
