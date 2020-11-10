import * as React from 'react';

import Tree, { ITree } from 'mo/components/tree';

export default {
    title: 'Tree',
};

const data: ITree = [
    {
        id: 1,
        name: 'test',
    },
];
export const Basic = () => <Tree data={data} />;
