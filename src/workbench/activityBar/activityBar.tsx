import 'mo/workbench/activityBar/style.scss';
import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { ID_ACTIVITY_BAR } from 'mo/common/id';
import { IActivityBar, IActivityBarItem } from 'mo/model/workbench/activityBar';
import ActivityBarItem from './activityBarItem';

export function ActivityBar(props: IActivityBar) {
    const { data = [], render, selected, onClick, onSelect } = props;

    if (render) {
        return <div className={prefixClaName(ID_ACTIVITY_BAR)}>{render()}</div>;
    }

    const onClickBar = (e: React.MouseEvent, item: IActivityBarItem) => {
        if (onClick) onClick(e, item);
        if (onSelect) {
            onSelect(item.id || '', item);
        }
    };

    const normalBarItems =
        data?.filter(
            (item: IActivityBarItem) => !item.type || item.type === 'normal'
        ) || [];
    const globalBarItems =
        data?.filter(
            (item: IActivityBarItem) => item.type && item.type === 'global'
        ) || [];

    const renderItems = (item: IActivityBarItem, index: number) => {
       
        return (
            <ActivityBarItem
                key={item.id}
                {...item}
                onClick={onClickBar}
                data-index={index}
                checked={selected === item.id}
            />
        );
    };

    return (
        <div className={prefixClaName(ID_ACTIVITY_BAR)} id={ID_ACTIVITY_BAR}>
            <div className={prefixClaName('container', ID_ACTIVITY_BAR)}>
                <ul className={'normal-items'}>
                    {normalBarItems.map(renderItems)}
                </ul>
                <ul className={'global-items'}>
                    {globalBarItems.map(renderItems)}
                </ul>
            </div>
        </div>
    );
}

export default ActivityBar;
