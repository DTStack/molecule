import type { IExtension } from 'mo/types';
import type { editor } from 'monaco-editor';

export const ExtendsEditor: IExtension = {
    id: 'ExtendsEditor',
    name: 'Extend The Default Editor',
    activate: function (molecule): void {
        molecule.editor.onFocus(updateCursorPosition);
        molecule.editor.onCursorSelection(updateCursorPosition);

        molecule.editor.onSelectTab((tabId, groupId) => molecule.editor.setActive(tabId, groupId));

        molecule.editor.onToolbarClick((item, groupId) => {
            const { EDITOR_MENU_SPLIT, EDITOR_MENU_CLOSE_ALL } =
                molecule.builtin.getState().constants;
            switch (item.id) {
                case EDITOR_MENU_SPLIT: {
                    const group = molecule.editor.getGroupById(groupId);
                    if (!group || !group.activeTab) return;
                    molecule.editor.cloneTab(group.activeTab, group.id);
                    break;
                }
                case EDITOR_MENU_CLOSE_ALL: {
                    molecule.editor.closeAll(groupId);
                    break;
                }
                default:
                    break;
            }
        });

        molecule.editor.onContextMenu((item, tabId, groupId) => {
            const {
                EDITOR_MENU_CLOSE,
                EDITOR_MENU_CLOSE_OTHERS,
                EDITOR_MENU_CLOSE_TO_RIGHT,
                EDITOR_MENU_CLOSE_TO_LEFT,
                EDITOR_MENU_CLOSE_ALL,
            } = molecule.builtin.getState().constants;
            switch (item.id) {
                case EDITOR_MENU_CLOSE:
                    molecule.editor.closeTab(tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_OTHERS:
                    molecule.editor.closeOther(tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_TO_RIGHT:
                    molecule.editor.closeToRight(tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_TO_LEFT:
                    molecule.editor.closeToLeft(tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_ALL:
                    molecule.editor.closeAll(groupId);
                    break;
                default:
                    break;
            }
        });

        /**
         * Updates the cursor position in the given code editor instance.
         *
         * @param {editor.IStandaloneCodeEditor} instance - The code editor instance.
         */
        function updateCursorPosition(instance: editor.IStandaloneCodeEditor) {
            const currentTab = molecule.editor.getCurrent();
            if (!currentTab?.model) return;
            if (currentTab.model === instance.getModel()) {
                const position = instance.getPosition();
                molecule.statusBar.update({
                    id: molecule.builtin.getState().constants.STATUS_EDITOR_INFO_ID,
                    data: {
                        ln: position?.lineNumber,
                        col: position?.column,
                    },
                });
            }
        }
    },
};
