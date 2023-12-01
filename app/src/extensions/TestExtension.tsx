import {
    toggleActivityBarHidden,
    toggleNextActive,
    updateContextMenuIcon,
} from '@dtinsight/molecule/esm/extensions/utils';
import { FileTypes, IExtension, SearchResultItem, UniqueId } from '@dtinsight/molecule/esm/types';
import { randomId } from '@dtinsight/molecule/esm/utils';
import { cloneDeep, debounce } from 'lodash-es';

import { IMenuItemProps } from '../../../esm/types';
import TestPane from '../components/testPane';
import { mockSearchResult } from '../mocks/searchResult';

enum FolderTreeContextMenu {
    createFolder = 'folderTree.createFolder',
    createFile = 'folderTree.createFile',
    editFolder = 'folderTree.editFolder',
    editFile = 'folderTree.editFile',
}

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
                    {
                        id: randomId(),
                        name: 'folder1',
                        fileType: FileTypes.Folder,
                        children: [{ id: randomId(), name: 'file1', fileType: FileTypes.File }],
                    },
                    {
                        id: randomId(),
                        name: 'folder2',
                        fileType: FileTypes.Folder,
                        children: [
                            { id: randomId(), name: 'file2', fileType: FileTypes.File },
                            { id: randomId(), name: 'file3', fileType: FileTypes.File },
                        ],
                    },
                    { id: randomId(), name: 'file4', fileType: FileTypes.File },
                    { id: randomId(), name: 'file5', fileType: FileTypes.File },
                    { id: randomId(), name: 'file6', fileType: FileTypes.File },
                ],
            });
        });

        molecule.folderTree.onRightClick((e, node) => {
            // TODO custom contextMenu
            const { COMMON_CONTEXT_MENU } = molecule.builtin.getState().modules;
            if (node.fileType === FileTypes.File) {
                molecule.folderTree.setState({
                    contextMenu: [
                        // ...fileContextMenu,
                        ...COMMON_CONTEXT_MENU,
                        { name: '编辑文件', id: FolderTreeContextMenu.editFile },
                    ],
                });
            } else if (node.fileType === FileTypes.Folder) {
                molecule.folderTree.setState({
                    contextMenu: [
                        // ...folderContextMenu,
                        ...COMMON_CONTEXT_MENU,
                        { name: '新建文件夹', id: FolderTreeContextMenu.createFolder },
                        { name: '编辑文件夹', id: FolderTreeContextMenu.editFolder },
                        { name: '新建文件', id: FolderTreeContextMenu.createFile },
                    ],
                });
            }
        });

        molecule.folderTree.onContextMenu((contextMenuItem, treeNode) => {
            const menuId = contextMenuItem.id;
            const {
                NEW_FILE_COMMAND_ID,
                NEW_FOLDER_COMMAND_ID,
                OPEN_TO_SIDE_COMMAND_ID,
                RENAME_COMMAND_ID,
                DELETE_COMMAND_ID,
            } = molecule.builtin.getState().constants;
            const { id } = treeNode!;
            switch (menuId) {
                case RENAME_COMMAND_ID: {
                    molecule.folderTree.setEditing(id);
                    break;
                }
                case DELETE_COMMAND_ID: {
                    molecule.folderTree.remove(id);
                    break;
                }
                case NEW_FILE_COMMAND_ID: {
                    console.log(`test newFile node ${id}`);
                    // const { id } = treeNode!;
                    // this.createTreeNode(FileTypes.File, id);
                    break;
                }
                case NEW_FOLDER_COMMAND_ID: {
                    console.log(`test newFolder node ${id}`);
                    // const { id } = treeNode!;
                    // this.createTreeNode(FileTypes.Folder, id);
                    break;
                }
                case OPEN_TO_SIDE_COMMAND_ID: {
                    console.log(`test OPEN_TO_SIDE_COMMAND_ID node ${id}`);
                    // this.onSelectFile(treeNode!);
                    break;
                }
                case FolderTreeContextMenu.createFile: {
                    console.log(`test newFile node ${id}`);
                    break;
                }
                case FolderTreeContextMenu.createFolder: {
                    console.log(`test newFolder node ${id}`);
                    break;
                }
                case FolderTreeContextMenu.editFile: {
                    console.log(`test editFile node ${id}`);
                    break;
                }
                case FolderTreeContextMenu.editFolder: {
                    console.log(`test editFolder node ${id}`);
                    break;
                }
            }
        });

        molecule.folderTree.onLoadData(async (treeNode, cb) => {
            try {
                cb((treeNode.children || []) as any);
            } catch (err) {}
        });

        molecule.folderTree.onSelectFile((file) => {
            if (file.fileType !== 'File') return;
            molecule.folderTree.setState({ editing: undefined });
            // TODO need to update breadcrumb、language、value、icon by data
            const tabData = {
                id: file.id,
                name: file.name,
                icon: 'file',
                value: `
// name: ${file.name}
// id: ${file.id}
            `,
                language: 'typescript',
                breadcrumb: [
                    { id: 'app', name: 'app' },
                    { id: 'src', name: 'src' },
                    { id: 'components', name: 'components' },
                    { id: 'editor', name: file.name, icon: 'file' },
                ],
                // modified: !!(key % 2),
            };
            molecule.editor.open(tabData, molecule.editor.getState().groups?.at(0)?.id);
        });

        molecule.menuBar.onSelect((menuId) => {
            if (menuId === 'About') {
                window.open('https://github.com/DTStack/molecule', '_blank');
            }
        });
    },
};
