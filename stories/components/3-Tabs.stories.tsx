import * as React from 'react';
import { useState } from 'react';
import Tabs from 'mo/components/tabs';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
const stories = storiesOf('Tab', module);
stories.addDecorator(withKnobs);

stories.add('Basic Usage', () => {
    const onMoveTab = (tabs) => setTabs(tabs);
    const data = [
        {
            modified: true,
            id: 1,
            name: 'editor.js',
            value: 'hello javascript',
        },
        {
            activeTab: 1,
            modified: false,
            id: 2,
            name: 'editor.css',
            value: 'hello css',
        },
        {
            modified: false,
            id: 3,
            name: 'editor.python',
            value: 'hello python',
        },
        {
            modified: true,
            id: 1,
            name: 'editor.md',
            value: 'hello markdown',
        },
    ];
    const [tabs, setTabs] = useState(data);
    return (
        <div>
            <h2>简述</h2>
            <p>Tab 提供组件多tab切换；拖拽</p>
            <div>
                <h3>使用示例 1 - 基本使用</h3>
                <div style={{ height: 35 }}>
                    <Tabs
                        data={tabs}
                        onMoveTab={onMoveTab}
                        onTabChange={(data) => console.log(data)}
                    />
                </div>
            </div>
        </div>
    );
});
