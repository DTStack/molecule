import { IExtension } from 'mo/types';

export const ExtendsAuxiliaryBar: IExtension = {
    id: 'ExtendsAuxiliaryBar',
    name: 'Extend The Default AuxiliaryBar',
    activate: function (molecule): void {
        molecule.auxiliaryBar.onTabClick((id) => {
            molecule.auxiliaryBar.toggle(id);
            const currentId = molecule.auxiliaryBar.getCurrent();
            if (id !== currentId) {
                molecule.layout.recordSplitPanePos();
                const splitPanePos = molecule.layout.getSplitPanePos();
                molecule.layout.setPaneSize([splitPanePos[0], 'auto', 25]);
            } else {
                molecule.layout.backSplitPanePos()
            }
        });
    },
};
