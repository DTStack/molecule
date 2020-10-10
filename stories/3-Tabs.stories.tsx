import * as React from 'react';

import Tabs, { ITab } from '@/components/tabs';

export default {
    title: 'Tabs',
};

const data: ITab[] = [
    {
        id: 1, name: 'test',
    },
];
export const Basic = () => (
    <Tabs data={data}/>
);
