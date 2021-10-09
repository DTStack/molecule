import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { builtInMenuBarData } from 'mo/model';

export const ExtendsMenuBar: IExtension = {
    id: 'ExtendsMenuBar',
    name: 'Extends MenuBar',
    activate(extensionCtx: IExtensionService) {
        molecule.menuBar.setMenus(builtInMenuBarData());
    },
    dispose() {},
};
