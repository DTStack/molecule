import {
    toggleActivityBarHidden,
    toggleNextActive,
    updateContextMenuIcon,
} from '@dtinsight/molecule/esm/extensions/utils';
import { FileTypes, IExtension, SearchResultItem, UniqueId  } from '@dtinsight/molecule/esm/types';
import { randomId } from '@dtinsight/molecule/esm/utils';
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

            const resultIsTree = molecule.search.getState().resultIsTree;
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

        molecule.search.onResultClick((item: SearchResultItem) => {
            console.log('onResultClick', item);

            // open file in editor
            if (item.fileType === 'File') {
                const name = `editor-${item.name}`;
                molecule.editor.open(
                    {
                        id: item.id,
                        name,
                        icon: 'file',
                        value: item?.data?.value,
                        language: item?.data?.language || 'typescript',
                        breadcrumb: item?.data?.breadcrumb
                            ?.map((bread) => {
                                return {
                                    id: `${bread}`,
                                    name: bread,
                                    icon: '',
                                };
                            })
                            ?.concat({
                                id: `${item.id}`,
                                name: item.name,
                                icon: 'file',
                            }),
                    },
                    molecule.editor.getState().groups?.at(0)?.id
                );
            }

            // collapse or expand folder
            if (item.fileType === 'Folder') {
                molecule.search.onResultFolderClick(item.id);
            }
        });

        // click sidebar search toolbar item
        molecule.sidebar.onToolbarClick((item: IMenuItemProps) => {
            const { value, result, resultIsTree } = molecule.search.getState() || {};
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
                debounceSearch(value);
            } else if (item.id === SEARCH_TOOLBAR_CLEAR_ALL) {
                molecule.search.reset();
            } else if (item.id === SEARCH_TOOLBAR_VIEW_AS_LIST_TREE) {
                if (resultIsTree) {
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

                    debounceSearch(value);
                } else {
                    molecule.sidebar.updateToolbar(SEARCH_ACTIVITY_ITEM, {
                        id: item.id,
                        icon: 'list-flat',
                        name: molecule.locale.localize(SEARCH_TOOLBAR_VIEW_AS_LIST, 'View as List'),
                    });

                    debounceSearch(value);
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

                    const expandKeys = getExpandKeysByLoopResult(result);
                    molecule.search.setExpandKeys(expandKeys);
                }
            }
        });

        molecule.folderTree.onCreateRoot(() => {
            molecule.folderTree.add({
                id: randomId(),
                name: 'molecule',
                fileType: FileTypes.RootFolder,
                icon: 'folder',
                children: [
                    { id: randomId(), name: 'folder1', fileType: FileTypes.Folder, children: [{ id: randomId(), name: 'file1', fileType: FileTypes.File } ]},
                    { id: randomId(), name: 'folder2', fileType: FileTypes.Folder, children: [{ id: randomId(), name: 'file2', fileType: FileTypes.File }, { id: randomId(), name: 'file3', fileType: FileTypes.File }]},
                    { id: randomId(), name: 'file4', fileType: FileTypes.File },
                    { id: randomId(), name: 'file5', fileType: FileTypes.File },
                    { id: randomId(), name: 'file6', fileType: FileTypes.File },
                ],
            });
        });
    },
};
