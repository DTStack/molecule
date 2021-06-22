import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { builtInActivityBar } from 'mo/model';

export const ExtendsActivityBar: IExtension = {
    activate(extensionCtx: IExtensionService) {
        const { data = [], contextMenu = [] } = builtInActivityBar();
        molecule.activityBar.addBar(data);
        molecule.activityBar.addContextMenu(contextMenu);

        molecule.activityBar.onChange((pre, cur) => {
            if (pre === cur) {
                molecule.activityBar.setActive(undefined);
                molecule.layout.setSideBarHidden();
            } else {
                molecule.activityBar.setActive(cur);
                molecule.sidebar.setActive(cur);
                const { sideBar } = molecule.layout.getState();
                if (sideBar.hidden) {
                    molecule.layout.setSideBarHidden();
                }
            }
        });
    },
};
