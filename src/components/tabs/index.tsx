import * as React from 'react';
import { useCallback } from 'react';
import update from 'immutability-helper';

import {
    prefixClaName,
    getBEMElement,
    getBEMModifier,
    classNames,
} from 'mo/common/className';

import { Tab, ITab, tabItemClassName } from './tab';
import DragAndDrop from './dragAndDrop';

export type TabsType = 'line' | 'card';
export interface ITabs<T> extends React.ComponentProps<any> {
    closable?: boolean;
    data?: ITab<T>[];
    activeTab?: string;
    type?: TabsType;
    onCloseTab?: (key?: string) => void;
    onMoveTab?: (tabs: ITab<T>[]) => void;
    onSelectTab?: (key?: string) => void;
}

export const tabsClassName = prefixClaName('tabs');
export const tabsHeader = getBEMElement(tabsClassName, 'header');
export const tabsContent = getBEMElement(tabsClassName, 'content');
export const tabsContentItem = getBEMElement(tabsContent, 'item');
export const tabItemCloseClassName = getBEMElement(tabItemClassName, 'close');

export function Tabs<T>(props: ITabs<T>) {
    const {
        activeTab,
        data = [],
        type = 'line',
        closable,
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
        <DragAndDrop>
            <div
                className={classNames(
                    tabsClassName,
                    getBEMModifier(tabsClassName, type as string)
                )}
                {...resetProps}
            >
                <div className={tabsHeader}>
                    {data?.map((tab: ITab<T>, index: number) => {
                        // TODO 这里 tab 直接继承 tabs Props 的方式，需要重构
                        return (
                            <Tab
                                key={tab.id}
                                active={activeTab === tab.id}
                                index={index}
                                onMoveTab={onChangeTab}
                                {...tab}
                                {...resetProps}
                            ></Tab>
                        );
                    })}
                </div>
                <div className={tabsContent}>
                    {data?.map((tab: ITab<T>) => {
                        return (
                            <div
                                key={tab.id}
                                className={classNames(tabsContentItem, {
                                    [getBEMModifier(tabsContentItem, 'active')]:
                                        activeTab === tab.id,
                                })}
                            >
                                {tab.renderPanel}
                            </div>
                        );
                    })}
                </div>
            </div>
        </DragAndDrop>
    );
}
