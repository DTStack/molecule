import React from 'react';
import molecule, { create, Workbench } from 'mo';
import 'mo/style/mo.scss';
import { customExtensions } from '../extensions';
import '../demo.scss';

// this line will console.warn a tip
console.log('molecule:', molecule.editor.isOpened(1));

const moInstance = create({
    extensions: customExtensions,
    defaultLocale: 'japanese',
});

moInstance.onBeforeInit(() => {
    molecule.builtin.inactiveModule('activityBarData');
});

export const IDEDemo = () => moInstance.render(<Workbench />);

IDEDemo.story = {
    name: 'Workbench',
};

if (module.hot) {
    module.hot.accept();
}

export default {
    title: 'Workbench',
    component: IDEDemo,
};
