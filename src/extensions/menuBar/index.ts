import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { builtInMenuBarData } from 'mo/model';

export const ExtendsMenuBar: IExtension = {
    activate(extensionCtx: IExtensionService) {
        molecule.menuBar.initMenus(builtInMenuBarData());
    },
};
