import React from 'react';
import molecule from 'mo';

import { Button } from 'mo/components/button';
import { Select, Option } from 'mo/components/select';
import { IColorTheme } from 'mo/model/colorTheme';
import { FileTypes, Float, IEditorTab, TreeNodeModel } from 'mo/model';
import { ILocale } from 'mo/i18n/localization';
import { Scrollable } from 'mo/components';
import { randomId } from 'mo/common/utils';

function shortRandomId() {
    return Math.round(Math.random() * 1000);
}

export default class TestPane extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = (e, item) => {
        console.log('onClick:', e, item);
    };

    onChangeTheme = (e, option) => {
        if (option && option.value) {
            console.log('onChangeTheme:', option.value);
            molecule.colorTheme.setTheme(option.value);
        }
    };

    onChangeLocale = (e, option) => {
        if (option && option.value) {
            console.log('onChangeLocale:', option.value);
            molecule.i18n.setCurrentLocale(option.value);
        }
    };

    renderLocales() {
        const data = molecule.i18n.getLocales();
        const current = molecule.i18n.getCurrentLocale();
        const options = data.map((item: ILocale) => {
            return (
                <Option key={item.id} value={item.id}>
                    {item.name}
                </Option>
            );
        });
        return (
            <Select defaultValue={current?.id} onSelect={this.onChangeLocale}>
                {options}
            </Select>
        );
    }

    renderColorThemes() {
        const colorThemes = molecule.colorTheme.getThemes();
        const defaultTheme = molecule.colorTheme.getColorTheme();
        const options = colorThemes.map((theme: IColorTheme) => {
            return (
                <Option key={theme.id} value={theme.id}>
                    {theme.label}
                </Option>
            );
        });
        return (
            <Select
                defaultValue={defaultTheme.id}
                onSelect={this.onChangeTheme}
            >
                {options}
            </Select>
        );
    }

    render() {
        const addABar = function () {
            const id = shortRandomId();
            molecule.activityBar.add({
                id: id + '',
                name: 'ActivityBarItem-' + id,
                icon: 'edit',
            });
        };

        const addStatusBar = function () {
            const id = shortRandomId();
            molecule.statusBar.add(
                {
                    id,
                    name: 'StatusBarItem-' + id,
                    sortIndex: 2,
                },
                Float.right
            );
        };

        const removeStatusBar = function () {
            const { rightItems } = molecule.statusBar.getState();
            const lastItem = rightItems[rightItems.length - 1];
            if (lastItem?.id && lastItem.name?.includes('-')) {
                molecule.statusBar.remove(lastItem?.id);
            }
        };

        const updateStatusBar = function () {
            const { rightItems } = molecule.statusBar.getState();
            const lastItem = rightItems[rightItems.length - 1];
            if (lastItem?.id) {
                molecule.statusBar.update({
                    id: lastItem?.id,
                    name: 'TestUpdate-' + lastItem?.id,
                });
            }
        };

        const addPanel = function () {
            const id = shortRandomId();
            const panelId = `Panel-${id}`;
            molecule.panel.open({
                id: panelId,
                name: panelId,
                closable: true,
                renderPane: () => (
                    <div style={{ padding: 20 }}>Test {panelId}</div>
                ),
            });
        };

        const showHidePanel = function () {
            molecule.layout.togglePanelVisibility();
        };

        const updateOutput = () => {
            const { PANEL_OUTPUT } = molecule.builtin.getConstants();
            const editorIns = molecule.panel.outputEditorInstance;
            console.log('outputEditorInstance:', editorIns);
            molecule.panel.setActive(PANEL_OUTPUT!);
            molecule.panel.appendOutput('Number: ' + Math.random() * 10 + '\n');
        };

        const updateProblem = () => {
            const { PANEL_PROBLEMS } = molecule.builtin.getConstants();
            molecule.panel.setActive(PANEL_PROBLEMS!);
            molecule.problems.add({
                id: randomId(),
                name: 'text.tsx',
                isLeaf: false,
                value: {
                    code: 'text.tsx',
                    message: '文件夹',
                    startLineNumber: 0,
                    startColumn: 1,
                    endLineNumber: 0,
                    endColumn: 1,
                    status: 1,
                },
                children: [
                    {
                        id: randomId(),
                        name: '0-1',
                        isLeaf: true,
                        value: {
                            code: 'endLineNumber',
                            message: '提示信息',
                            startLineNumber: 0,
                            startColumn: 1,
                            endLineNumber: 0,
                            endColumn: 1,
                            status: 2,
                        },
                        children: [],
                    },
                ],
            });
        };

        const clearProblems = () => {
            molecule.problems.reset();
        };

        const newEditor = function () {
            const key = shortRandomId();
            const name = `editor-${key}.ts`;
            const tabData: IEditorTab = {
                id: `${key}`,
                name,
                icon: 'selection',
                data: {
                    value: `// editor-${key}
export interface Type<T> { new (...args: any[]): T; }
export type GenericClassDecorator<T> = (target: T) => void;`,
                    path: `desktop/molecule/${name}`,
                    language: 'typescript',
                    modified: false,
                },
                breadcrumb: [{ id: `${key}`, name }],
            };
            console.log('open editor:', tabData);
            molecule.editor.open(tabData);
        };

        molecule.editor.onUpdateTab((newTab) => {
            // const { current } = molecule.editor.getState();
            // const tab = current?.tab!;
            // molecule.editor.updateTab(
            //     {
            //         id: tab.id,
            //         data: {
            //             ...tab.data,
            //             modified: true,
            //         },
            //     },
            //     current?.id || -1
            // );
            // // TODO editorService add onSaveEditor() event.
            // current?.editorInstance.addCommand(
            //     monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
            //     () => {
            //         // ctrl + s
            //         molecule.editor.updateTab(
            //             {
            //                 id: tab.id,
            //                 data: {
            //                     ...tab.data,
            //                     modified: false,
            //                 },
            //             },
            //             current?.id || -1
            //         );
            //     }
            // );
        });
        const addANotification = function () {
            const { showNotifications } = molecule.notification.getState();
            if (!showNotifications) {
                toggleNotification();
            }
            molecule.notification.add<string>([
                {
                    id: randomId(),
                    value: 'Test Notification!',
                },
            ]);
        };

        const removeNotification = function () {
            const { data = [], showNotifications } =
                molecule.notification.getState();
            const lastItemId = data[data.length - 1]?.id;
            if (!showNotifications) {
                toggleNotification();
            }
            if (lastItemId) {
                molecule.notification.remove(lastItemId);
            }
        };

        const toggleNotification = function () {
            molecule.notification.toggleNotification();
        };

        const notice = function (msg: string) {
            const { showNotifications } = molecule.notification.getState();
            molecule.notification.clear();
            if (!showNotifications) {
                toggleNotification();
            }
            molecule.notification.add<string>([
                {
                    id: randomId(),
                    value: msg,
                },
            ]);
        };

        const appendMenu = function () {
            const id = shortRandomId();
            const name = `MenuBarItem-${id}`;
            molecule.menuBar.append(
                {
                    id: id + '',
                    name,
                    icon: '',
                },
                'Edit'
            );
            notice(
                `${name} has been added to MenuBar's Edit menu and \n you can open the menu to view it`
            );
        };

        const removeMenu = function () {
            const { ACTION_QUICK_SELECT_ALL } = molecule.builtin.getConstants();
            molecule.menuBar.remove(ACTION_QUICK_SELECT_ALL!);
            notice(
                `The SelectAll menu item under the MenuBar's Selection menu has been removed`
            );
        };

        const updateMenu = function () {
            const { ACTION_QUICK_UNDO } = molecule.builtin.getConstants();
            molecule.menuBar.update(ACTION_QUICK_UNDO!, { icon: 'check' });
            notice(
                `The Undo menu item under the MenuBar's Edit menu has been updated`
            );
        };

        const addSettingsItem = function () {
            molecule.settings.append({
                project: {
                    a: {
                        name: `${Math.floor(Math.random() * 10) + 1}`,
                    },
                },
            });
            molecule.settings.openSettingsInEditor();
            notice(
                `The "project.a.name" property has been added to the settings.json file`
            );
        };

        const addExplorer = () => {
            const id = ~~(Math.random() * 10) + new Date().getTime();
            const panels = [
                {
                    id: `Panel-${id}`,
                    name: 'Panel-' + id,
                    toolbar: [
                        {
                            icon: 'remove',
                            id: 'explorer.remove',
                            title: 'remove this panel',
                        },
                    ],
                },
            ];
            molecule.explorer.addPanel(panels);
            notice(
                `Panel-${id} has been added to Explorer and you can switch to Explorer to view it`
            );
        };

        const addRootFolder = () => {
            const children = new Array(50).fill(1).map(
                (_, index) =>
                    new TreeNodeModel({
                        id: index,
                        name: `test_sql_${index}.sql`,
                        fileType: FileTypes.File,
                        isLeaf: true,
                        content: `SHOW TABLES;

SELECT 1;

DESC 6d_target_test;

CREATE TABLE IF NOT EXISTS ods_order_header1213 (
order_header_id     STRING COMMENT '订单头id',
order_date          STRING COMMENT '订单日期',
shop_id             STRING COMMENT '店铺id',
customer_id         STRING COMMENT '客户id',
order_status        BIGINT COMMENT '订单状态',
pay_date            BIGINT COMMENT '支付日期'
) COMMENT '销售订单明细表'
PARTITIONED BY (DE STRING) LIFECYCLE 1000;
`,
                    })
            );
            molecule.folderTree.add(
                new TreeNodeModel({
                    id: randomId(),
                    name: 'Sample SQLs',
                    fileType: FileTypes.RootFolder,
                    children,
                })
            );
            notice(
                `The root folder has been added to Explorer and you can switch to Explorer to view it`
            );
        };

        const toggleMenuBarMode = () => {
            const currentMode = molecule.layout.getMenuBarMode();
            const newMode =
                currentMode === 'horizontal' ? 'vertical' : 'horizontal';
            molecule.layout.setMenuBarMode(newMode);
        };

        return (
            <Scrollable isShowShadow>
                <div style={{ padding: 20 }}>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Simple examples:</h2>
                        <Button onClick={newEditor}>New Editor</Button>
                        <Button onClick={addABar}>Add ActivityBar Item</Button>
                        <Button onClick={addSettingsItem}>
                            Append Settings Item
                        </Button>
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Select a ColorTheme:</h2>
                        {this.renderColorThemes()}
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Select a localization language:</h2>
                        {this.renderLocales()}
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Panel:</h2>
                        <Button onClick={addPanel}>Add Panel</Button>
                        <Button onClick={showHidePanel}>Show/Hide Panel</Button>
                        <Button onClick={updateOutput}>Update Output</Button>
                        <Button onClick={updateProblem}>Update Problem</Button>
                        <Button onClick={clearProblems}>Clear Problem</Button>
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Notification:</h2>
                        <Button onClick={addANotification}>
                            Add Notification Item
                        </Button>
                        <Button onClick={removeNotification}>
                            Remove Notification Item
                        </Button>
                        <Button onClick={toggleNotification}>
                            Toggle Notification
                        </Button>
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>MenuBar:</h2>
                        <Button onClick={appendMenu}>Add MenuBar Item</Button>
                        <Button onClick={removeMenu}>
                            Remove MenuBar Item{' '}
                        </Button>
                        <Button onClick={updateMenu}>
                            Update MenuBar Item
                        </Button>
                        <Button onClick={toggleMenuBarMode}>
                            Toggle MenuBar mode
                        </Button>
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Exploer:</h2>
                        <Button onClick={addExplorer}>
                            Add Explorer Panel
                        </Button>
                        <Button onClick={addRootFolder}>Add Root Folder</Button>
                    </div>
                    <div>
                        <h2>StatusBar:</h2>
                        <molecule.component.Button onClick={addStatusBar}>
                            Add StatusBar Item
                        </molecule.component.Button>
                        <molecule.component.Button onClick={removeStatusBar}>
                            Remove StatusBar Item
                        </molecule.component.Button>
                        <molecule.component.Button onClick={updateStatusBar}>
                            Update StatusBar Item
                        </molecule.component.Button>
                    </div>
                </div>
            </Scrollable>
        );
    }
}
