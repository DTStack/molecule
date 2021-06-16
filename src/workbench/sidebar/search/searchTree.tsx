import 'reflect-metadata';
import * as React from 'react';
import { memo } from 'react';
import Tree, { ITreeProps } from 'mo/components/tree';
import {
    deleteSearchValueClassName,
    emptyTextValueClassName,
    matchSearchValueClassName,
    replaceSearchValueClassName,
    treeContentClassName,
} from './base';
import { FolderTreeController } from 'mo/controller/explorer/folderTree';
import { container } from 'tsyringe';
import { classNames } from 'mo/common/className';
export interface SearchTreeProps extends ITreeProps {
    value?: string;
    emptyText?: string;
    replaceValue?: string;
    isCaseSensitive?: boolean;
    isWholeWords?: boolean;
    isRegex?: boolean;
    /**
     * Returns the position of the first occurrence of a substring.
     */
    getSearchIndex: (text: string, queryVal?: string) => number;
}

const folderTreeController = container.resolve(FolderTreeController);

const Empty = ({ title }: { title?: string }) => {
    return (
        <div className={emptyTextValueClassName}>
            {title || '未找到结果，请重新修改您的搜索条件'}
        </div>
    );
};

const SearchTree = (props: SearchTreeProps) => {
    const {
        data = [],
        value = '',
        isCaseSensitive,
        isWholeWords,
        isRegex,
        emptyText,
        replaceValue,
        getSearchIndex,
        ...restProps
    } = props;

    if (value && !data.length) {
        // empty search result
        return <Empty title={emptyText} />;
    }

    return (
        <Tree
            showLine
            defaultExpandAll
            className={treeContentClassName}
            data={data}
            renderTitle={(node, _, isLeaf) => {
                const { name = '' } = node;
                if (!isLeaf) {
                    return name;
                }
                const searchIndex = getSearchIndex(name, value);
                const beforeStr = name.substr(0, searchIndex);
                const currentValue = name.substr(searchIndex, value?.length);
                const afterStr = name.substr(searchIndex + value?.length);
                const title =
                    searchIndex > -1 ? (
                        <span>
                            {beforeStr}
                            <span
                                className={classNames(
                                    matchSearchValueClassName,
                                    replaceValue && deleteSearchValueClassName
                                )}
                            >
                                {currentValue}
                            </span>
                            {replaceValue && (
                                <span className={replaceSearchValueClassName}>
                                    {replaceValue}
                                </span>
                            )}
                            {afterStr}
                        </span>
                    ) : (
                        name
                    );
                return title;
            }}
            onSelectNode={folderTreeController.onSelectFile}
            {...restProps}
        />
    );
};
export default memo(SearchTree);
