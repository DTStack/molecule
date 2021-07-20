import * as React from 'react';
import { useCallback } from 'react';
import update from 'immutability-helper';

import {
    prefixClaName,
    getBEMElement,
    getBEMModifier,
    classNames,
} from 'mo/common/className';

import { Tab, ITabProps, tabItemClassName } from './tab';
import DragAndDrop from './dragAndDrop';

export type TabsType = 'line' | 'card';
export interface ITabsProps<T> extends React.ComponentProps<any> {
    className?: string;
    closable?: boolean;
    editable?: boolean;
    data?: ITabProps<T>[];
    activeTab?: string;
    type?: TabsType;
    style?: React.CSSProperties;
    onCloseTab?: (key?: string) => void;
    onMoveTab?: (tabs: ITabProps<T>[]) => void;
    onSelectTab?: (key?: string) => void;
}

export const tabsClassName = prefixClaName('tabs');
export const tabsHeader = getBEMElement(tabsClassName, 'header');
export const tabsContent = getBEMElement(tabsClassName, 'content');
export const tabsContentItem = getBEMElement(tabsContent, 'item');
export const tabItemCloseClassName = getBEMElement(tabItemClassName, 'close');

export function Tabs<T>(props: ITabsProps<T>) {
    const {
        activeTab,
        className,
        data = [],
        type = 'line',
        style,
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
                style={style}
                className={classNames(
                    tabsClassName,
                    getBEMModifier(tabsClassName, type as string),
                    className
                )}
            >
                <div className={tabsHeader}>
                    {data?.map((tab: ITabProps<T>, index: number) => {
                        return (
                            <Tab
                                id={tab.id}
                                key={tab.id}
                                active={activeTab === tab.id}
                                index={index}
                                name={tab.name}
                                data={tab.data}
                                closable={tab.closable}
                                onMoveTab={onChangeTab}
                                {...resetProps}
                            />
                        );
                    })}
                </div>
                <div className={tabsContent}>
                    {data?.map((tab: ITabProps<T>) => {
                        return (
                            <div
                                key={tab.id}
                                className={classNames(tabsContentItem, {
                                    [getBEMModifier(tabsContentItem, 'active')]:
                                        activeTab === tab.id,
                                })}
                            >
                                {tab.renderPane}
                            </div>
                        );
                    })}
                </div>
            </div>
        </DragAndDrop>
    );
}
