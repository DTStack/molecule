import * as React from 'react';

import { prefixClaName } from '@/common/className';
import { IActivityBarData, IActivityBar } from '@/core/activityBar';

import './activityBar.scss';

export interface IActivityBarProps {
    activityBar: IActivityBar;
}

export const ROOT_CLASS_NAME = 'activityBar';

export const ActivityBarItem = React.memo(function FnActivityBarItem(props: IActivityBarData) {
    const { id, name = '', data = {}, render } = props;
    if (render) {
        return render();
    }
    return (
        <a
            className={prefixClaName('item', ROOT_CLASS_NAME)}
            title={name} key={id}
            data-item={data}
        >
            {name}
        </a>
    );
});

export const ActivityBar = React.memo(function FnActivityBar(props: IActivityBarProps) {
    const { activityBar } = props;

    let content = activityBar.data?.map((item: IActivityBarData) => (
        <ActivityBarItem key={item.id} {...item}/>
    ));
    if (activityBar.render) {
        content = activityBar.render();
    }

    const onClick = (e: React.MouseEvent) => {
        activityBar.onClick(e, {} as any );
    };

    return (
        <div className={prefixClaName(ROOT_CLASS_NAME)} onClick={onClick}>
            {content}
        </div>
    );
});

export default ActivityBar;
