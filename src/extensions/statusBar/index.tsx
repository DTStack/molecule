// import * as React from 'react';
import { IExtension } from 'mo/model/extension';
import { statusBarService, IExtensionService } from 'mo';

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
