import '@/workbench/activityBar/style.scss';
import * as React from 'react';
// import { memo } from 'react';
import { prefixClaName } from '@/common/className';
import { IActivityBar, IActivityBarItem } from '@/core/activityBar';
import ActivityBarItem from '@/workbench/activityBar/activityBarItem';
import { ITheme } from '@/core/theme';

export interface IActivityBarProps {
    activityBar: IActivityBar;
    theme: ITheme;
}

export const ROOT_CLASS_NAME = 'activityBar';

function ActivityBar(props: IActivityBarProps) {
    const { activityBar } = props;

    let content = activityBar.data?.map((item: IActivityBarItem, index: number) => (
        <ActivityBarItem key={item.id} {...item} data-index={index} checked={activityBar.selected === item.id}/>
    ));
    if (activityBar.render) {
        content = activityBar.render();
    }

    const onClick = (e: React.MouseEvent) => {
        activityBar.onClick(e, {} as any );
    };

    return (
        <div className={prefixClaName(ROOT_CLASS_NAME)} onClick={onClick}>
            <ul
                className={prefixClaName('container', ROOT_CLASS_NAME)}
            >
                {content}
            </ul>
        </div>
    );
};

// export default memo(ActivityBar);

export default ActivityBar;
