import * as React from 'react';

import Collapse from 'mo/components/collapse';

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
            iconName: 'codicon-editor-layout',
        },
        {
            id: 'save',
            title: 'Save All',
            disabled: true,
            iconName: 'codicon-save-all',
        },
        {
            id: 'close',
            title: 'Close All Editors',
            iconName: 'codicon-close-all',
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
            iconName: 'codicon-new-file',
        },
        {
            id: 'new_folder',
            title: 'New Folder',
            iconName: 'codicon-new-folder',
        },
        {
            id: 'refresh',
            title: 'Refresh Explorer',
            iconName: 'codicon-refresh',
        },
        {
            id: 'collapse',
            title: 'Collapse Folders in Explorer',
            iconName: 'codicon-collapse-all',
        },
    ],
    renderPanel: () => {
        return "hello i'm tree~~~";
    },
};

export const Basic = () => {
    return <div>
        <h2>简述</h2>
        <p>
            Collapse
            可以折叠/展开的内容区域。
        </p>
        <h3>使用示例 尝试点击下方面板看看～</h3>
        <Collapse data={[editorPanel, sampleFolderPanel]} />;
    </div>
}