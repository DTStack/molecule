import { EditorEvent } from 'mo/models/editor';
import type { editor } from 'mo/monaco';
import type { IExtension } from 'mo/types';

export const ExtendsEditor: IExtension = {
    id: 'ExtendsEditor',
    name: 'Extend The Default Editor',
    activate: function (molecule): void {
        molecule.editor.onFocus(updateCursorPosition);
        molecule.editor.onCursorSelection(updateCursorPosition);

        molecule.editor.onCloseAll((groupId) => {
            molecule.editor.closeAll(groupId);
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

        molecule.editor.onDragStart((tabId, groupId) => {
            molecule.editor.setCurrent(tabId, groupId);
        });

        let settimeout = 0;
        molecule.editor.onDragEnter((_, to) => {
            window.clearTimeout(settimeout);
            settimeout = window.setTimeout(() => {
                molecule.editor.setCurrent(to.tabId, to.groupId);
            }, 2000);
        });

        molecule.editor.onDragLeave(() => {
            window.clearTimeout(settimeout);
        });

        molecule.editor.onDrop((from, to) => {
            molecule.editor.moveTab(from, to);
            window.clearTimeout(settimeout);
        });

        molecule.editor.onChange(({ value, tabId, groupId }) => {
            const tab = molecule.editor.getTab(tabId, groupId);
            if (!tab) return;
            molecule.editor.updateTab({ ...tab, value, modified: true }, groupId);
        });

        molecule.editor.onSplitEditorRight((activeTabId, groupId) => {
            const tab = molecule.editor.getTab(activeTabId, groupId);
            if (!tab) return;
            molecule.editor.open(tab);
        });

        molecule.editor.onSelectTab((tabId, groupId) => {
            molecule.editor.setCurrent(tabId, groupId);
            if (molecule.folderTree.get(tabId)) {
                molecule.folderTree.setCurrent(tabId);
            }
        });

        molecule.editor.onToolbarClick((item, groupId) => {
            const { EDITOR_TOOLBAR_SPLIT: EDITOR_MENU_SPLIT, EDITOR_CONTEXTMENU_CLOSE_ALL: EDITOR_MENU_CLOSE_ALL } =
                molecule.builtin.getState().constants;
            switch (item.id) {
                case EDITOR_MENU_SPLIT: {
                    const group = molecule.editor.getGroup(groupId);
                    if (!group || !group.activeTab) return;
                    molecule.editor.emit(EditorEvent.onSplitEditorRight, group.activeTab, group.id);
                    break;
                }
                case EDITOR_MENU_CLOSE_ALL: {
                    molecule.editor.emit(EditorEvent.onCloseAll, groupId);
                    break;
                }
                default:
                    break;
            }
        });

        molecule.editor.onContextMenu((pos, tabId, groupId) => {
            molecule.contextMenu.open(molecule.builtin.getModules().EDITOR_CONTEXTMENU, pos, {
                name: molecule.builtin.getConstants().CONTEXTMENU_ITEM_EDITOR,
                item: { tabId, groupId },
            });
        });

        molecule.editor.onContextMenuClick((item, tabId, groupId) => {
            const {
                EDITOR_CONTEXTMENU_CLOSE,
                EDITOR_CONTEXTMENU_CLOSE_ALL,
                EDITOR_CONTEXTMENU_CLOSE_OTHERS,
                EDITOR_CONTEXTMENU_CLOSE_TO_LEFT,
                EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT,
            } = molecule.builtin.getConstants();
            switch (item.id) {
                case EDITOR_CONTEXTMENU_CLOSE: {
                    molecule.editor.emit(EditorEvent.onCloseTab, tabId, groupId);
                    break;
                }
                case EDITOR_CONTEXTMENU_CLOSE_OTHERS: {
                    molecule.editor.emit(EditorEvent.onCloseOther, tabId, groupId);
                    break;
                }
                case EDITOR_CONTEXTMENU_CLOSE_TO_LEFT: {
                    molecule.editor.emit(EditorEvent.onCloseToLeft, tabId, groupId);
                    break;
                }
                case EDITOR_CONTEXTMENU_CLOSE_TO_RIGHT: {
                    molecule.editor.emit(EditorEvent.onCloseToRight, tabId, groupId);
                    break;
                }
                case EDITOR_CONTEXTMENU_CLOSE_ALL: {
                    molecule.editor.emit(EditorEvent.onCloseAll, groupId);
                    break;
                }
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
            const currentTab = molecule.editor.getCurrentTab();
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
