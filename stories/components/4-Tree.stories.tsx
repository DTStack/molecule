import * as React from 'react';
import { useState } from 'react';
import Tree, { ITreeNodeItem, FileTypes, FileType } from 'mo/components/tree';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
const stories = storiesOf('Tree', module);
stories.addDecorator(withKnobs);

const folder = FileTypes.FOLDER as FileType;
const file = FileTypes.FILE as FileType;

stories.add('Basic Usage', () => {
    const data = [
        {
            id: '1',
            name: folder,
            type: folder,
            contextMenu: [
                {
                    id: 'custom',
                    name: 'Custom ContextMenu',
                    onClick: () => {
                        console.log("i'm custom contextMenu");
                    },
                },
            ],
            children: [
                {
                    id: '2',
                    name: 'abc',
                    type: folder,
                    children: [
                        {
                            id: '3',
                            name: 'test.txt',
                            type: file,
                            icon: 'symbol-file',
                        },
                    ],
                },
                {
                    id: '6',
                    name: 'xyz',
                    type: folder,
                    children: [
                        {
                            id: '7',
                            name: 'test.pdf',
                            type: file,
                            icon: 'file-pdf',
                        },
                    ],
                },
                {
                    id: '10',
                    name: 'file.yaml',
                    type: file,
                },
            ],
        },
    ];

    const [treeData, setTreeData] = useState<ITreeNodeItem[]>(data);
    return (
        <div>
            <h2>简述</h2>
            <p>Tree 多层次的结构列表。实现组件拖拽、右键面板等简单功能</p>
            <h3>使用示例 尝试点击面板或者右键看看～</h3>
            <Tree prefixCls="rc-tree" data={treeData} />
        </div>
    );
});
