import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import { statusBarService } from 'mo/index';

function init() {
    statusBarService.onClick(function (e, item) {
        console.log('statusBarService:', e, item);
    });
}

export const ExtendStatusBar: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
