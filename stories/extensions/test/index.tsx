import React from 'react';
import molecule from 'mo';

import { FileTypes, IExtension, TreeNodeModel } from 'mo/model';

import TestPane from './testPane';
import { randomId } from 'mo/common/utils';
import { ListenerEventContext } from 'mo/common/event';
import { UniqueId } from 'mo/common/types';

export const ExtendsTestPane: IExtension = {
    id: 'ExtendsTestPane',
    name: 'Test Pane',
    dispose() {},
    activate() {
        const TEST_PANE_ID = 'ActivityBarTestPane';
        const testSidePane = {
            id: TEST_PANE_ID,
            title: 'TEST',
            render() {
                return <TestPane />;
            },
        };

        const newItem = {
            id: TEST_PANE_ID,
            icon: 'beaker',
            name: '测试',
        };

        molecule.activityBar.add(newItem);
        molecule.sidebar.add(testSidePane);

        molecule.settings.onChangeSettings((value) => {
            console.log('onChangeSettings:', value);
        });

        molecule.menuBar.onSelect((menuId) => {
            const openFile = () => {
                const input = document.createElement('input');
                const getFile = (event: Event) => {
                    const input = event.target as HTMLInputElement;
                    const file = (input.files?.[0] || {
                        arrayBuffer: Promise.resolve(null),
                    }) as File;

                    input?.remove();
                    if (!file) return;
                    file.arrayBuffer().then((res) => {
                        if (!res) return;
                        /**
                         * TODO: Also need to deal with the display of static resources such as pictures
                         */

                        const decoder = new TextDecoder();
                        const nameArr = file.name?.split('.') || [];
                        const extName = nameArr[nameArr.length - 1] || '';
                        const typeAutomation = {
                            js: 'javascript',
                            jsx: 'javascript',
                            ts: 'typescript',
                            tsx: 'typescript',
                            html: 'html',
                            css: 'css',
                            scss: 'css',
                            less: 'css',
                            json: 'json',
                        };
                        const contentFile = {
                            data: {
                                value: decoder.decode(res),
                                languages: typeAutomation[extName] || '',
                            },
                            fileType: 'File',
                            icon: 'file-code',
                            id: file.lastModified.toString() + file.name,
                            location: `molecule/${file.name}`,
                            name: file.name,
                        };

                        molecule.editor.open(contentFile);
                    });
                };

                input.type = 'file';
                input.hidden = true;
                input.addEventListener('change', getFile, { once: true });
                document.body.append(input);
                input.click();
            };

            const { MENU_FILE_OPEN } = molecule.builtin.getConstants();
            switch (menuId) {
                case MENU_FILE_OPEN:
                    openFile();
                    break;
            }
        });

        molecule.folderTree.onCreate((type, nodeId) => {
            if (type === 'RootFolder') {
                molecule.folderTree.add(
                    new TreeNodeModel({
                        id: randomId(),
                        name: 'molecule',
                        isLeaf: false,
                        location: 'molecule',
                        fileType: FileTypes.RootFolder,
                    })
                );
            } else {
                molecule.folderTree.add(
                    new TreeNodeModel({
                        id: randomId(),
                        name: '',
                        fileType: type,
                        icon: 'file-code',
                        isLeaf: type === 'File',
                        isEditable: true,
                    }),
                    nodeId
                );
            }
        });
        molecule.search.onSearch((value) => {
            const children = new Array(5).fill(1).map((_, index) => ({
                id: index.toFixed(),
                isLeaf: true,
                name: `${value}-${index}`,
            }));

            molecule.search.setResult(
                value
                    ? [
                          {
                              id: 'molecule',
                              name: 'molecule.test.js',
                              isLeaf: false,
                              children,
                          },
                      ]
                    : []
            );

            molecule.search.setValidateInfo(
                value
                    ? {
                          type: 'warning',
                          text: '结果集仅包含所有匹配项的子集，请使你的搜索更加精准',
                      }
                    : ''
            );
        });

        molecule.search.onResultClick((item) => {
            console.log('item:', item);
        });

        molecule.folderTree.onSelectFile((file) => {
            const { name } = file;
            const nameArr = name?.split('.') || [];
            const extName = nameArr[nameArr.length - 1] || '';
            const tabData = {
                ...file,
                id: `${file.id}`?.split('_')?.[0],
                modified: false,
                data: {
                    value: file.content,
                    path: file.location,
                    language: extName,
                    ...(file.data || {}),
                },
            };
            molecule.editor.open(tabData);
        });

        molecule.folderTree.onRemove((id) => {
            molecule.folderTree.remove(id);
        });

        molecule.explorer.onCollapseAllFolders(() => {
            molecule.folderTree.setExpandKeys([]);
        });

        function closeTabHandler(
            this: ListenerEventContext,
            tabId: UniqueId,
            groupId?: UniqueId
        ) {
            this.stopDelivery();
            molecule.component.Modal.confirm({
                title: '确认关闭 tab 吗',
                content: '关闭后数据会丢失',
                onOk() {
                    if (groupId !== undefined && tabId !== undefined) {
                        molecule.editor.closeTab(tabId, groupId);
                    }
                },
                onCancel() {},
            });
        }
        molecule.editorTree.onClose(closeTabHandler);
        molecule.editor.onCloseTab(closeTabHandler);

        molecule.auxiliaryBar.onTabClick(() => {
            const tab = molecule.auxiliaryBar.getCurrentTab();
            const TabContent = () => {
                return (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div>
                            自定义面板
                            <pre>{JSON.stringify(tab, null, 2)}</pre>
                        </div>
                    </div>
                );
            };

            if (tab) {
                molecule.auxiliaryBar.setChildren(<TabContent />);
            }

            molecule.layout.setAuxiliaryBar(!tab);
        });

        molecule.editor.onEditorInstanceMount((editorInstance) => {
            console.log('editorInstance:', editorInstance);
        });
    },
};
