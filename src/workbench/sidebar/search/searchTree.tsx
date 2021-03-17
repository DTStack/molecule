import * as React from 'react';
import { memo } from 'react';
import Tree, { ITreeProps } from 'mo/components/tree';
import { folderTreeController } from 'mo/controller';
import { matchSearchValueClassName } from './base';
export interface SearchTreeProps extends ITreeProps {
    value?: string;
    convertFoldToSearchTree?: (data) => any[];
}

const SearchTree: React.FunctionComponent<SearchTreeProps> = (
    props: SearchTreeProps
) => {
    const { data, value, convertFoldToSearchTree, ...restProps } = props;
    console.log('SearchTree => Props', props);
    return (
        <Tree
            data={convertFoldToSearchTree?.(data) || []}
            renderTitle={(node, index) => {
                const { name } = node;
                const searchIndex = name.indexOf(value);
                const beforeStr = name.substr(0, searchIndex);
                const afterStr = name.substr(searchIndex + value?.length);
                const title =
                    searchIndex > -1 ? (
                        <span>
                            {beforeStr}
                            <span className={matchSearchValueClassName}>
                                {value}
                            </span>
                            {afterStr}
                        </span>
                    ) : (
                        name
                    );
                return title;
            }}
            onSelectFile={folderTreeController.onSelectFile}
            {...restProps}
        />
    );
};
export default memo(SearchTree);
