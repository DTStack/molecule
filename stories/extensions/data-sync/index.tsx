import React from 'react';
import molecule from 'mo';
import { IExtension } from 'mo/model/extension';

import { QuickOpenAction } from '../actions/quickOpen';
import { Button } from 'mo/components';

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

        const action = molecule.extension.registerAction(QuickOpenAction);

        molecule.sidebar.add({
            id: testItem.id,
            render() {
                return (
                    <div>
                        <h1>Data Sync SidePane</h1>
                        <Button
                            onClick={() => {
                                action.dispose();
                            }}
                        >
                            Dispose QuickOpen
                        </Button>
                    </div>
                );
            },
        });
    },

    dispose() {
        molecule.activityBar.remove(testItem.id);
    },
};
