import * as React from 'react';
import RcTree from 'rc-tree';

import './style.scss';
import { prefixClaName, classNames } from 'mo/common/className';

export interface ITree {

}

interface ITreeProps {
    className?: string;
    data?: ITree;
}

export const Tree: React.FunctionComponent<ITreeProps> = (props: ITreeProps) => {
    return (
        <RcTree
            className={classNames(prefixClaName('tree'), props.className)}
            {...props}
        />
    );
};

export default Tree;
