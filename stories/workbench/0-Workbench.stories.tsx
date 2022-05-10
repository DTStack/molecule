import React from 'react';
import molecule, { create, Workbench } from 'mo';
import 'mo/style/mo.scss';
import { customExtensions } from '../extensions';
import '../demo.scss';

// this line will console.warn a tip
console.log('molecule:', molecule.editor.isOpened(1));

const moInstance = create({
    extensions: customExtensions,
    defaultLocale: 'en',
});

export const IDEDemo = () => moInstance.render(<Workbench />);

IDEDemo.story = {
    name: 'Workbench',
};

export default {
    title: 'Workbench',
    component: IDEDemo,
};
