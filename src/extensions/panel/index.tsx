import { IExtension } from 'mo/types';
import { toggleNextIcon } from 'mo/utils';

export const ExtendsPanel: IExtension = {
    id: 'ExtendsPanel',
    name: 'Extend The Default Panel',
    activate: function (molecule): void {
        molecule.panel.onTabChange((key) => {
            molecule.panel.setActive(key);
        });

        molecule.panel.onTabClose((key) => {
            const { current, data } = molecule.panel.getState();
            molecule.panel.remove(key);
            if (current === key) {
                const idx = data.findIndex((i) => i.id === key);
                const nextKey = data[idx + 1]?.id ?? data[idx - 1]?.id;
                molecule.panel.setActive(nextKey);
            }
        });

        molecule.panel.onTabContextMenu((item) => {
            const { MENU_VIEW_PANEL, PANEL_OUTPUT } = molecule.builtin.getState().constants;
            switch (item.id) {
                case MENU_VIEW_PANEL: {
                    molecule.layout.setPanelVisibility(true);
                    break;
                }
                case PANEL_OUTPUT: {
                    const panelItem = molecule.panel.getPanel(PANEL_OUTPUT);
                    const hidden = !panelItem?.hidden;
                    molecule.panel.update({
                        id: item.id,
                        hidden,
                    });
                    molecule.contextMenu.updateItem('panel', {
                        id: PANEL_OUTPUT,
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
