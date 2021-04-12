import * as React from 'react';
import { Panel } from 'rc-collapse';
export interface IExpandProps {
    isActive?: boolean;
}
export interface ICollapseProps<T = any> {
    data?: T;
    className?: string;
    onCollapseChange?: (keys: any) => void;
    onCollapseToolbar?: (item: any) => void;
}
export declare const contentPaddingClassName: string;
declare const Collapse: React.FunctionComponent<ICollapseProps>;
export { Panel };
export default Collapse;
