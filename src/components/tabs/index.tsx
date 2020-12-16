import * as React from 'react';
import { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import { prefixClaName, getBEMElement, getBEMModifier, classNames } from 'mo/common/className';
import { Icon } from 'mo/components/icon';

import { Tab, tabItemClassName } from './Tab';
import TabButton from './tabButton';

import './style.scss';
export interface ITab {
    key?: string;
    name?: string;
    modified?: boolean;
    value?: string;
    language?: string | undefined;
    tip?: string | React.ReactNode;
    label?: React.ReactNode;
    renderPanel?: React.ReactNode;
}
export interface ITabsProps {
    closable?: boolean;
    data: ITab[];
    activeTab?: string;
    type?: 'line' | 'editable-card';
    onCloseTab?: (item?: ITab) => void ;
    onMoveTab?: (tabs: ITab[]) => void;
    onSelectTab?: (event: React.MouseEvent, key?: string) => void;
    onTabChange: (index: string) => void;
}

export const tabsClassName = prefixClaName('tabs')
export const tabsHeader = getBEMElement(tabsClassName, 'header')
export const tabsContent = getBEMElement(tabsClassName, 'content')
export const tabsContentItem = getBEMElement(tabsContent, 'item')

const Tabs = (props: ITabsProps) => {
    const { closable, data, activeTab: newActiveTab, type = 'line', onCloseTab, onSelectTab } = props;
    const [activeTab, setActiveTab] = useState<string | number | void>(newActiveTab)
    const onMoveTab = useCallback(
        (dragIndex, hoverIndex) => {
            const dragTab = data[dragIndex];
            props.onMoveTab?.(
                update(data, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragTab],
                    ],
                })
            );
        },
        [data]
    );

    const onTabClick = (event: React.MouseEvent, key?: string) => {
        setActiveTab(key)
        onSelectTab?.(event, key);
    };

    const onTabClose = (item: ITab) => {
        let activekey = (data.filter(tab => item.key === tab.key))?.[0]?.key
        setActiveTab(activekey)
        onCloseTab?.(item)
    };

    const renderTabBar = (tab) => (
        <TabButton
        key={tab.key}
        name={tab.name}
        modified={tab.modified}
        active={activeTab === tab.key}
        onClose={() => onCloseTab?.(tab)}
        className={'tab-button'}
    />)
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={classNames(tabsClassName, getBEMModifier(tabsClassName, `${type}`))}>
                <div className={tabsHeader}>
                    {data?.map((tab: ITab, index: number) => {
                        return (
                            <Tab  
                                onMoveTab={onMoveTab}
                                onTabChange={onTabClick}
                                index={index}
                                propsKey={tab.key}
                                key={tab.key}
                                activeTab={activeTab}
                                title={tab.tip}
                            >
                                {type === 'editable-card' ? renderTabBar?.(tab) : tab.label}
                                {closable && (
                                    <div className={getBEMModifier(tabItemClassName, 'close')} onClick={(e) => {
                                        e.stopPropagation()
                                        onTabClose(tab)
                                    }}>
                                        <Icon type="close" />
                                    </div>
                                )}
                            </Tab>
                        )
                    })}
                </div>
                <div className={tabsContent}>{
                    data?.map((tab: ITab) => {
                        return (
                            <div className={classNames(tabsContentItem, { [getBEMModifier(tabsContentItem, 'active')]: activeTab === tab.key })}>
                                {tab.renderPanel}
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </DndProvider>
    );
};

export default Tabs;
