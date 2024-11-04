import { useMemo, useTransition } from 'react';
import { classNames } from 'mo/client/classNames';
import { Input, ScrollBar, Text, Tree } from 'mo/client/components';
import { useConnector, useLocale } from 'mo/client/hooks';
import type { ISearchController } from 'mo/controllers/search';
import { FileTypes, SearchMode, UniqueId } from 'mo/types';
import { find, matchKeyword } from 'mo/utils';
import { TreeNodeModel } from 'mo/utils/tree';

import variables from './index.scss';

export type ISearchProps = ISearchController;

export default function Search({ onChange, onSearch, onEnter, onSelect }: ISearchProps) {
    const builtin = useConnector('builtin');
    const search = useConnector('search');
    const localize = useLocale();

    const placeholder = localize(builtin.constants.SIDEBAR_ITEM_SEARCH, 'Search');

    const [_, startTransition] = useTransition();

    const handleChange = (value: string) => {
        // Lower the priority of the update operation to prevent the input state from being interrupted
        // and ensure that Chinese can be input.
        startTransition(() => {
            onChange?.(value);
            onSearch?.(value);
        });
    };

    const renderTip = () => {
        if (!search.value) return null;
        if (!search.result.total) return localize(builtin.constants.SEARCH_ITEM_NOT_FOUND, 'No results found.');
        const fileCount = search.result.results.reduce((acc, cur) => {
            acc.add(cur.filename);
            return acc;
        }, new Set<string>()).size;
        return localize(builtin.constants.SEARCH_ITEM_RESULT_TIP, '', search.result.total, fileCount);
    };

    const data = useMemo<TreeNodeModel<any>[]>(() => {
        if (!search.result.total) return [];
        if (search.mode === SearchMode.list) {
            return search.result.results.reduce<TreeNodeModel<any>[]>((acc, cur) => {
                const target = find(
                    acc,
                    (i) => i.id === cur.filename,
                    new TreeNodeModel(cur.filename, cur.filename, FileTypes.Folder, [], cur.icon, undefined)
                );
                target.children ??= [];
                target.children.push(
                    new TreeNodeModel(cur.id, cur.data || '', FileTypes.File, undefined, undefined, cur.disabled, cur)
                );
                return acc;
            }, []);
        } else {
            const treeNodeMap = new Map<string, TreeNodeModel<any>>();
            const result: TreeNodeModel<any>[] = [];
            search.result.results.forEach((cur) => {
                if (!treeNodeMap.has(cur.filename)) {
                    const nodes = cur.filename.split('/');
                    nodes.forEach((node, index) => {
                        if (index === 0) {
                            if (!treeNodeMap.has(node)) {
                                const n = new TreeNodeModel(node, node, FileTypes.Folder, []);
                                treeNodeMap.set(node, n);
                                result.push(n);
                            }
                        } else {
                            const curPath = nodes.slice(0, index + 1).join('/');
                            const lastPath = nodes.slice(0, index).join('/');
                            if (!treeNodeMap.has(curPath)) {
                                const parent = treeNodeMap.get(lastPath);
                                if (!parent) return;
                                parent.children ??= [];
                                const n = new TreeNodeModel(curPath, node, FileTypes.Folder, []);
                                treeNodeMap.set(curPath, n);
                                parent.children.push(n);
                            }
                        }
                    });
                }
                const item = treeNodeMap.get(cur.filename);
                if (!item) return;
                item.icon = cur.icon;
                item.children ??= [];
                item.children.push(
                    new TreeNodeModel(cur.id, cur.data || '', FileTypes.File, undefined, undefined, cur.disabled, cur)
                );
            });
            return result;
        }
    }, [search.mode, search.result.total, search.result.results]);

    const expandedKeys = useMemo<UniqueId[]>(() => {
        if (!search.result.total) return [];
        if (search.mode === SearchMode.list) {
            return search.expandedKeys;
        } else {
            return Array.from(
                search.expandedKeys.reduce<Set<string>>((acc, cur) => {
                    const nodes = (cur as string).split('/');
                    nodes.forEach((_, index) => {
                        const curPath = nodes.slice(0, index + 1).join('/');
                        acc.add(curPath);
                    });
                    return acc;
                }, new Set())
            );
        }
    }, [search.mode, search.result.total, search.expandedKeys]);

    // For delay render result
    const ResultComp = useMemo(() => {
        return (
            <>
                <span className={variables.tip}>{renderTip()}</span>
                <ScrollBar isShowShadow>
                    <Tree
                        className={variables.result}
                        expandedKeys={expandedKeys}
                        data={data}
                        onSelect={onSelect}
                        draggable={false}
                        renderTitle={(node) => {
                            if (node.fileType === 'File') {
                                const val = search.value;

                                const rows = node.name.split('\n');
                                const curRow = rows.find((r) =>
                                    r.toLocaleLowerCase().includes(val.toLocaleLowerCase())
                                );

                                if (!curRow) return node.name;

                                return (
                                    <span title={node.name}>
                                        <Text highlight={val}>{matchKeyword(curRow, val)}</Text>
                                    </span>
                                );
                            }
                            return node.name;
                        }}
                    />
                </ScrollBar>
            </>
        );
    }, [expandedKeys, data]);

    return (
        <section className={variables.container}>
            <Input
                autoFocus
                value={search.value}
                className={classNames(variables.widget)}
                info={search.validateInfo}
                placeholder={placeholder}
                onChange={handleChange}
                onSubmit={onEnter}
            />
            {ResultComp}
        </section>
    );
}
