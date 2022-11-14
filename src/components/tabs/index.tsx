import React, { useEffect, useRef } from 'react';
import { useCallback } from 'react';
import update from 'immutability-helper';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
    prefixClaName,
    getBEMElement,
    getBEMModifier,
    classNames,
} from 'mo/common/className';

import { Tab, ITabProps, tabItemActiveClassName } from './tab';
import type { UniqueId } from 'mo/common/types';
import ScrollBar, { DirectionKind, IScrollRef } from '../scrollBar';

export type TabsType = 'line' | 'card';
/**
 * TODO: Get rid of the ComponentProps in next version
 */
export interface ITabsProps extends React.ComponentProps<any> {
    className?: string;
    style?: React.CSSProperties;
    role?: string;
    /**
     * @deprecated For now, we don't need to control the global closable
     */
    closable?: boolean;
    /**
     * @deprecated For now, we don't need to control the global editable
     */
    editable?: boolean;
    data?: ITabProps[];
    activeTab?: UniqueId;
    /**
     * Default is line
     */
    type?: TabsType;
    onCloseTab?: (key: UniqueId) => void;
    onContextMenu?: (e: React.MouseEvent, tab: ITabProps) => void;
    onMoveTab?: (tabs: ITabProps[]) => void;
    onSelectTab?: (key: UniqueId) => void;
}

export const tabsClassName = prefixClaName('tabs');
export const tabsHeader = getBEMElement(tabsClassName, 'header');

export function Tabs(props: ITabsProps) {
    const {
        role,
        activeTab,
        className,
        data = [],
        type = 'line',
        style,
        onMoveTab,
        onCloseTab,
        onSelectTab,
        onContextMenu,
    } = props;

    const tabContainer = useRef<HTMLDivElement>(null);
    const scroll = useRef<IScrollRef>(null);

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

    const handleDrag = (
        source: ITabProps,
        target: ITabProps,
        infos: Record<string, any>
    ) => {
        const dragIndex = data.indexOf(source);
        const hoverIndex = data.indexOf(target);
        const { hoverClientX, hoverMiddleX } = infos;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }
        // drag down
        if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
            return;
        }
        // drag up
        if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
            return;
        }
        onChangeTab?.(dragIndex, hoverIndex);
    };

    useEffect(() => {
        const activeItem = tabContainer.current?.querySelector<HTMLDivElement>(
            `.${tabItemActiveClassName}`
        );

        if (activeItem) {
            const width = tabContainer.current?.clientWidth || 0;
            const left = activeItem.offsetLeft;
            if (left > width) {
                // Because of useEffect is executed before scroll's ResizeObserver
                setTimeout(() => {
                    scroll.current?.scrollTo(left + activeItem.clientWidth);
                }, 0);
            }
        }
    }, [tabContainer.current?.querySelector(`.${tabItemActiveClassName}`)]);

    return (
        <DndProvider backend={HTML5Backend} context={window}>
            <div
                style={style}
                className={classNames(
                    tabsClassName,
                    getBEMModifier(tabsClassName, type as string),
                    className
                )}
                role={role}
                ref={tabContainer}
            >
                <ScrollBar
                    className={tabsHeader}
                    direction={DirectionKind.horizontal}
                    ref={scroll}
                    trackStyle={{ height: 3 }}
                >
                    {data.map((tab, index) => {
                        return (
                            <Tab
                                key={tab.id}
                                active={activeTab === tab.id}
                                tab={tab}
                                onDrag={handleDrag}
                                onCloseTab={onCloseTab}
                                onContextMenu={onContextMenu}
                                onSelectTab={onSelectTab}
                            />
                        );
                    })}
                </ScrollBar>
            </div>
        </DndProvider>
    );
}
