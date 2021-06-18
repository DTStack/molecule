import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

export const ExtendsEditorTree: IExtension = {
    activate() {
        molecule.editorTree.onSelect((tabId, groupId) => {
            molecule.editor.setActive(groupId, tabId);
        });

        molecule.editorTree.onClose((tabId, groupId) => {
            molecule.editor.closeTab(tabId, groupId);
        });

        molecule.editorTree.onCloseOthers((tabItem, groupId) => {
            molecule.editor.closeOthers(tabItem, groupId);
        });

        molecule.editorTree.onCloseSaved((groupId) => {
            // TODO: editor close saved
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

        molecule.editorTree.onSaveAll((groupId) => {
            // TODO: editor save
        });

        molecule.editorTree.onLayout(() => {
            // TODO: layoutService
        });
    },
};
