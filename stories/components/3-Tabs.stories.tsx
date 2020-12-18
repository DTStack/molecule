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
            renderPanel: 'this is user',
        },
        {
            key: '2',
            label: 'workSpace',
            renderPanel: 'this is a workSpace',
        },
    ];
    const tabArr = [
        {
            key: '1',
            label: 'Tab1',
            renderPanel: 'this is tab1',
        },
        {
            key: '2',
            label: 'Tab2',
            renderPanel: 'this is a tab2',
        },
        {
            key: '3',
            label: 'Tab3',
            renderPanel: 'this is a tab3',
        },
        {
            key: '4',
            label: 'Tab4',
            renderPanel: 'this is a tab4',
        },
    ];

    const [tabs, setTabs] = useState(userSetting);
    const [tabs1, setTabs1] = useState(tabArr);
    const [activeTab, setActiveTab] = useState('1');
    const [activeTab1, setActiveTab1] = useState('2');

    const onSelectTab = (tabKey) => {
        setActiveTab(tabKey);
    };

    const onSelectTab1 = (tabKey) => {
        setActiveTab1(tabKey);
    };
    const onMoveTab = (data) => {
        setTabs(data);
    };

    const onMoveTab1 = (data) => setTabs1(data);

    const onCloseTab1 = (targetKey) => {
        let newActiveKey = activeTab;
        let lastIndex;
        tabs1.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = tabs1.filter((pane) => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0]?.key;
            }
        }
        setTabs1(newPanes);
        setActiveTab1(newActiveKey);
    };
    return (
        <div>
            <h2>简述</h2>
            <p>Tab 提供组件多tab切换；拖拽</p>
            <div>
                <h3>使用示例 1 - 基本使用</h3>
                <div style={{ height: 300 }}>
                    <Tabs
                        data={tabs}
                        activeTab={activeTab}
                        onMoveTab={onMoveTab}
                        onSelectTab={onSelectTab}
                    />
                </div>
                <h3>使用示例2 - 带关闭状态的tab</h3>
                <div style={{ height: 300 }}>
                    <Tabs
                        type="card"
                        data={tabs1}
                        activeTab={activeTab1}
                        onMoveTab={onMoveTab1}
                        onSelectTab={onSelectTab1}
                        onCloseTab={onCloseTab1}
                    />
                </div>
            </div>
        </div>
    );
});
