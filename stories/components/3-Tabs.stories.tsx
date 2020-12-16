import * as React from 'react';
import { useState } from 'react';
import Tabs from 'mo/components/tabs';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
const stories = storiesOf('Tab', module);
stories.addDecorator(withKnobs);

stories.add('Basic Usage', () => {
    const userSetting = [
        {
            key: '1',
            label: 'User',
            renderPanel: 'this is user'
        },
        {
            key: '2',
            label: 'workSpace',
            renderPanel: 'this is a workSpace'
        },
    ];
    const tabs = [
        {
            key: '1',
            label: 'Tab1',
            renderPanel: 'this is tab1'
        },
        {
            key: '2',
            label: 'Tab2',
            renderPanel: 'this is a tab2'
        },
    ];

    const [tabs1, setTabs1] = useState(userSetting);
    const [tabs2, setTabs2] = useState(tabs)

    const onSelectTab = (e, tabKey) => {
        console.log(tabKey)
    }
    const onMoveTab = data => setTabs1(data)
 
    const onMoveTab1 = data => setTabs2(data)
    return (
        <div>
            <h2>简述</h2>
            <p>Tab 提供组件多tab切换；拖拽</p>
            <div>
                <h3>使用示例 1 - 基本使用</h3>
                <div style={{ height: 300 }}>
                    <Tabs
                        data={tabs1}
                        activeTab={'1'}
                        onMoveTab={onMoveTab}
                        onSelectTab={onSelectTab}
                        onTabChange={(data) => console.log(data)}
                    />
                </div>
                <h3>使用示例2 - 带关闭状态的tab</h3>
                <div style={{ height: 400 }}>
                    <Tabs
                        data={tabs2}
                        activeTab={'2'}
                        onMoveTab={onMoveTab1}
                        onSelectTab={onSelectTab}
                        onTabChange={(data) => console.log(data)}
                        closable={true}
                    />
                </div>
            </div>
        </div>
    );
});
