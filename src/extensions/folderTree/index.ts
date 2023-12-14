import { FileTypes, IExtension } from 'mo/types';

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

        molecule.folderTree.onContextMenu((pos, treeNode) => {
            const scope = {
                name: molecule.builtin.getConstants().CONTEXTMENU_ITEM_FOLDERTREE,
                item: treeNode,
            };
            if (treeNode.fileType === FileTypes.File) {
                molecule.contextMenu.open(
                    molecule.builtin.getModules().CONTEXTMENU_FILE,
                    pos,
                    scope
                );
            } else if (treeNode.fileType === FileTypes.Folder) {
                molecule.contextMenu.open(
                    molecule.builtin.getModules().CONTEXTMENU_FOLDER,
                    pos,
                    scope
                );
            } else if (treeNode.fileType === FileTypes.RootFolder) {
                molecule.contextMenu.open(
                    molecule.builtin.getModules().CONTEXTMENU_FOLDER_PANEL,
                    pos,
                    scope
                );
            }
        });
    },
};
