import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { builtInActivityBar } from 'mo/model';

export const ExtendsActivityBar: IExtension = {
    activate(extensionCtx: IExtensionService) {
        const { data = [], contextMenu = [] } = builtInActivityBar();
        molecule.activityBar.addBar(data);
        molecule.activityBar.addContextMenu(contextMenu);
    },
};
