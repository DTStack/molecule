import * as React from 'react';
import { useState } from 'react';
import Tree from 'mo/components/tree';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
const stories = storiesOf('Tree', module);
stories.addDecorator(withKnobs);

stories.add('Basic Usage', () => {
    const data = [
        {
            id: '1',
            title: 'folder',
            name: 'folder',
            key: 'folder',
            type: 'folder',
            contextMenu: [
                {
                    id: 'custom',
                    name: 'Custom ContextMenu',
                    onClick: () => { console.log("i'm custom contextMenu") }
                },
            ],
            children: [
                {
                    id: '2',
                    title: 'abccccccccc',
                    name: 'abccccccccc',
                    key: 'abccccccccc',
                    type: 'folder',
                    children: [
                        {
                            id: '3',
                            title: 'test.txt',
                            name: 'test.txt',
                            key: 'test.txt',
                            type: 'file',
                            icon: 'symbol-file'
                        },
                    ],
                },
                {
                    id: '6',
                    title: 'xyz',
                    name: 'xyz',
                    key: 'xyz',
                    type: 'folder',
                    children: [
                        {
                            id: '7',
                            title: 'test.pdf',
                            name: 'test.pdf',
                            key: 'test.pdf',
                            type: 'file',
                            icon: 'file-pdf',
                        },
                    ],
                },
                {
                    id: '10',
                    title: 'file.yaml',
                    name: 'file.yaml',
                    key: 'file.yaml',
                    type: 'file',
                },
            ],
        },
    ];

    const [treeData, setTreeData] = useState<any>(data);
    return (
        <div>
            <Tree
                prefixCls='rc-tree'
                data={treeData}
            />
        </div>
    );
});
