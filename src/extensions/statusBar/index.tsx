// import * as React from 'react';
import { IExtensionService } from 'mo';
import { IExtension } from 'mo/model/extension';
import { statusBarService } from 'mo/services';

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
