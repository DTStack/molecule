import { IExtension } from 'mo/types';
import { toggleNextIcon } from 'mo/utils';

export const ExtendsSidebar: IExtension = {
    id: 'ExtendsSidebar',
    name: 'Extend The Default Sidebar',
    activate: function (molecule): void {
        molecule.sidebar.onToolbarClick((item, groupId) => {
            const { SIDEBAR_ITEM_EXPLORER: EXPLORER_ACTIVITY_ITEM, EXPLORER_ITEM_OPEN_EDITOR: EDITOR_PANEL_ID, EXPLORER_ITEM_WORKSPACE: SAMPLE_FOLDER_PANEL_ID } =
                molecule.builtin.getState().constants;
            if (groupId === EXPLORER_ACTIVITY_ITEM) {
                switch (item.id) {
                    case EDITOR_PANEL_ID:
                    case SAMPLE_FOLDER_PANEL_ID: {
                        // Update Toolbar's icon
                        molecule.sidebar.updateToolbar(groupId, {
                            id: item.id,
                            icon: toggleNextIcon(
                                molecule.sidebar.getToolbar(groupId, item.id)?.icon
                            ),
                        });

                        // Update Explorer's visibility
                        molecule.explorer.updatePanel({
                            id: item.id,
                            hidden: !molecule.explorer.getPanel(item.id)?.hidden,
                        });
                        break;
                    }

                    default:
                        break;
                }
            }
        });
    },
};
