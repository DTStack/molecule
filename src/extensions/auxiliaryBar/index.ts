import { IExtension } from 'mo/types';

export const ExtendsAuxiliaryBar: IExtension = {
    id: 'ExtendsAuxiliaryBar',
    name: 'Extend The Default AuxiliaryBar',
    activate: function (molecule): void {
        molecule.auxiliaryBar.onTabClick((id) => {
            molecule.auxiliaryBar.toggle(id);
            const tab = molecule.auxiliaryBar.getCurrentBar();
            molecule.layout.setAuxiliaryBar(!!tab);
        });
    },
};
