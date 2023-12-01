import {
    toggleActivityBarHidden,
    toggleNextActive,
    updateContextMenuIcon,
} from '@dtinsight/molecule/esm/extensions/utils';
import { IExtension, SearchResultItem, UniqueId } from '@dtinsight/molecule/esm/types';
import { cloneDeep, debounce } from 'lodash-es';

import { IMenuItemProps } from '../../../esm/types';
import TestPane from '../components/testPane';
import { mockSearchResult } from '../mocks/searchResult';

export const TestExtension: IExtension = {
    id: 'TestExtension',
    name: 'TestExtension',
    activate(molecule: any) {
        molecule.activityBar.add({
            id: 'testPane',
            name: 'testPane',
            alignment: 'top',
            sortIndex: 2,
            icon: 'beaker',
        });
        molecule.sidebar.add({
            id: 'testPane',
            title: 'testPane',
            render: () => <TestPane context={molecule} />,
        });

        molecule.activityBar.onContextMenuClick((item: IMenuItemProps) => {
            if (item.id === 'testPane') {
                toggleNextActive(molecule, item);

                const nextHidden = toggleActivityBarHidden(molecule, item);
                updateContextMenuIcon(molecule, 'activityBar', item, nextHidden);
            }
        });

        /**
         * Search
         */
        let defaultExpandKeys: UniqueId[] = [];
        const getExpandKeysByLoopResult = (list: SearchResultItem[]) => {
            list.forEach((item) => {
                if (item?.fileType === 'Folder') {
                    defaultExpandKeys.push(item.id);
                    if (item.children?.length) {
                        getExpandKeysByLoopResult(item.children);
                    }
                }
            });
            return defaultExpandKeys;
        };

        let resultList: SearchResultItem[] = [];
        const getResultListByLoopResult = (value: string, list: SearchResultItem[]) => {
            list.forEach((item) => {
                if (item?.fileType === 'Folder') {
                    if (item.children?.length) {
                        getResultListByLoopResult(value, item.children);
                    }
                } else if (item.fileType === 'File' && item?.data?.value?.includes(value)) {
                    resultList.push(item);
                }
            });
            return resultList;
        };

        const getResultTreeByLoopResult = (value: string, list: SearchResultItem[]) => {
            return list.filter((item: SearchResultItem) => {
                if (item?.fileType === 'File' && !item?.data?.value?.includes(value)) {
                    return false;
                }
                if (item?.fileType === 'Folder' && item.children?.length) {
                    item.children = getResultTreeByLoopResult(value, item.children);
                }
                if (item?.fileType === 'Folder' && !item.children?.length) {
                    return false;
                }

                return true;
            });
        };

        const debounceSearch = debounce((value) => {
            console.log(`onSearch, value is: ${value}`);

            const { SEARCH_ACTIVITY_ITEM, SEARCH_TOOLBAR_VIEW_AS_LIST_TREE } =
                molecule.builtin.getState().constants;
            const _toolbar = molecule.sidebar
                .get(SEARCH_ACTIVITY_ITEM)
                ?.toolbar?.find(
                    (item: IMenuItemProps) => item.id === SEARCH_TOOLBAR_VIEW_AS_LIST_TREE
                );

            const resultIsTree = _toolbar?.icon === 'list-flat';
            let result: SearchResultItem[] = [];
            defaultExpandKeys = [];
            if (value) {
                if (resultIsTree) {
                    result = getResultTreeByLoopResult(value, cloneDeep(mockSearchResult));
                    defaultExpandKeys = getExpandKeysByLoopResult(result);
                } else {
                    resultList = [];
                    result = getResultListByLoopResult(value, cloneDeep(mockSearchResult));
                }
            }

            molecule.search.setResult(result);
            molecule.search.setExpandKeys(defaultExpandKeys);
        }, 400);
        molecule.search.onSearch(debounceSearch);

        molecule.search.onChange((value: string) => {
            console.log(`onChange, value is: ${value}`);
            if (value === 'info') {
                molecule.search.setValidateInfo({
                    status: 'info',
                    message: 'This is info message.',
                });
            } else if (value === 'warning') {
                molecule.search.setValidateInfo({
                    status: 'warning',
                    message: 'This is warning message.',
                });
            } else if (value === 'error') {
                molecule.search.setValidateInfo({
                    status: 'error',
                    message: 'This is error message.',
                });
            } else {
                molecule.search.setValidateInfo('');
            }
        });

        // molecule.search.onResultClick((item) => {
        //     console.log('onResultClick', item);
        // });

        // click search toolbar item
        molecule.search.onToolbarClick((item: IMenuItemProps) => {
            const {
                SEARCH_ACTIVITY_ITEM,
                SEARCH_TOOLBAR_REFRESH,
                SEARCH_TOOLBAR_CLEAR_ALL,
                SEARCH_TOOLBAR_COLLAPSE_ALL,
                SEARCH_TOOLBAR_EXPAND_ALL,
                SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                SEARCH_TOOLBAR_VIEW_AS_LIST,
                SEARCH_TOOLBAR_VIEW_AS_TREE,
                SEARCH_TOOLBAR_VIEW_AS_LIST_TREE,
            } = molecule.builtin.getState().constants;

            if (item.id === SEARCH_TOOLBAR_REFRESH) {
                debounceSearch(molecule.search.getState().value);
            } else if (item.id === SEARCH_TOOLBAR_CLEAR_ALL) {
                molecule.search.reset();
            } else if (item.id === SEARCH_TOOLBAR_VIEW_AS_LIST_TREE) {
                if (item.icon === 'list-flat') {
                    molecule.sidebar.updateToolbar(SEARCH_ACTIVITY_ITEM, [
                        {
                            id: item.id,
                            icon: 'list-tree',
                            name: molecule.locale.localize(
                                SEARCH_TOOLBAR_VIEW_AS_TREE,
                                'View as Tree'
                            ),
                        },
                        {
                            id: SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                            icon: 'collapse-all',
                            name: molecule.locale.localize(
                                SEARCH_TOOLBAR_COLLAPSE_ALL,
                                'Collapse All'
                            ),
                        },
                    ]);

                    debounceSearch(molecule.search.getState().value);
                } else if (item.icon === 'list-tree') {
                    molecule.sidebar.updateToolbar(SEARCH_ACTIVITY_ITEM, {
                        id: item.id,
                        icon: 'list-flat',
                        name: molecule.locale.localize(SEARCH_TOOLBAR_VIEW_AS_LIST, 'View as List'),
                    });

                    debounceSearch(molecule.search.getState().value);
                }
            } else if (item.id === SEARCH_TOOLBAR_COLLAPSE_EXPAND) {
                if (item.icon === 'collapse-all') {
                    molecule.sidebar.updateToolbar(SEARCH_ACTIVITY_ITEM, {
                        id: item.id,
                        icon: 'expand-all',
                        name: molecule.locale.localize(SEARCH_TOOLBAR_EXPAND_ALL, 'Expand All'),
                    });

                    molecule.search.setExpandKeys([]);
                } else if (item.icon === 'expand-all') {
                    molecule.sidebar.updateToolbar(SEARCH_ACTIVITY_ITEM, {
                        id: item.id,
                        icon: 'collapse-all',
                        name: molecule.locale.localize(SEARCH_TOOLBAR_COLLAPSE_ALL, 'Collapse All'),
                    });

                    const expandKeys = getExpandKeysByLoopResult(molecule.search.getState().result);
                    molecule.search.setExpandKeys(expandKeys);
                }
            }
        });
    },
};
