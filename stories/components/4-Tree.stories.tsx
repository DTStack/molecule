import * as React from 'react';
import { useState, useCallback } from 'react';
import { FileType, FileTypes } from 'mo/components/tree';
import FolderTree from 'mo/extensions/explore/folderTree';
import SearchTree from 'mo/extensions/search/searchTree';
import Input from 'mo/components/input';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
const stories = storiesOf('Tree', module);
stories.addDecorator(withKnobs);

const folder = FileTypes.FOLDER as FileType;
const file = FileTypes.FILE as FileType;

stories.add('Basic Usage', () => {
    const folderData = [
        {
            id: '1',
            name: folder,
            fileType: folder,
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
                    fileType: folder,
                    children: [
                        {
                            id: '3',
                            name: 'test.txt',
                            fileType: file,
                            icon: 'symbol-file',
                        },
                    ],
                },
                {
                    id: '6',
                    name: 'xyz',
                    fileType: folder,
                    children: [
                        {
                            id: '7',
                            name: 'test.pdf',
                            fileType: file,
                            icon: 'file-pdf',
                        },
                    ],
                },
                {
                    id: '10',
                    name: 'file.yaml',
                    fileType: file,
                },
            ],
        },
    ];
    // 按一级目录展开
    const searchData = [
        {
            id: '1',
            name: 'large.ts',
            fileType: folder,
            location: '~/large.ts',
            children: [
                {
                    id: '6',
                    name: 'test',
                    fileType: file,
                },
                {
                    id: '10',
                    name: 'test_search',
                    fileType: file,
                },
            ],
        },
        {
            id: '2',
            name: 'abc',
            fileType: folder,
            children: [
                {
                    id: '99',
                    name: 'test_abc',
                    fileType: file,
                },
            ],
        },
    ];
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = useCallback(
        (e) => setInputValue(e.target.value),
        [inputValue]
    );
    return (
        <div>
            <h2>简述</h2>
            <p>Tree 多层次的结构列表。实现组件拖拽、右键面板等简单功能</p>
            <h3>Tree component.</h3>

            <h3>使用示例 1 - Folder Tree</h3>
            <FolderTree prefixCls="rc-tree" data={folderData} />

            <h3>使用示例 2 - Search Tree</h3>
            <Input placeholder="Search" onChange={handleInputChange} />
            <SearchTree
                prefixCls="rc-tree"
                defaultExpandAll
                autoExpandParent
                searchValue={inputValue}
                data={searchData}
            />
        </div>
    );
});
