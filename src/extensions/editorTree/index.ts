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
    },
};
