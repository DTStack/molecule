import React from 'react';
import { MoleculeProvider, Workbench } from '@dtinsight/molecule';
import { customExtensions } from '../extensions';
import '@dtinsight/molecule/mo.css';
import '../demo.scss';

export const IDEDemo = () => (
    <MoleculeProvider extensions={customExtensions} defaultLocale="en">
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
