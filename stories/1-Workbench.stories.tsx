import * as React from 'react';

import { MoleculeProvider } from '@/provider/molecule';
import { Workbench } from '@/workbench';
import { customExtensions } from './extensions';

// import * as UIExt from './extensions/data-sync/package.json';

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

