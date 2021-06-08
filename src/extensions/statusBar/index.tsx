import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';

function init() {
    molecule.statusBar.onClick(function (e, item) {
        console.log('statusBarService:', e, item);
    });
}

export const ExtendsStatusBar: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
