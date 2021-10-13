import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

export const ExtendsFolderTree: IExtension = {
    id: 'ExtendsFolderTree',
    name: 'Extends FolderTree',
    activate() {
        molecule.folderTree.onRemove((id) => {
            molecule.folderTree.remove(id);
        });

        molecule.folderTree.onRename((id) => {
            molecule.folderTree.update({
                id,
                isEditable: true,
            });
        });

        molecule.folderTree.onUpdateFileName((file) => {
            const { id, name, location } = file;
            if (name) {
                const newLoc = location?.split('/') || [];
                newLoc[newLoc.length - 1] = name;
                molecule.folderTree.update({
                    ...file,
                    id,
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
    dispose() {},
};
