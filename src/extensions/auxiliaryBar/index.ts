import React from 'react';
import { IExtension } from 'mo/types';

export const ExtendsAuxiliaryBar: IExtension = {
    id: 'ExtendsAuxiliaryBar',
    name: 'Extend The Default AuxiliaryBar',
    activate: function (molecule): void {
        const { AUXILIARYBAR_ITEM_TOOL } = molecule.builtin.getModules();
        if (AUXILIARYBAR_ITEM_TOOL) {
            molecule.auxiliaryBar.add({
                ...AUXILIARYBAR_ITEM_TOOL,
                render() {
                    return React.createElement('pre', { style: { margin: 0 } }, " Default AuxiliaryBar Content");
                },
            });
        }
        molecule.auxiliaryBar.onTabClick((id) => {
            molecule.auxiliaryBar.toggle(id);
            const tab = molecule.auxiliaryBar.getCurrentBar();
            molecule.layout.setAuxiliaryBar(!!tab);
        });
    },
};
