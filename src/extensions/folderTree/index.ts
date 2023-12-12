import { IExtension } from 'mo/types';

export const ExtendsFolderTree: IExtension = {
    id: 'ExtendsFolderTree',
    name: 'Extend The Default Folder Tree',
    activate: function (molecule): void {
        molecule.folderTree.onSelect((treeNode) => {
            molecule.folderTree.setState({ editing: undefined });
            molecule.folderTree.setActive(treeNode.id);
        });

        molecule.folderTree.onTreeItemKeyDown((e, node) => {
            molecule.folderTree.setEditing(node.id);
        });

        molecule.folderTree.onUpdateFileName((file) => {
            molecule.folderTree.update(file);
        });

        molecule.folderTree.onAfterUpdateFileName((file) => {
            const { groups = [] } = molecule.editor.getState();
            const groupIds = groups
                .filter(({ data }) => data.some(({ id }) => id === file.id))
                .map(({ id }) => id);
            groupIds?.forEach((groupId) => {
                molecule.editor.updateTab({ id: file.id, name: file.name }, groupId);
            });
        });

        molecule.folderTree.onRename((id) => {
            molecule.folderTree.setEditing(id);
        });

        molecule.folderTree.onRemove((id) => {
            molecule.folderTree.remove(id);
        });

        molecule.folderTree.onDropTree((source, target) => {
            molecule.folderTree.dropTree(source, target);
        });

        molecule.folderTree.onContextMenu((contextMenuItem, treeNode) => {
            const menuId = contextMenuItem.id;
            const {
                EXPLORER_CONTEXTMENU_RENAME: RENAME_COMMAND_ID,
                EXPLORER_CONTEXTMENU_DELETE: DELETE_COMMAND_ID,
            } = molecule.builtin.getState().constants;
            const { id } = treeNode!;
            switch (menuId) {
                case RENAME_COMMAND_ID: {
                    molecule.folderTree.setEditing(id);
                    break;
                }
                case DELETE_COMMAND_ID: {
                    molecule.folderTree.remove(id);
                    break;
                }
            }
        });
    },
};
