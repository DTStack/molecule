import * as React from 'react';

import { MoleculeProvider } from 'mo/provider/molecule';
import { Workbench } from 'mo/workbench';
import { customExtensions } from './extensions';

import './demo.scss';

export const IDEDemo = () => (
    <MoleculeProvider
        extensionEntry={customExtensions}
        locales={[
        ]}
    >
        <Workbench />
    </MoleculeProvider>
);

IDEDemo.story = {
    name: 'Workbench',
};

export default {
    title: 'Workbench',
    component: IDEDemo,
};

