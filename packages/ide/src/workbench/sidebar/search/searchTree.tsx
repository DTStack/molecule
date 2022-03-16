import React, { memo } from 'react';
import { TreeView as Tree, ITreeProps } from '@dtinsight/molecule-ui';
import { treeContentClassName } from './base';

export interface SearchTreeProps extends ITreeProps {}

const SearchTree = (props: SearchTreeProps) => {
    const { data = [], onSelect, renderTitle } = props;

    return (
        <Tree
            draggable={false}
            className={treeContentClassName}
            data={data}
            renderTitle={renderTitle}
            onSelect={onSelect}
        />
    );
};
export default memo(SearchTree);
