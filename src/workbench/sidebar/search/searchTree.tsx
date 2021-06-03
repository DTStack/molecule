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
        ...restProps
    } = props;

    if (value && !data.length) {
        // empty search result
        return <Empty title={emptyText} />;
    }

    const getSeachValueIndex = (queryVal, text) => {
        let searchIndex;
        const onlyCaseSensitiveMatch = isCaseSensitive;
        const onlyWholeWordsMatch = isWholeWords;
        const useAllCondtionsMatch = isCaseSensitive && isWholeWords;
        const notUseConditionsMatch = !isCaseSensitive && !isWholeWords;

        if (isRegex) {
            if (onlyCaseSensitiveMatch) {
                searchIndex = text.search(new RegExp(queryVal));
            }
            if (onlyWholeWordsMatch) {
                searchIndex = text.search(
                    new RegExp('\\b' + queryVal + '\\b'),
                    'i'
                );
            }
            if (useAllCondtionsMatch) {
                searchIndex = text.search(new RegExp('\\b' + queryVal + '\\b'));
            }
            if (notUseConditionsMatch) {
                searchIndex = text
                    .toLowerCase()
                    .search(new RegExp(queryVal, 'i'));
            }
        } else {
            if (onlyCaseSensitiveMatch) {
                searchIndex = text.indexOf(queryVal);
            }
            // TODO：应使用字符串方法做搜索匹配，暂时使用正则匹配
            if (onlyWholeWordsMatch) {
                const reg = new RegExp('\\b' + queryVal?.toLowerCase() + '\\b');
                searchIndex = text.toLowerCase().search(reg);
            }
            if (useAllCondtionsMatch) {
                searchIndex = text.search(new RegExp('\\b' + queryVal + '\\b'));
            }
            if (notUseConditionsMatch) {
                searchIndex = text
                    .toLowerCase()
                    .indexOf(queryVal?.toLowerCase());
            }
        }
        return searchIndex;
    };
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
                const searchIndex = getSeachValueIndex(value, name);
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
            onSelectFile={folderTreeController.onSelectFile}
            {...restProps}
        />
    );
};
export default memo(SearchTree);
