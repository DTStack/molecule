import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { builtInActivityBar } from 'mo/model';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';

const { data = [], contextMenu = [] } = builtInActivityBar();

export const ExtendsActivityBar: IExtension = {
    id: 'ExtendsActivityBar',
    name: 'Extend The Default ActivityBar',

    activate(extensionCtx: IExtensionService) {
        // Initial the activityBar UI state
        molecule.activityBar.add(data);
        molecule.activityBar.addContextMenu(contextMenu);

        molecule.activityBar.onChange((pre, cur) => {
            if (cur !== pre) {
                molecule.activityBar.setActive(cur);
                molecule.sidebar.setActive(cur);

                const { sidebar } = molecule.layout.getState();
                if (sidebar.hidden) {
                    extensionCtx.executeCommand(
                        CommandQuickSideBarViewAction.ID,
                        cur
                    );
                }
            } else {
                extensionCtx.executeCommand(
                    CommandQuickSideBarViewAction.ID,
                    cur
                );
            }
        });
    },

    dispose() {
        molecule.activityBar.remove(data.map((item) => item.id));
    },
};
