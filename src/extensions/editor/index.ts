import type { IExtension } from 'mo/types';
import type { editor } from 'monaco-editor';

export const ExtendsEditor: IExtension = {
    id: 'ExtendsEditor',
    name: 'Extend The Default Editor',
    activate: function (molecule): void {
        molecule.editor.onFocus(updateCursorPosition);
        molecule.editor.onCursorSelection(updateCursorPosition);

        /**
         * Updates the cursor position in the given code editor instance.
         *
         * @param {editor.IStandaloneCodeEditor} instance - The code editor instance.
         */
        function updateCursorPosition(instance: editor.IStandaloneCodeEditor) {
            const currentTab = molecule.editor.getCurrent();
            if (!currentTab?.model) return;
            if (currentTab.model === instance.getModel()) {
                const position = instance.getPosition();
                molecule.statusBar.update({
                    id: molecule.builtin.getState().constants.STATUS_EDITOR_INFO_ID,
                    data: {
                        ln: position?.lineNumber,
                        col: position?.column,
                    },
                });
            }
        }
    },
};
