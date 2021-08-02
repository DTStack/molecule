import molecule from 'mo';
import { IExtension } from 'mo/model/extension';
import { ITreeNodeItemProps } from 'mo/components/tree';

export const ExtendsFolderTree: IExtension = {
    activate() {
        molecule.folderTree.onRemove((id: number) => {
            molecule.folderTree.remove(id);
        });

        molecule.folderTree.onRename((id: number) => {
            molecule.folderTree.update({
                id,
                isEditable: true,
            });
        });

        molecule.folderTree.onSelectFile((file: ITreeNodeItemProps) => {
            const { name } = file;
            const nameArr = name?.split('.') || [];
            const extName = nameArr[nameArr.length - 1] || '';
            const tabData = {
                ...file,
                id: `${file.id}`?.split('_')?.[0],
                modified: false,
                data: {
                    value: file.content,
                    path: file.location,
                    language: extName,
                    ...(file.data || {}),
                },
            };
            molecule.editor.open(tabData);
            molecule.explorer.render();
        });

        molecule.folderTree.onUpdateFileName((file: ITreeNodeItemProps) => {
            const { id, name, location } = file;
            if (name) {
                const newLoc = location.split('/');
                newLoc[newLoc.length - 1] = name;
                molecule.folderTree.update({
                    id,
                    ...file,
                    location: newLoc.join('/'),
                    isEditable: false,
                });
            } else {
                const node = molecule.folderTree.get(id);
                if (node?.name) {
                    molecule.folderTree.update({
                        id,
                        isEditable: false,
                    });
                } else {
                    molecule.folderTree.remove(id);
                }
            }

            const isOpened = molecule.editor.isOpened(id.toString());
            if (isOpened) {
                molecule.editor.updateTab({
                    id: id.toString(),
                    name,
                });
            }
        });
    },
};
