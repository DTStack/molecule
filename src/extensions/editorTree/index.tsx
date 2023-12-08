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

        molecule.editorTree.onContextMenu((menu, tabId, groupId) => {
            const {
                EDITOR_MENU_CLOSE,
                EDITOR_MENU_CLOSE_ALL,
                EDITOR_MENU_CLOSE_TO_RIGHT,
                EDITOR_MENU_CLOSE_TO_LEFT,
                EDITOR_MENU_CLOSE_OTHERS,
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
            const { EDITOR_MENU_CLOSE_SAVED, EDITOR_MENU_CLOSE_ALL } =
                molecule.builtin.getState().constants;
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
