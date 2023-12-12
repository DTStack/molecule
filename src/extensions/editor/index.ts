import { EditorEvent } from 'mo/models/editor';
import type { IExtension } from 'mo/types';
import type { editor } from 'monaco-editor';

export const ExtendsEditor: IExtension = {
    id: 'ExtendsEditor',
    name: 'Extend The Default Editor',
    activate: function (molecule): void {
        molecule.editor.onFocus(updateCursorPosition);
        molecule.editor.onCursorSelection(updateCursorPosition);

        molecule.editor.onCloseAll((groupId) => {
            molecule.editor.closeAll(groupId!);
        });
        molecule.editor.onCloseOther((tabId, groupId) => {
            molecule.editor.closeOther(tabId, groupId);
        });
        molecule.editor.onCloseTab((tabId, groupId) => {
            molecule.editor.closeTab(tabId, groupId);
        });
        molecule.editor.onCloseToLeft((tabId, groupId) => {
            molecule.editor.closeToLeft(tabId, groupId);
        });
        molecule.editor.onCloseToRight((tabId, groupId) => {
            molecule.editor.closeToRight(tabId, groupId);
        });

        molecule.editor.onMoveTab((props) => {
            molecule.editor.moveTab(props);
        });

        molecule.editor.onChangeTab((value, ev, { tabId, groupId }) => {
            const tab = molecule.editor.getTabById(tabId, groupId);
            if (!tab) return;
            molecule.editor.updateTab({ ...tab, value, modified: true }, groupId);
        });

        molecule.editor.onSplitEditorRight((activeTabId, groupId) => {
            molecule.editor.cloneTab(activeTabId, groupId);
        });

        molecule.editor.onSelectTab((tabId, groupId) => molecule.editor.setActive(tabId, groupId));

        molecule.editor.onToolbarClick((item, groupId) => {
            const {
                EDITOR_TOOLBAR_SPLIT: EDITOR_MENU_SPLIT,
                EDITOR_CONTEXTMENU_CLOSE_ALL: EDITOR_MENU_CLOSE_ALL,
            } = molecule.builtin.getState().constants;
            switch (item.id) {
                case EDITOR_MENU_SPLIT: {
                    const group = molecule.editor.getGroupById(groupId);
                    if (!group || !group.activeTab) return;
                    molecule.editor.emit(EditorEvent.OnSplitEditorRight, group.activeTab, group.id);
                    break;
                }
                case EDITOR_MENU_CLOSE_ALL: {
                    molecule.editor.emit(EditorEvent.OnCloseAll, groupId);
                    break;
                }
                default:
                    break;
            }
        });

        molecule.editor.onContextMenu((item, tabId, groupId) => {
            const {
                EDITOR_CONTEXTMENU_CLOSE: EDITOR_MENU_CLOSE,
                EDITOR_CONTEXTMENU_CLOSE_OTHERS: EDITOR_MENU_CLOSE_OTHERS,
                EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT: EDITOR_MENU_CLOSE_TO_RIGHT,
                EDITOR_CONTEXTMENU_CLOSE_TO_LEFT: EDITOR_MENU_CLOSE_TO_LEFT,
                EDITOR_CONTEXTMENU_CLOSE_ALL: EDITOR_MENU_CLOSE_ALL,
            } = molecule.builtin.getState().constants;
            switch (item.id) {
                case EDITOR_MENU_CLOSE:
                    molecule.editor.emit(EditorEvent.OnCloseTab, tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_OTHERS:
                    molecule.editor.emit(EditorEvent.OnCloseOther, tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_TO_RIGHT:
                    molecule.editor.emit(EditorEvent.OnCloseToRight, tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_TO_LEFT:
                    molecule.editor.emit(EditorEvent.OnCloseToLeft, tabId, groupId);
                    break;
                case EDITOR_MENU_CLOSE_ALL:
                    molecule.editor.emit(EditorEvent.OnCloseAll, groupId);
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
                    id: molecule.builtin.getState().constants.STATUSBAR_ITEM_LINE_INFO,
                    data: {
                        ln: position?.lineNumber,
                        col: position?.column,
                    },
                });
            }
        }
    },
};
