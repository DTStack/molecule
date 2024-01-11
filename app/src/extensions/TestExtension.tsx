import { FileTypes, IContributeType, IExtension, IMoleculeContext, tree } from '@dtinsight/molecule';
import { debounce } from 'lodash-es';

import TestPane from '../components/testPane';
import { getFileContent, getFiles, getWorkspace, searchFileContents } from '../utils';

export const TestExtension: IExtension = {
    id: 'TestExtension',
    name: 'TestExtension',
    contributes: {
        [IContributeType.Modules]: {
            menuBar: import('../components/menuBar'),
        },
    },
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
            molecule.contextMenu.add([
                { id: 'testPane__activityBar__molecule', name: 'Molecule' },
                {
                    id: 'testPane__activityBar__molecule--disabled',
                    name: 'disabled',
                    disabled: true,
                },
                { id: '2', type: 'divider' },
            ]);
        });

        molecule.contextMenu.onClick((item) => {
            if (item.id === 'testPane__activityBar__molecule') {
                alert('Molecule');
            }
        });

        molecule.folderTree.onRename((ele, treeNode) => {
            const value = ele.value;
            if (!value) {
                ele.focus();
                molecule.folderTree.setValidateInfo({
                    status: 'error',
                    message: `必须提供${treeNode.fileType === 'File' ? '文件' : '文件夹'}名`,
                });
                return false;
            }
        });

        molecule.search.onSelect((treeNode) => {
            if (treeNode.fileType === 'Folder') {
                molecule.search.toggleExpandedKey(treeNode.id);
            } else {
                openFile({ id: treeNode.id, name: treeNode.name });
            }
        });

        molecule.search.onSearch(
            debounce((value) => {
                molecule.sidebar.setLoading(true);
                searchFileContents(value)
                    .then((data) => {
                        molecule.search.setResult(
                            data.map(
                                (item) =>
                                    new tree.TreeNodeModel(item.fileName, item.fileName, 'Folder', [
                                        new tree.TreeNodeModel(
                                            `${item.fileName}__${item.context}`,
                                            item.context,
                                            'File'
                                        ),
                                    ])
                            )
                        );
                        molecule.search.setExpandedKeys(data.map((i) => i.fileName));
                    })
                    .finally(() => {
                        molecule.sidebar.setLoading(false);
                    });
            }, 1000)
        );

        molecule.folderTree.onCreateRoot(() => {
            getWorkspace().then((tree) => {
                molecule.folderTree.add(tree);
                molecule.explorer.update({
                    id: molecule.builtin.getConstants().EXPLORER_ITEM_WORKSPACE,
                    name: tree.name,
                });
                molecule.sidebar.updateToolbar(molecule.builtin.getConstants().SIDEBAR_ITEM_EXPLORER, {
                    id: molecule.builtin.getConstants().EXPLORER_ITEM_WORKSPACE,
                    name: tree.name,
                });
            });
        });

        molecule.folderTree.onContextMenu((_, treeNode) => {
            if (treeNode.fileType === FileTypes.File) {
                molecule.contextMenu.add([
                    { id: 'testPane', name: '打开 testPane 面板' },
                    { id: 'testPane_divider', type: 'divider' },
                ]);
            }
        });

        molecule.folderTree.onLoad((id) => {
            molecule.folderTree.addLoading(id);
            getFiles(id as string)
                .then(([folder, files]) => {
                    molecule.folderTree.update({
                        id,
                        children: [...folder, ...files],
                    });
                })
                .catch((err) => {
                    molecule.layout.setNotification(true);
                    molecule.notification.add({
                        id: `getFiles${id}`,
                        value: err.message,
                    });
                })
                .finally(() => {
                    molecule.folderTree.removeLoading(id);
                });
        });

        molecule.folderTree.onSelect((treeNode) => {
            if (treeNode.fileType === 'File') {
                openFile(treeNode);
            }
        });

        molecule.folderTree.onUpdate((treeNode) => {
            const next = molecule.folderTree.get(treeNode.id);
            if (!next) return;
            molecule.editor.setLoading(true);
            const { groups } = molecule.editor.getState();
            groups.forEach((group) => {
                const tab = molecule.editor.getTab(treeNode.id, group.id);
                if (tab) {
                    molecule.editor.updateTab(
                        {
                            id: next.id,
                            name: treeNode.name,
                            icon: treeNode.icon || 'file',
                            value: tab.value,
                            breadcrumb: (treeNode.id as string)
                                .split('/')
                                .filter(Boolean)
                                .map((i) => ({ id: i, name: i })),
                        },
                        group.id
                    );
                }
            });
            molecule.editor.setLoading(false);
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

        molecule.folderTree.onDrop((source, target) => {
            molecule.folderTree.drop(source.id, target.id);
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
                    molecule.layout.setNotification(true);
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
