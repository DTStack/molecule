import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

export const ExtendsEditorTree: IExtension = {
    id: 'ExtendsEditorTree',
    name: 'Extends Editor Tree',
    dispose() {},
    activate() {
        molecule.editorTree.onSelect((tabId, groupId) => {
            molecule.editor.setActive(groupId, tabId);
        });

        molecule.editorTree.onClose((tabId, groupId) => {
            molecule.editor.closeTab(tabId, groupId);
        });

        molecule.editorTree.onCloseOthers((tabItem, groupId) => {
            molecule.editor.closeOther(tabItem, groupId);
        });

        molecule.editorTree.onCloseAll((groupId) => {
            if (groupId) {
                molecule.editor.closeAll(groupId);
            } else {
                const { groups } = molecule.editor.getState();
                groups?.forEach((group) => {
                    molecule.editor.closeAll(group.id!);
                });
            }
        });
    },
};
