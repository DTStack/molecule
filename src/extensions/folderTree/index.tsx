import molecule from 'mo';
import { IExtension } from 'mo/model/extension';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { FileTypes } from 'mo/model';

export const ExtendsFolderTree: IExtension = {
    activate() {
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
                const { fileType, name, isEditable } = file;
                const isFile = fileType === FileTypes.File;
                molecule.folderTree.setActive(file?.id);
                if (!isFile || isEditable) return;
                const nameArr = name?.split('.') || [];
                const extName = nameArr[nameArr.length - 1] || '';
                const tabData = {
                    ...file,
                    id: `${file.id}`?.split('_')?.[0],
                    modified: false,
                    data: {
                        ...(file.data || {}),
                        value: file.content,
                        path: file.location,
                        language: extName,
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
                molecule.explorer.updateRender();
            }
        );

        molecule.folderTree.onUpdateFileName((file: ITreeNodeItemProps) => {
            const { folderTree } = molecule.folderTree.getState();
            const { id, name, fileType, location } = file as any;
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            if (name) {
                const newLoc = location.split('/');
                newLoc[newLoc.length - 1] = name;
                tree.update(id, {
                    ...file,
                    icon: molecule.folderTree.getFileIconByExtensionName(
                        name,
                        fileType
                    ),
                    location: newLoc.join('/'),
                    isEditable: false,
                });
            } else {
                // TODO: improve tree helper types
                const node = (tree.get(id) as unknown) as ITreeNodeItemProps;
                if (node.name) {
                    tree.update(id, {
                        isEditable: false,
                    });
                } else {
                    tree.remove(id);
                }
            }

            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });

            const isOpened = molecule.editor.isOpened(id.toString());
            if (isOpened) {
                molecule.editor.updateTab({
                    id: id.toString(),
                    name,
                });
            }
            if (file?.fileType === FileTypes.File && file.name) {
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
