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
    onClose?: (item: ITab, index: number) => void;
}

const Tabs: React.FunctionComponent<ITabsProps> = (props: ITabsProps) => {
    const { data, onClose } = props;
    const tabs = data.map((tab: ITab, index: number) => {
        return (<a key={tab.id}>{tab.name} <button onClick={(e) => onClose!(tab, index)}>Close</button></a>);
    });
    return (
        <div className={prefixClaName('tabs')}>
            {tabs}
        </div>
    );
};

export default Tabs;
