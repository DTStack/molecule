import { type IEditorTab } from 'mo/models/editor';
import { IExtension } from 'mo/types';

function sleep(data = {}, t = 1500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, t);
  });
};

export const ExtendsFolderTree: IExtension = {
    id: 'ExtendsFolderTree',
    name: 'Extend The Default Folder Tree',
    activate: function (molecule): void {
      molecule.folderTree.onExpandKeys((expandedKeys) => {
        // const { expandKeys } = molecule.folderTree.getState();
        molecule.folderTree.setState({
          // expandKeys: [...expandKeys, ...expandedKeys],
          expandKeys: expandedKeys,
        });
      });

      molecule.folderTree.onSelectFile((file) => {
          if (file.fileType !== 'File') return;
          molecule.folderTree.setState({ editing: undefined });
        // TODO need to update breadcrumb、language、value、icon by data
        const tabData: IEditorTab<any> = {
            id: file.id,
            name: file.name,
            icon: 'file',
            value: `
// name: ${file.name}
// id: ${file.id}
            `,
            language: 'typescript',
            breadcrumb: [
                { id: 'app', name: 'app' },
                { id: 'src', name: 'src' },
                { id: 'components', name: 'components' },
                { id: 'editor', name: file.name, icon: 'file' },
            ],
            // modified: !!(key % 2),
        };
        molecule.editor.open(tabData, molecule.editor.getState().groups?.at(0)?.id);
      });

      molecule.folderTree.onFileKeyDown((e, node) => {
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
        // file.
        // molecule.editor.updateTab()
        // molecule.editor.updateTab();
      });

      // molecule.folderTree.onRename((id) => {
      //   molecule.folderTree.update({
      //       id,
      //       isEditable: true,
      //   });
      // });

      molecule.folderTree.onLoadData(async (treeNode, cb) => {
        try {
          await sleep({a: 1});
          cb((treeNode.children || []) as any);
        } catch (err) {}
      });
    },
};
