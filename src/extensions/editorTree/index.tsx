import { IExtension } from 'mo/types';
import { concatMenu } from 'mo/utils';

export const ExtendsEditorTree: IExtension = {
    id: 'ExtendsEditorTree',
    name: 'Extend The Default Editor Tree',
    activate: function (molecule): void {
        molecule.editorTree.onSelect((tabId, groupId) => {
            molecule.editor.setCurrent(tabId, groupId);
        });

        molecule.editorTree.onClose((tabId, groupId) => {
            molecule.editor.closeTab(tabId, groupId);
        });

        molecule.editorTree.onGroupClick((groupId) => {
            const firstTab = molecule.editor.getGroup(groupId)?.data.at(0);
            if (firstTab) {
                molecule.editor.setCurrent(firstTab.id, groupId);
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
                        molecule.editor.getGroup(groupId)?.data?.filter((i) => i.modified) ||
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

        molecule.editorTree.onContextMenu((pos, group, tab) => {
            const { EDITOR_TREE_CONTEXTMENU = [], EDITOR_CONTEXTMENU } =
                molecule.builtin.getModules();
            const toolbar = molecule.editorTree.getState().toolbar || [];
            const contextMenu = !tab
                ? concatMenu(toolbar, EDITOR_TREE_CONTEXTMENU)
                : concatMenu(EDITOR_CONTEXTMENU);
            if (contextMenu.length) {
                molecule.contextMenu.open(
                    contextMenu,
                    pos,
                    // remark current contextMenu
                    {
                        name: molecule.builtin.getConstants().CONTEXTMENU_ITEM_EDITOR_TREE,
                        group,
                        tab,
                    }
                );
            }
        });
    },
};
