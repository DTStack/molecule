import * as React from 'react';
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
declare const Tabs: React.FunctionComponent<ITabsProps>;
export default Tabs;
