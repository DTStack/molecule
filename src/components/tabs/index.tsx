import * as React from 'react';

import { prefixClaName } from 'mo/common/className';

export interface ITab<T = any, K = any> {
    id?: number;
    name?: string;
    mode?: string;
    data?: T;
    options?: K;
    value?: string;
    renderPane?: () => React.ReactElement;
}

interface ITabsProps {
    data: ITab[];
}

const Tabs: React.FunctionComponent<ITabsProps> = (props: ITabsProps) => {
    const { data } = props;
    const tabs = data.map((tab: ITab) => {
        return (<a key={tab.id}>{tab.name}</a>);
    });
    return (
        <div className={prefixClaName('tabs')}>
            {tabs}
        </div>
    );
};

export default Tabs;
