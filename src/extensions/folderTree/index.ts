import { type IEditorTab } from 'mo/models/editor';
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
        const { groups = [] } = molecule.editor.getState();
        const groupIds = groups
            .filter(({ data }) => data.some(({ id }) => id === file.id))
            .map(({ id }) => id);
        molecule.folderTree.update(file);
        groupIds?.forEach((groupId) => {
            molecule.editor.updateTab({ id: file.id, name: file.name }, groupId);
        });
      });

      molecule.folderTree.onCreate((data, nodeId, opts) => {
        molecule.folderTree.add(data, nodeId, opts);
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
    },
};
