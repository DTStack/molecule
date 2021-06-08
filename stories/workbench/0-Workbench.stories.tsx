import * as React from 'react';
import { MoleculeProvider, Workbench } from 'mo';
import 'mo/style/mo.scss';
import { customExtensions } from '../extensions';
import '../demo.scss';

const locale = require('../extensions/locale/jp.json');

export const IDEDemo = () => (
    <MoleculeProvider
        extensions={customExtensions}
        locales={[locale]}
        locale="zh-CN"
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
