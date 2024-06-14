import { IExtension } from 'mo/types';

export const ExtendsAuxiliaryBar: IExtension = {
    id: 'ExtendsAuxiliaryBar',
    name: 'Extend The Default AuxiliaryBar',
    activate: function (molecule): void {
        molecule.auxiliaryBar.onTabClick((id) => {
            molecule.auxiliaryBar.toggle(id);
            const currentId = molecule.auxiliaryBar.getCurrent();
            if (id !== currentId) {
                molecule.layout.setPaneSize([300, 'auto', 25]);
            } else {
                molecule.layout.setPaneSize([300, 'auto', 300]);
            }
        });
    },
};
