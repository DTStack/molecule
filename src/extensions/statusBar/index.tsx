import * as React from 'react';
import { IExtensionService, IStatusBarItem } from 'mo';
import { IExtension } from 'mo/model/extension';
import { statusBarService } from 'mo/services';
import { Icon } from 'mo/components/icon';

function init() {
    const problems: IStatusBarItem = {
        id: 'MoProblems',
        sortIndex: 1,
        name: 'Problems',
    };

    const notifications: IStatusBarItem = {
        id: 'MoNotification',
        sortIndex: 1,
        name: 'Notification',
        render: () => <Icon type="bell" />,
    };

    statusBarService.appendLeftItem(problems);
    statusBarService.appendRightItem(notifications);

    statusBarService.onClick(function (e, item) {
        console.log('statusBarService:', e, item, problems, notifications);
    });
}

export const ExtendStatusBar: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
