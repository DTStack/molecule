import { IExtension } from '@dtinsight/molecule/esm/types';

import TestPane from '../components/testPane';

export const TestExtension: IExtension = {
    id: 'testPane',
    name: 'testPane',
    activate(molecule) {
        molecule.activityBar.add({
            id: 'testPane',
            name: 'testPane',
            alignment: 'top',
            sortIndex: 2,
            icon: 'beaker',
        });
        molecule.sidebar.add({
            id: 'testPane',
            title: 'testPane',
            render: () => <TestPane context={molecule} />,
        });
    },
};
