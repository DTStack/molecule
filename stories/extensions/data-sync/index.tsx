import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

const testItem = {
    id: '3333',
    icon: 'sync',
    name: 'Data Synchronization',
};

export const ExtendsDataSync: IExtension = {
    id: 'ExtendDataSync',
    name: 'Data Sync',
    activate() {
        molecule.activityBar.add(testItem);
        molecule.menuBar.append(
            {
                id: 'menu.dataSync',
                name: '新建数据同步',
            },
            'File'
        );
    },

    dispose() {
        molecule.activityBar.remove(testItem.id);
    },
};
