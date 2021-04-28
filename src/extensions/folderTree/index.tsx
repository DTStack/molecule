import { folderTreeService, editorService } from 'mo/index';
import { IExtension } from 'mo/model/extension';
import { ITreeNodeItem, FileTypes, FileType } from 'mo/components/tree';
import { TreeNodeModel } from 'mo/model';
export const ExtendFolderTree: IExtension = {
    activate() {
        const createTargetNodeById = (
            id: number,
            treeInstance,
            extra?: ITreeNodeItem
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

        folderTreeService.onNewFile((id: number) => {
            const { folderTree } = folderTreeService.getState();
            const cloneData: ITreeNodeItem[] = folderTree?.data || [];
            const { tree, index } = folderTreeService.getCurrentRootFolderInfo(
                id
            );
            createTargetNodeById(id, tree, {
                isEditable: true,
            });
            if (index > -1) cloneData[index] = tree.obj;
            folderTreeService.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        folderTreeService.onNewFolder((id: number) => {
            const { folderTree } = folderTreeService.getState();
            const cloneData: ITreeNodeItem[] = folderTree?.data || [];
            const { tree, index } = folderTreeService.getCurrentRootFolderInfo(
                id
            );
            createTargetNodeById(id, tree, {
                fileType: FileTypes.folder as FileType,
                isEditable: true,
            });
            if (index > -1) cloneData[index] = tree.obj;
            folderTreeService.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        folderTreeService.onDelete((id: number) => {
            const { folderTree } = folderTreeService.getState();
            const cloneData: ITreeNodeItem[] = folderTree?.data || [];
            const { tree, index } = folderTreeService.getCurrentRootFolderInfo(
                id
            );
            tree.remove(id);
            if (index > -1) cloneData[index] = tree.obj;
            folderTreeService.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        folderTreeService.onRename((id: number) => {
            const { folderTree } = folderTreeService.getState();
            const cloneData: ITreeNodeItem[] = folderTree?.data || [];
            const { tree, index } = folderTreeService.getCurrentRootFolderInfo(
                id
            );
            tree.update(id, {
                isEditable: true,
            });
            if (index > -1) cloneData[index] = tree.obj;
            folderTreeService.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        folderTreeService.onSelectFile(
            (file: ITreeNodeItem, isUpdate?: boolean) => {
                const { fileType, isEditable } = file;
                const isFile = fileType === FileTypes.file;
                folderTreeService.setActive(file?.id);
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
                    editorService.getState()?.current || ({} as any);
                if (isUpdate) {
                    const tabId = file.id;
                    const index = data?.findIndex((tab) => tab.id == tabId);
                    if (index > -1) {
                        if (id) editorService.updateTab(tabData, id);
                    } else {
                        editorService.open(tabData);
                    }
                } else {
                    editorService.open(tabData);
                }
            }
        );

        folderTreeService.onUpdateFileName((file: ITreeNodeItem) => {
            const { folderTree } = folderTreeService.getState();
            const { id, name, fileType } = file as any;
            const cloneData: ITreeNodeItem[] = folderTree?.data || [];
            const { tree, index } = folderTreeService.getCurrentRootFolderInfo(
                id
            );
            if (name) {
                tree.update(id, {
                    ...file,
                    icon: folderTreeService.getFileIconByExtensionName(
                        name,
                        fileType
                    ),
                    isEditable: false,
                });
            } else {
                tree.remove(id);
            }
            if (index > -1) cloneData[index] = tree.obj;
            folderTreeService.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
            if (file?.fileType === FileTypes.file && file.name) {
                // emit onSelectFile
            }
        });

        folderTreeService.onUpdateFileContent((id: number, value?: string) => {
            const { folderTree } = folderTreeService.getState();
            const cloneData: ITreeNodeItem[] = folderTree?.data || [];
            const { tree, index } = folderTreeService.getCurrentRootFolderInfo(
                id
            );
            tree.update(id, {
                content: value,
            });
            if (index > -1) cloneData[index] = tree.obj;
            folderTreeService.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });
    },
};
