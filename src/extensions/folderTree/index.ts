import { type IEditorTab } from 'mo/models/editor';
import { FileTypes, IExtension } from 'mo/types';

enum FolderTreeContextMenu {
  createFolder = 'folderTree.createFolder',
  createFile = 'folderTree.createFile',
  editFolder = 'folderTree.editFolder',
  editFile = 'folderTree.editFile',
};

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
      });

      molecule.folderTree.onCreate((data, nodeId) => {
        molecule.folderTree.add(data, nodeId);
      });

      molecule.folderTree.onRename((id) => {
        molecule.folderTree.setEditing(id);
      });

      molecule.folderTree.onRemove((id) => {
        molecule.folderTree.remove(id);
      });

      molecule.folderTree.onRightClick((e, node) => {
        // TODO custom contextMenu
        const { COMMON_CONTEXT_MENU } = molecule.builtin.getState().modules;
        if (node.fileType === FileTypes.File) {
          molecule.folderTree.setState({
            contextMenu: [
              // ...fileContextMenu,
              ...COMMON_CONTEXT_MENU,
              { name: '编辑文件', id: FolderTreeContextMenu.editFile },
            ],
          });
        } else if (node.fileType === FileTypes.Folder) {
          molecule.folderTree.setState({
            contextMenu: [
              // ...folderContextMenu,
              ...COMMON_CONTEXT_MENU,
              { name: '新建文件夹', id: FolderTreeContextMenu.createFolder },
              { name: '编辑文件夹', id: FolderTreeContextMenu.editFolder },
              { name: '新建文件', id: FolderTreeContextMenu.createFile },
            ],
          });
        }
      });

      molecule.folderTree.onContextMenu((contextMenuItem, treeNode) => {
        const menuId = contextMenuItem.id;
        const {
            NEW_FILE_COMMAND_ID,
            NEW_FOLDER_COMMAND_ID,
            OPEN_TO_SIDE_COMMAND_ID,
        } = molecule.builtin.getState().constants;
        const { id } = treeNode!;
        switch (menuId) {
            case NEW_FILE_COMMAND_ID: {
                console.log(`test newFile node ${id}`);
                // const { id } = treeNode!;
                // this.createTreeNode(FileTypes.File, id);
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                console.log(`test newFolder node ${id}`);
                // const { id } = treeNode!;
                // this.createTreeNode(FileTypes.Folder, id);
                break;
            }
            case OPEN_TO_SIDE_COMMAND_ID: {
                console.log(`test OPEN_TO_SIDE_COMMAND_ID node ${id}`);
                // this.onSelectFile(treeNode!);
                break;
            }
            case FolderTreeContextMenu.createFile: {
              console.log(`test newFile node ${id}`);
              break;
            }
            case FolderTreeContextMenu.createFolder: {
              console.log(`test newFolder node ${id}`);
              break;
            }
            case FolderTreeContextMenu.editFile: {
              console.log(`test editFile node ${id}`);
              break;
            }
            case FolderTreeContextMenu.editFolder: {
              console.log(`test editFolder node ${id}`);
              break;
            }
        }
      });

      molecule.folderTree.onDropTree((source, target) => {
        molecule.folderTree.dropTree(source, target);
      });

      molecule.folderTree.onLoadData(async (treeNode, cb) => {
        try {
          await sleep({a: 1});
          cb((treeNode.children || []) as any);
        } catch (err) {}
      });
    },
};
