import * as React from 'react';
import Collapse from 'mo/components/collapse';
import { Header, Content } from 'mo/workbench/sidebar';
import { IExplorer } from 'mo/model/workbench/explorer/explorer';
import { IExplorerController } from 'mo/controller/explorer/explorer';
import ActivityBarItem from 'mo/workbench/activityBar/activityBarItem';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import {
    defaultExplorerClassName,
    activityBarItemFloatClassName,
} from './base';

export const Explorer: React.FunctionComponent<IExplorer> = (
    props: IExplorer & IExplorerController
) => {
    const {
        data = [],
        headerToolBar = [],
        onHeaderToolbarContextMenuClick,
        onCollapseChange,
        onCollapseToolbar,
    } = props;
    const renderItems = (item: IActivityBarItem, index: number) => {
        return (
            <ActivityBarItem
                {...item}
                key={item.id}
                onClick={onHeaderToolbarContextMenuClick}
                className={activityBarItemFloatClassName}
                data-index={index}
            />
        );
    };
    return (
        <div className={defaultExplorerClassName}>
            <Header
                title={'Explorer'}
                toolbar={headerToolBar.map(renderItems)}
            />
            <Content>
                <Collapse
                    data={data}
                    onCollapseChange={onCollapseChange}
                    onCollapseToolbar={onCollapseToolbar}
                />
            </Content>
        </div>
    );
};
