import * as React from 'react';
import { useCallback } from 'react';
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Scrollable } from 'mo/components/scrollable';
import { TabSwicher, Tab } from './Tab';
import TabButton from './tabButton';
import './style.scss';

export interface ITab {
    id?: number | string;
    name?: string;
    activeTab?: number;
    modified?: boolean;
    renderPane?: () => React.ReactNode;
    value?: string;
    mode?: string | undefined;
}
export interface ITabsProps {
    data: ITab[];
    closeTab?: (item: ITab) => void;
    onMoveTab?: (tabs: ITab[]) => void;
    onSelectTab?: (index: number) => void;
    onTabChange: (index: number) => void;
}

const DraggleTabs = (props: ITabsProps) => {
    const { data, onSelectTab } = props;

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

    const onTabClick = (key) => {
        console.log(`onTabClick ${key}`);
        onSelectTab?.(key);
    };

    const onTabClose = (item: ITab) => {};
    return (
        <DndProvider backend={HTML5Backend}>
            <Scrollable className={'normal-items'}>
                <TabSwicher className="tab-switcher">
                    {data?.map((item: ITab, index: number) => (
                        <Tab
                            onMoveTab={onMoveTab}
                            onTabChange={onTabClick}
                            index={index}
                            id={item.id}
                        >
                            <TabButton
                                key={item.id}
                                name={item.name}
                                modified={item.modified}
                                active={item.activeTab === index}
                                onClose={() => onTabClose(item)}
                                className={'tab-button'}
                            />
                        </Tab>
                    ))}
                </TabSwicher>
            </Scrollable>
        </DndProvider>
    );
};

export default DraggleTabs;
