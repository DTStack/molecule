/*
 * @Author: mumiao mumiao@dtstack.com
 * @Date: 2022-05-25 14:50:36
 * @LastEditors: mumiao mumiao@dtstack.com
 * @LastEditTime: 2022-05-25 18:40:42
 * @FilePath: /molecule/src/extensions/folderTree/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

        molecule.folderTree.onExpandKeys((expandKeys) => {
            molecule.folderTree.setExpandKeys(expandKeys);
        });
    },
    dispose() {},
};
