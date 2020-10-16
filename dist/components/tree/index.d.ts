import * as React from 'react';
import './style.scss';
export interface ITree {
}
interface ITreeProps {
    className?: string;
    data?: ITree;
}
export declare const Tree: React.FunctionComponent<ITreeProps>;
export default Tree;
