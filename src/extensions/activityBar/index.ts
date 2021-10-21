import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { CommandQuickSideBarViewAction } from 'mo/monaco/quickToggleSideBarAction';

export const ExtendsActivityBar: IExtension = {
    id: 'ExtendsActivityBar',
    name: 'Extend The Default ActivityBar',
    activate(extensionCtx: IExtensionService) {
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

    dispose() {},
};
