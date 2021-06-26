import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { builtInActivityBar } from 'mo/model';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';

export const ExtendsActivityBar: IExtension = {
    activate(extensionCtx: IExtensionService) {
        const { data = [], contextMenu = [] } = builtInActivityBar();
        molecule.activityBar.addBar(data);
        molecule.activityBar.addContextMenu(contextMenu);

        molecule.activityBar.onChange((pre, cur) => {
            extensionCtx.executeCommand(CommandQuickSideBarViewAction.ID);
            if (cur !== pre) {
                molecule.activityBar.setActive(cur);
                molecule.sidebar.setActive(cur);
            }
        });
    },
};
