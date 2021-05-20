import { IExtensionService } from 'mo/services';
import { IExtension } from 'mo/model/extension';

function init() {}

export const ExtendEditor: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
