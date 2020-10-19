import 'mo/workbench/activityBar/style.scss';
import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { IActivityBar, IActivityBarItem } from 'mo/core/activityBar';
import ActivityBarItem from 'mo/workbench/activityBar/activityBarItem';
import { ITheme } from 'mo/core/theme';

export interface IActivityBarProps extends IActivityBar {
    theme?: ITheme;
}

export const ROOT_CLASS_NAME = 'activityBar';

function ActivityBar(props: IActivityBarProps) {
    const { data, render, selected, onClick } = props;
    let content = data?.map((item: IActivityBarItem, index: number) => (
        <ActivityBarItem key={item.id} {...item} data-index={index} checked={selected === item.id}/>
    ));
    if (render) {
        content = render();
    }

    const click = (e: React.MouseEvent) => {
        onClick(e, {} as any );
    };

    return (
        <div className={prefixClaName(ROOT_CLASS_NAME)} onClick={click}>
            <ul
                className={prefixClaName('container', ROOT_CLASS_NAME)}
            >
                {content}
            </ul>
        </div>
    );
};

export default ActivityBar;
