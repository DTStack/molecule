import molecule from 'mo';
import { IExtension } from 'mo/model/extension';
import {
    IEditorTab,
    BuiltInEditorTabDataType,
} from 'mo/model/workbench/editor';

export const ExtendsFolderTree: IExtension = {
    id: 'ExtendsFolderTree',
    name: 'Extends FolderTree',
    activate() {
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
                const newLocation = newLoc.join('/');
                molecule.folderTree.update({
                    ...file,
                    id,
                    location: newLocation,
                    isEditable: false,
                });

                const groupId = molecule.editor.getGroupIdByTab(id.toString());
                const isValidGroupId = !!groupId || groupId === 0;
                if (isValidGroupId) {
                    const prevTab =
                        molecule.editor.getTabById<BuiltInEditorTabDataType>(
                            id.toString(),
                            groupId
                        );
                    const newTab: IEditorTab = { id: id.toString(), name };
                    const prevTabData = prevTab?.data;
                    if (prevTabData && prevTabData.path) {
                        newTab.data = { ...prevTabData, path: newLocation };
                    }
                    molecule.editor.updateTab(newTab);
                }
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
        });
    },
    dispose() {},
};
