import * as React from 'react';
import { useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import {
    prefixClaName,
    getBEMElement,
    getBEMModifier,
    classNames,
} from 'mo/common/className';

import { Tab, tabItemClassName } from './tab';

import './style.scss';
export interface ITab {
    path?: string;
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
    onCloseTab?: (key?: string) => void;
    onMoveTab?: (tabs: ITab[]) => void;
    onSelectTab?: (key?: string) => void;
}

export const tabsClassName = prefixClaName('tabs');
export const tabsHeader = getBEMElement(tabsClassName, 'header');
export const tabsContent = getBEMElement(tabsClassName, 'content');
export const tabsContentItem = getBEMElement(tabsContent, 'item');
export const tabItemCloseClassName = getBEMElement(tabItemClassName, 'close');

const Tabs = (props: ITabsProps) => {
    const {
        activeTab,
        data,
        type = 'line', //TODO type logic
        onMoveTab,
        ...resetProps
    } = props;

    const onChangeTab = useCallback(
        (dragIndex, hoverIndex) => {
            const dragTab = data[dragIndex];
            onMoveTab?.(
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

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                className={classNames(
                    tabsClassName,
                    getBEMModifier(tabsClassName, `${type}`)
                )}
            >
                <div className={tabsHeader}>
                    {data?.map((tab: ITab, index: number) => {
                        return (
                            <Tab
                                active={activeTab === tab.key}
                                index={index}
                                label={tab.label}
                                modified={tab.modified}
                                key={tab.key}
                                propsKey={tab.key}
                                title={tab.tip}
                                onMoveTab={onChangeTab}
                                {...resetProps}
                            ></Tab>
                        );
                    })}
                </div>
                <div className={tabsContent}>
                    {data?.map((tab: ITab) => {
                        return (
                            <div
                                className={classNames(tabsContentItem, {
                                    [getBEMModifier(tabsContentItem, 'active')]:
                                        activeTab === tab.key,
                                })}
                            >
                                {tab.renderPanel}
                            </div>
                        );
                    })}
                </div>
            </div>
        </DndProvider>
    );
};

export default Tabs;
