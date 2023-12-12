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

        molecule.panel.onToolbarClick((item) => {
            const { PANEL_TOOLBAR_CLOSE, PANEL_TOOLBAR_MAXIMIZE } =
                molecule.builtin.getState().constants;
            switch (item.id) {
                case PANEL_TOOLBAR_CLOSE: {
                    molecule.layout.setPanelVisibility(true);
                    break;
                }
                case PANEL_TOOLBAR_MAXIMIZE: {
                    molecule.layout.setPanelMaximized((prev) => !prev);
                    const next = molecule.layout.getState().panel.panelMaximized;
                    molecule.panel.updateToolbar(
                        next
                            ? molecule.builtin.getModules().PANEL_RESTORE
                            : molecule.builtin.getModules().PANEL_MAXIMIZE
                    );
                    break;
                }
                default:
                    break;
            }
        });

        molecule.panel.onTabContextMenu((item) => {
            const { MENUBAR_ITEM_PANEL, PANEL_ITEM_OUTPUT } = molecule.builtin.getState().constants;
            switch (item.id) {
                case MENUBAR_ITEM_PANEL: {
                    molecule.layout.setPanelVisibility(true);
                    break;
                }
                case PANEL_ITEM_OUTPUT: {
                    const panelItem = molecule.panel.getPanel(PANEL_ITEM_OUTPUT);
                    const hidden = !panelItem?.hidden;
                    molecule.panel.update({
                        id: item.id,
                        hidden,
                    });
                    molecule.contextMenu.updateItem('panel', {
                        id: PANEL_ITEM_OUTPUT,
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
