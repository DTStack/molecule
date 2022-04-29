import React from 'react';
import molecule from '@dtinsight/molecule';

const { Collapse } = molecule.component;

export default {
    title: 'Collapse',
};
const editorPanel = {
    id: 'editors',
    name: 'OPEN EDITORS',
    toolbar: [
        {
            id: 'toggle',
            title: 'Toggle Vertical',
            disabled: true,
            icon: 'editor-layout',
        },
        {
            id: 'save',
            title: 'Save All',
            disabled: true,
            icon: 'save-all',
        },
        {
            id: 'close',
            title: 'Close All Editors',
            icon: 'close-all',
        },
    ],
    renderPanel: () => {
        return <span>editors</span>;
    },
};
const sampleFolderPanel = {
    id: 'sample_folder',
    name: 'Sample Folder',
    toolbar: [
        {
            id: 'new_file',
            title: 'New File',
            icon: 'new-file',
        },
        {
            id: 'new_folder',
            title: 'New Folder',
            icon: 'new-folder',
        },
        {
            id: 'refresh',
            title: 'Refresh Explorer',
            icon: 'refresh',
        },
        {
            id: 'collapse',
            title: 'Collapse Folders in Explorer',
            icon: 'collapse-all',
        },
    ],
    renderPanel: () => {
        return <span>"hello i'm tree~~~"</span>;
    },
};

export const Basic = () => {
    return (
        <div>
            <h2>简述</h2>
            <p>Collapse 可以折叠/展开的内容区域。</p>
            <h3>使用示例 尝试点击下方面板看看～</h3>
            <Collapse data={[editorPanel, sampleFolderPanel]} />
        </div>
    );
};
