import * as React from 'react';
import RcTree from 'rc-tree';
import { TreeProps } from 'rc-tree/lib/Tree';
import './style.scss';
import { prefixClaName, classNames } from 'mo/common/className';

export interface ITree {}

interface ITreeProps extends TreeProps {
    prefixCls: any;
}

export const Tree: React.FunctionComponent<ITreeProps> = (
    props: ITreeProps
) => {
    const { className, ...others } = props;
    return (
        <div className={classNames(prefixClaName('tree'), className)}>
            <RcTree
                {...others}
            />
        </div>
    );
};
export const TreeNode = RcTree.TreeNode;
export default Tree;
