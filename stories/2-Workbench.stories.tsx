import * as React from 'react';
// import {action} from '@storybook/addon-actions';

import { Workbench } from '../src';

export default {
    title: 'Workbench',
    component: Workbench,
};

export const Demo = () => <Workbench />;

Demo.story = {
    name: 'show Workbench',
};
