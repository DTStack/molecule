import * as React from 'react';
import Tree from 'mo/components/tree';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { FileType, FileTypes } from 'mo/model';
const stories = storiesOf('Tree', module);
stories.addDecorator(withKnobs);

const folder = FileTypes.folder as FileType;
const file = FileTypes.file as FileType;

stories.add('Basic Usage', () => {
    const treeData = [
        {
            id: 1,
            name: folder,
            fileType: folder,
            children: [
                {
                    id: 2,
                    name: 'abc',
                    fileType: folder,
                    children: [
                        {
                            id: 3,
                            name: 'test.txt',
                            fileType: file,
                            icon: 'symbol-file',
                        },
                    ],
                },
                {
                    id: 6,
                    name: 'xyz',
                    fileType: folder,
                    children: [
                        {
                            id: 7,
                            name: 'test.pdf',
                            fileType: file,
                            icon: 'file-pdf',
                        },
                    ],
                },
                {
                    id: 10,
                    name: 'file.yaml',
                    fileType: file,
                },
            ],
        },
    ];
    return (
        <div>
            <h2>简述</h2>
            <p>
                Tree
                多层次的结构列表。实现组件拖拽、右键面板等简单功能，可以通过
                renderTitle 适配 Tree 更多场景
            </p>

            <h3>使用示例 Tree</h3>
            <Tree
                data={treeData}
                draggable
                renderTitle={(node) => node.name || ''}
            />
        </div>
    );
});
