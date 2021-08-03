import * as React from 'react';
import molecule from 'mo';
import {
    MENU_VIEW_ACTIVITYBAR,
    MENU_VIEW_MENUBAR,
    MENU_VIEW_STATUSBAR,
} from 'mo/model/workbench/menuBar';
import { FileTypes, IExtension, TreeNodeModel } from 'mo/model';

import TestPane from './testPane';
import { Entry } from './entry';
import { Position } from 'mo/model/workbench/layout';
import { randomId } from 'mo/common/utils';

export const ExtendTestPane: IExtension = {
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
            iconName: 'codicon-beaker',
            name: '测试',
        };

        molecule.activityBar.addBar(newItem);
        molecule.sidebar.add(testSidePane);

        molecule.editor.setEntry(<Entry />);

        molecule.settings.onChangeConfiguration(async (value) => {
            molecule.settings.update(value);
            const config = await molecule.settings.getConfiguration();
            const workbench: any = config.workbench;
            const layoutViewState = molecule.layout.getState();
            if (workbench?.activityBar) {
                const hidden = workbench?.activityBar.hidden!;
                molecule.layout.setState({
                    ...layoutViewState,
                    sideBar: { ...layoutViewState.sideBar, hidden },
                });
                molecule.menuBar.update(MENU_VIEW_ACTIVITYBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench?.menuBar) {
                const hidden = workbench?.menuBar.hidden;
                molecule.layout.setState({
                    ...layoutViewState,
                    menuBar: { ...layoutViewState.menuBar, hidden },
                });

                molecule.menuBar.update(MENU_VIEW_MENUBAR, {
                    icon: hidden ? '' : 'check',
                });
            }
            if (workbench.sidebar) {
                switch (workbench.sidebar) {
                    case 'left':
                        molecule.layout.setSideBarPosition(Position.LEFT);
                        break;
                    case 'right':
                        molecule.layout.setSideBarPosition(Position.RIGHT);
                        break;
                    default:
                        break;
                }
            }
            if (workbench?.statusBar) {
                const hidden = workbench?.statusBar.hidden;
                molecule.layout.setState({
                    ...layoutViewState,
                    statusBar: { ...layoutViewState.statusBar, hidden },
                });

                molecule.menuBar.update(MENU_VIEW_STATUSBAR, {
                    icon: hidden ? '' : 'check',
                });
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
                key: index.toFixed(),
                isLeaf: true,
                name: `${value}-${index}`,
            }));

            molecule.search.setResult(
                value
                    ? [
                          {
                              key: 'molecule',
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
                          text:
                              '结果集仅包含所有匹配项的子集，请使你的搜索更加精准',
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
    },
};
