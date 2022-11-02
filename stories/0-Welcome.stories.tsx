import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
    title: 'Welcome',
    component: Welcome,
} as any;

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
    name: 'to Storybook',
};
