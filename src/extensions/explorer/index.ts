import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

export const ExtendsExplorer: IExtension = {
    activate() {
        molecule.explorer.onRemovePanel((panel) => {
            molecule.explorer.removePanel(panel.id);
        });
    },
};
