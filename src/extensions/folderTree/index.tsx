import molecule from 'mo';
import { IExtension } from 'mo/model/extension';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { FileType, FileTypes, TreeNodeModel } from 'mo/model';

export const ExtendsFolderTree: IExtension = {
    activate() {
        // TODO: Move the folderTree logic to stories test
        const createTargetNodeById = (
            id: number,
            treeInstance,
            extra?: ITreeNodeItemProps
        ) => {
            const currentIndex = treeInstance.getIndex(id);
            // If the node type of the current id is a file, insert it at the parent node above it
            if (currentIndex?.node?.fileType === FileTypes.file) {
                treeInstance.prepend(
                    new TreeNodeModel(extra),
                    currentIndex?.parent
                );
            } else {
                treeInstance.append(new TreeNodeModel(extra), id);
            }
        };

        molecule.folderTree.onNewFile((id: number) => {
            const { folderTree } = molecule.folderTree.getState();
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            createTargetNodeById(id, tree, {
                isEditable: true,
            });
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        molecule.folderTree.onNewFolder((id: number) => {
            const { folderTree } = molecule.folderTree.getState();
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            createTargetNodeById(id, tree, {
                fileType: FileTypes.folder as FileType,
                isEditable: true,
            });
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        molecule.folderTree.onDelete((id: number) => {
            const { folderTree } = molecule.folderTree.getState();
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            tree.remove(id);
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        molecule.folderTree.onRename((id: number) => {
            const { folderTree } = molecule.folderTree.getState();
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            tree.update(id, {
                isEditable: true,
            });
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        molecule.folderTree.onSelectFile(
            (file: ITreeNodeItemProps, isUpdate?: boolean) => {
                const { fileType, isEditable } = file;
                const isFile = fileType === FileTypes.file;
                molecule.folderTree.setActive(file?.id);
                if (!isFile || isEditable) return;
                const tabData = {
                    ...file,
                    id: `${file.id}`?.split('_')?.[0],
                    modified: false,
                    data: {
                        value: file.content,
                        path: 'desktop/moslecule/editor1',
                        language: 'sql',
                    },
                };

                const { id, data = [] } =
                    molecule.editor.getState()?.current || ({} as any);
                if (isUpdate) {
                    const tabId = file.id;
                    const index = data?.findIndex((tab) => tab.id == tabId);
                    if (index > -1) {
                        if (id) molecule.editor.updateTab(tabData, id);
                    } else {
                        molecule.editor.open(tabData);
                    }
                } else {
                    molecule.editor.open(tabData);
                }
            }
        );

        molecule.folderTree.onUpdateFileName((file: ITreeNodeItemProps) => {
            const { folderTree } = molecule.folderTree.getState();
            const { id, name, fileType } = file as any;
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            if (name) {
                tree.update(id, {
                    ...file,
                    icon: molecule.folderTree.getFileIconByExtensionName(
                        name,
                        fileType
                    ),
                    isEditable: false,
                });
            } else {
                tree.remove(id);
            }
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
            if (file?.fileType === FileTypes.file && file.name) {
                // emit onSelectFile
            }
        });

        molecule.folderTree.onUpdateFileContent(
            (id: number, value?: string) => {
                const { folderTree } = molecule.folderTree.getState();
                const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
                const {
                    tree,
                    index,
                } = molecule.folderTree.getCurrentRootFolderInfo(id);
                tree.update(id, {
                    content: value,
                });
                if (index > -1) cloneData[index] = tree.obj;
                molecule.folderTree.setState({
                    folderTree: { ...folderTree, data: cloneData },
                });
            }
        );
    },
};
