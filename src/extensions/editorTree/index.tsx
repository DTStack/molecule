import { IExtension } from 'mo/types';

export const ExtendsEditorTree: IExtension = {
    id: 'ExtendsEditorTree',
    name: 'Extend The Default Editor Tree',
    activate: function (molecule): void {
        molecule.editorTree.onSelect((tabId, groupId) => {
            molecule.editor.setActive(tabId, groupId);
        });
    },
};
