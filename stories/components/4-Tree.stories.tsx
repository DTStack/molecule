import React from 'react';
import molecule from '@dtinsight/molecule';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
const stories = storiesOf('Tree', module);
stories.addDecorator(withKnobs);

const { TreeView: Tree } = molecule.component;

const folder = molecule.model.FileTypes.Folder as molecule.model.FileType;
const file = molecule.model.FileTypes.File as molecule.model.FileType;

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
