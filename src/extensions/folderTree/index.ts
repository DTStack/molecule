import { IExtension } from 'mo/types';

export const ExtendsFolderTree: IExtension = {
    id: 'ExtendsFolderTree',
    name: 'Extend The Default Folder Tree',
    activate: function (molecule): void {
      molecule.folderTree.onExpandKeys((expandedKeys) => {
        molecule.folderTree.setState({
          expandKeys: expandedKeys,
        });
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
        const { RENAME_COMMAND_ID, DELETE_COMMAND_ID } = molecule.builtin.getState().constants;
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
