import * as React from 'react';

import { MoleculeProvider } from '@/controller/molecule';
import { Workbench } from '@/workbench';
import * as themeMonokai from '@/extensions/theme-monokai/package.json';

import './demo.scss';

export const IDEDemo = () => (

    <MoleculeProvider
        extensions={[
            themeMonokai as any,
        ]}
        locales={[
        ]}
    >
        <Workbench />
    </MoleculeProvider>
);

IDEDemo.story = {
    name: 'VSCode',
};

export default {
    title: 'VSCode',
    component: IDEDemo,
};

