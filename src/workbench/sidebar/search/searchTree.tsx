import React, { memo } from 'react';
import Tree, { ITreeProps } from 'mo/components/tree';
import { treeContentClassName } from './base';

export interface SearchTreeProps extends ITreeProps {}

const SearchTree = (props: SearchTreeProps) => {
    const { data = [], onSelectNode, renderTitle } = props;

    return (
        <Tree
            showLine
            defaultExpandAll
            draggable={false}
            className={treeContentClassName}
            data={data}
            renderTitle={renderTitle}
            onSelectNode={onSelectNode}
        />
    );
};
export default memo(SearchTree);
