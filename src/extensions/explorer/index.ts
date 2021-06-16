import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

export const ExtendsExplorer: IExtension = {
    activate() {
        molecule.explorer.onDeletePanel((panel) => {
            molecule.explorer.deletePanel(panel.id);
        });
    },
};
