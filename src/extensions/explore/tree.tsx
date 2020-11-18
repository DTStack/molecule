import * as React from 'react';
// import { useState } from 'react';
import Tree, { TreeNode } from 'mo/components/tree';
import { prefixClaName } from 'mo/common/className';
import { codIcon } from 'mo/common/className';
import './style.scss';
interface ITreeProps {
    isActive?: boolean;
}

// const initState = {
// }
export const TreeView: React.FunctionComponent<ITreeProps> = (
    ITreeProps
) => {
    return (
        <div className={prefixClaName('tree', 'sidebar')}>
            <Tree
                prefixCls='rc-tree'
                draggable
                switcherIcon={codIcon('codicon-chevron-right')}
            >
                <TreeNode title='parent' key='parent'>
                    <TreeNode title='child' key='child'>
                        <TreeNode title='child3' key='child3'>
                            <TreeNode icon={({ selected }) => codIcon('codicon-symbol-file')} title='child5' key='child5'></TreeNode>
                        </TreeNode>
                        <TreeNode title='child4' key='child4'></TreeNode>
                    </TreeNode>
                    <TreeNode title='child1' key='child1'></TreeNode>
                </TreeNode>
            </Tree>
        </div>
    );
};
