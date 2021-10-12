import React from 'react';
import { MoleculeProvider, Workbench } from 'mo';
import 'mo/style/mo.scss';
import { customExtensions } from '../extensions';
import '../demo.scss';

export const IDEDemo = () => (
    <MoleculeProvider extensions={customExtensions} defaultLocale="zh-CN">
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
