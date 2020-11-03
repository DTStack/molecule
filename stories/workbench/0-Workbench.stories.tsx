import * as React from 'react';

import { MoleculeProvider, Workbench } from 'mo/index';
import { customExtensions } from '../extensions';
import '../demo.scss';

export const IDEDemo = () => (
    <MoleculeProvider
        extensions={customExtensions}
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

