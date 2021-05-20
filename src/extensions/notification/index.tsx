import React from 'react';
import { IExtension } from 'mo/model/extension';
import { IExtensionService } from 'mo/services';
import molecule from 'mo';
import { Button } from 'mo/components/button';
function init() {
    molecule.notification.addNotifications([
        {
            id: 1,
            value: '测试消息模块1',
            status: 1,
            render: (item) => {
                return (
                    <div>
                        <div>{item.value}</div>
                        <Button>测试</Button>
                    </div>
                );
            },
        },
        {
            id: 2,
            value: '测试消息模块2',
            status: 1,
        },
        {
            id: 3,
            value: '测试消息模块3',
            status: 1,
        },
    ]);
}

export const ExtendNotification: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
