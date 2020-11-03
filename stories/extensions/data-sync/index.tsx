import { activityBarService } from 'mo';
import { IExtension } from 'mo/model/extension';

export const ExtendDataSync: IExtension = {
    activate() {
        const newItem = {
            id: '3333',
            iconName: 'codicon-sync',
            name: '数据同步',
        };
        console.log('extend a new activity bar item:', newItem);
        activityBarService.push(newItem);
    },
};
