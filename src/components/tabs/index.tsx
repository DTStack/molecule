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

import { Tab, ITab, tabItemClassName } from './tab';

import './style.scss';

export type TabsType = 'line' | 'card';
export interface ITabsProps<T>{
    closable?: boolean;
    data: (ITab<T>)[];
    activeTab?: string;
    type?: TabsType;
    onCloseTab?: (key?: string) => void;
    onMoveTab?: (tabs: (ITab<T>)[]) => void;
    onSelectTab?: (key?: string) => void;
}

export const tabsClassName = prefixClaName('tabs');
export const tabsHeader = getBEMElement(tabsClassName, 'header');
export const tabsContent = getBEMElement(tabsClassName, 'content');
export const tabsContentItem = getBEMElement(tabsContent, 'item');
export const tabItemCloseClassName = getBEMElement(tabItemClassName, 'close');

export function Tabs<T>(props: ITabsProps<T>) {
    const { activeTab, data, type = 'line', onMoveTab, ...resetProps } = props;

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
                    getBEMModifier(tabsClassName, type as string)
                )}
            >
                <div className={tabsHeader}>
                    {data?.map((tab: (ITab<T>), index: number) => {
                        return (
                            <Tab
                                active={activeTab === tab.key}
                                index={index}
                                label={tab.label}
                                data={tab.data}
                                key={tab.key}
                                propsKey={tab.key}
                                onMoveTab={onChangeTab}
                                {...resetProps}
                            ></Tab>
                        );
                    })}
                </div>
                <div className={tabsContent}>
                    {data?.map((tab: ITab<T>) => {
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