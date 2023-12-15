import {
    toggleActivityBarHidden,
    toggleNextActive,
    updateContextMenuIcon,
} from '@dtinsight/molecule/esm/extensions/utils';
import {
    FileTypes,
    IExtension,
    IMenuItemProps,
    IMoleculeContext,
    SearchResultItem,
    UniqueId,
} from '@dtinsight/molecule/esm/types';
import { cloneDeep, debounce } from 'lodash-es';

import TestPane from '../components/testPane';
import { mockSearchResult } from '../mocks/searchResult';
import { getFileContent, getFiles, getWorkspace } from '../utils';

enum FolderTreeContextMenu {
    createFolder = 'folderTree.createFolder',
    createFile = 'folderTree.createFile',
    editFolder = 'folderTree.editFolder',
    editFile = 'folderTree.editFile',
}

export const TestExtension: IExtension = {
    id: 'TestExtension',
    name: 'TestExtension',
    activate(molecule: IMoleculeContext) {
        molecule.activityBar.add({
            id: 'testPane',
            name: 'testPane',
            alignment: 'top',
            sortIndex: 2,
            icon: 'beaker',
        });
        molecule.sidebar.add({
            id: 'testPane',
            name: 'testPane',
            render: () => <TestPane context={molecule} />,
        });

        molecule.activityBar.onContextMenu(() => {
            molecule.contextMenu.setContextMenu([
                { id: 'testPane__activityBar__molecule', name: 'Molecule' },
                { id: '2', type: 'divider' },
            ]);
        });

        molecule.contextMenu.onClick((item) => {
            if (item.id === 'testPane__activityBar__molecule') {
                alert('Molecule');
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
            getWorkspace().then((tree) => {
                molecule.folderTree.add(tree);
                molecule.explorer.updatePanel({
                    id: molecule.builtin.getConstants().EXPLORER_ITEM_WORKSPACE,
                    name: tree.name,
                });
                molecule.sidebar.updateToolbar(
                    molecule.builtin.getConstants().SIDEBAR_ITEM_EXPLORER,
                    {
                        id: molecule.builtin.getConstants().EXPLORER_ITEM_WORKSPACE,
                        name: tree.name,
                    }
                );
            });
        });

        molecule.folderTree.onContextMenu((_, treeNode) => {
            if (treeNode.fileType === FileTypes.File) {
                molecule.contextMenu.setContextMenu([
                    { id: 'testPane', name: '打开 testPane 面板' },
                    { id: 'testPane_divider', type: 'divider' },
                ]);
            }
        });

        molecule.folderTree.onExpand((expanded, _, treeNode) => {
            if (expanded) {
                molecule.folderTree.addExpandKeys(treeNode.id);
                if (!treeNode.children?.length) {
                    molecule.folderTree.addLoading(treeNode.id);
                    getFiles(treeNode.id as string)
                        .then(([folder, files]) => {
                            molecule.folderTree.update({
                                id: treeNode.id,
                                children: [...folder, ...files],
                            });
                        })
                        .catch((err) => {
                            molecule.notification.setNotificationVisibility(true);
                            molecule.notification.add({
                                id: `getFiles${treeNode.id}`,
                                value: err.message,
                            });
                        })
                        .finally(() => {
                            molecule.folderTree.removeLoading(treeNode.id);
                        });
                }
            } else {
                molecule.folderTree.removeExpandKeys(treeNode.id);
            }
        });

        molecule.folderTree.onSelect((treeNode) => {
            if (treeNode.fileType === 'File') {
                openFile(treeNode);
            }
        });

        molecule.folderTree.onContextMenuClick((item, treeNode) => {
            const { EXPLORER_CONTEXTMENU_OPEN_TO_SIDE } = molecule.builtin.getConstants();
            switch (item.id) {
                case EXPLORER_CONTEXTMENU_OPEN_TO_SIDE: {
                    openFile(treeNode);
                    break;
                }

                default:
                    break;
            }
        });

        molecule.menuBar.onSelect((menuId) => {
            if (menuId === molecule.builtin.getConstants().MENUBAR_ITEM_ABOUT) {
                window.open('https://github.com/DTStack/molecule', '_blank');
            }
        });

        function openFile(treeNode: any) {
            molecule.editor.setLoading(true);
            getFileContent(treeNode.id as string)
                .then((data) => {
                    const tabData = {
                        id: treeNode.id,
                        name: treeNode.name,
                        icon: treeNode.icon || 'file',
                        value: data,
                        language: 'plain',
                        breadcrumb: (treeNode.id as string)
                            .split('/')
                            .filter(Boolean)
                            .map((i) => ({ id: i, name: i })),
                    };
                    molecule.editor.open(tabData, molecule.editor.getState().groups?.at(0)?.id);
                })
                .catch((err) => {
                    molecule.notification.setNotificationVisibility(true);
                    molecule.notification.add({
                        id: `getFileContent_${treeNode.id}`,
                        value: err.message,
                    });
                })
                .finally(() => {
                    molecule.editor.setLoading(false);
                });
        }
    },
};
