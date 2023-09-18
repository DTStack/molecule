import { IExtension } from 'mo/types';
import { toggleNextIcon } from 'mo/utils';

export const ExtendsStatusBar: IExtension = {
    id: 'ExtendsStatusBar',
    name: 'Extend The Default StatusBar',
    activate: function (molecule): void {
        molecule.statusBar.onContextMenu((item) => {
            const { STATUS_BAR_HIDE_ID, STATUS_EDITOR_INFO_ID } =
                molecule.builtin.getState().constants;
            switch (item.id) {
                case STATUS_BAR_HIDE_ID: {
                    molecule.layout.setStatusBarVisibility(true);
                    break;
                }
                case STATUS_EDITOR_INFO_ID: {
                    const statusItem = molecule.statusBar.get(STATUS_EDITOR_INFO_ID);
                    const hidden = !statusItem?.hidden;
                    molecule.statusBar.update({
                        id: STATUS_EDITOR_INFO_ID,
                        hidden,
                    });
                    molecule.contextMenu.updateItem('statusBar', {
                        id: STATUS_BAR_HIDE_ID,
                        icon: toggleNextIcon(item.icon, hidden),
                    });
                    break;
                }

                default:
                    break;
            }
        });
    },
};
