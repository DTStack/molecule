import React from 'react';
import { classNames } from 'mo/common/className';

export interface TabItemProps {
    tab: number;
    activeTab: number;
    children: any;
}
export default function TabItem({
    tab,
    activeTab,
    children,
}: React.PropsWithChildren<TabItemProps>) {
    return (
        <div
            className={classNames('tab-item', {
                'tab-item--active': tab === activeTab,
            })}
        >
            {children}
        </div>
    );
}
