import {
    toggleActivityBarHidden,
    toggleNextActive,
    updateContextMenuIcon,
} from '@dtinsight/molecule/esm/extensions/utils';
import { IExtension } from '@dtinsight/molecule/esm/types';

import TestPane from '../components/testPane';

export const TestExtension: IExtension = {
    id: 'testPane',
    name: 'testPane',
    activate(molecule) {
        molecule.activityBar.add({
            id: 'testPane',
            name: 'testPane',
            alignment: 'top',
            sortIndex: 2,
            icon: 'beaker',
        });
        molecule.sidebar.add({
            id: 'testPane',
            title: 'testPane',
            render: () => <TestPane context={molecule} />,
        });

        molecule.activityBar.onContextMenuClick((item) => {
            if (item.id === 'testPane') {
                toggleNextActive(molecule, item);

                const nextHidden = toggleActivityBarHidden(molecule, item);
                updateContextMenuIcon(molecule, 'activityBar', item, nextHidden);
            }
        });

        molecule.panel.onTabContextMenu((item) => {
            if (typeof item.id === 'string' && item.id.startsWith('Panel-')) {
                const panelItem = molecule.panel.getPanel(item.id);
                molecule.panel.update({
                    id: item.id,
                    hidden: !panelItem?.hidden,
                });
            }
        });
    },
};
