import molecule from 'mo';
import { COLLAPSE_FOLDER_COMMAND_ID, SAMPLE_FOLDER_PANEL_ID } from 'mo/model';
import { IExtension } from 'mo/model/extension';

export const ExtendsExplorer: IExtension = {
    activate() {
        molecule.explorer.onRemovePanel((panel) => {
            molecule.explorer.removePanel(panel.id);
        });

        // Implements to collapse the expanded tree nodes
        molecule.explorer.onPanelToolbarClick((panel, actionId) => {
            if (
                panel.id === SAMPLE_FOLDER_PANEL_ID &&
                actionId === COLLAPSE_FOLDER_COMMAND_ID
            ) {
                molecule.folderTree.setExpandedKeys([]);
            }
        });
    },
};
