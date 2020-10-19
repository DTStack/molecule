import 'mo/workbench/activityBar/style.scss';
import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { IActivityBar, IActivityBarItem, SYMBOL_ACTIVITY_BAR } from 'mo/core/activityBar';
import ActivityBarItem from 'mo/workbench/activityBar/activityBarItem';
import { ITheme } from 'mo/core/theme';

export interface IActivityBarProps extends IActivityBar {
    theme?: ITheme;
}

function ActivityBar(props: IActivityBarProps) {
    const { data, render, selected, onClick } = props;
    let content: React.ReactNode = data?.map((item: IActivityBarItem, index: number) => (
        <ActivityBarItem key={item.id} {...item} data-index={index} checked={selected === item.id}/>
    ));
    if (render) {
        content = render();
    }

    const click = (e: React.MouseEvent) => {
        onClick(e, {} as any );
    };

    return (
        <div className={prefixClaName(SYMBOL_ACTIVITY_BAR)} onClick={click}>
            <ul
                className={prefixClaName('container', SYMBOL_ACTIVITY_BAR)}
            >
                {content}
            </ul>
        </div>
    );
};

export default ActivityBar;
