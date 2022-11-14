import React from 'react';
import molecule from 'mo';

import { Button } from 'mo/components/button';
import { Select, Option } from 'mo/components/select';
import { IColorTheme } from 'mo/model/colorTheme';
import { FileTypes, Float, IEditorTab, TreeNodeModel } from 'mo/model';
import { ILocale } from 'mo/i18n/localization';
import { Scrollbar } from 'mo/components';
import { randomId } from 'mo/common/utils';
import LocaleNotification from 'mo/workbench/notification/notificationPane/localeNotification';

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

        const showHideActivityBar = function () {
            molecule.layout.toggleActivityBarVisibility();
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

        const showHideStatusBar = () => {
            molecule.layout.toggleStatusBarVisibility();
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

        const setExpandedPanels = () => {
            const constants = molecule.builtin.getConstants();
            const { SAMPLE_FOLDER_PANEL_ID } = constants as {
                SAMPLE_FOLDER_PANEL_ID: string;
            };
            molecule.explorer.setExpandedPanels([SAMPLE_FOLDER_PANEL_ID]);
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

        const toggleEditorStatus = () => {
            const { current } = molecule.editor.getState();
            if (current?.tab) {
                molecule.editor.updateTab({
                    id: current.tab.id,
                    status:
                        current.tab.status === 'edited' ? undefined : 'edited',
                });
            }
        };

        const newPane = function () {
            const key = shortRandomId();
            const name = `pane-${key}.ts`;
            const tabData: IEditorTab = {
                id: `${key}`,
                name,
                icon: 'selection',
                data: {},
                breadcrumb: [{ id: `${key}`, name }],
                renderPane: (tabData, tab, group) => {
                    console.log(tabData, tab, group);
                    const style: React.CSSProperties = {
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        fontSize: 48,
                        alignItems: 'center',
                        justifyContent: 'center',
                    };
                    return <div style={style}>{name}</div>;
                },
            };
            molecule.editor.open(tabData);
        };

        const updateEntryPage = () => {
            const style: React.CSSProperties = {
                display: 'flex',
                width: '100%',
                height: '100%',
                fontSize: 48,
                alignItems: 'center',
                justifyContent: 'center',
            };
            const entry = <div style={style}>Welcome</div>;
            molecule.editor.setEntry(entry);
        };

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

        const addLocaleNotification = function () {
            molecule.notification.add([
                {
                    id: 'locale',
                    value: 'test',
                    render: () => <LocaleNotification locale="简体中文" />,
                },
            ]);
            if (!molecule.notification.getState().showNotifications) {
                molecule.notification.toggleNotification();
            }
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

        const toggleMenuBarMode = () => {
            const currentMode = molecule.layout.getMenuBarMode();
            const newMode =
                currentMode === 'horizontal' ? 'vertical' : 'horizontal';
            molecule.layout.setMenuBarMode(newMode);
        };

        const updateMenuBarLogo = () => {
            const randomColor = `hsl(${Math.floor(
                Math.random() * 360
            )}, 100%, 50%)`;
            const logo = (
                <span style={{ backgroundColor: randomColor }}>MO</span>
            );
            molecule.layout.setMenuBarMode('horizontal');
            molecule.menuBar.setState({ logo });
        };

        const showHideMenuBar = () => {
            molecule.layout.toggleMenuBarVisibility();
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

        const toggleAuxiliaryBar = () => {
            molecule.layout.setAuxiliaryBar((hidden) => !hidden);
        };

        const setAuxiliaryToTabs = () => {
            molecule.auxiliaryBar.setMode('tabs');
            molecule.auxiliaryBar.addAuxiliaryBar([
                {
                    key: ~~(Math.random() * 10) + new Date().getTime(),
                    title: '任务属性',
                },
            ]);
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

        return (
            <Scrollbar isShowShadow>
                <div style={{ padding: 20 }}>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Simple examples:</h2>
                        <Button onClick={newEditor}>New Editor</Button>
                        <Button onClick={toggleEditorStatus}>
                            Toggle Editor status
                        </Button>
                        <Button onClick={newPane}>New Pane</Button>
                        <Button onClick={updateEntryPage}>
                            Update Entry Page
                        </Button>
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
                        <h2>ActivityBar:</h2>
                        <Button onClick={addABar}>Add ActivityBar Item</Button>
                        <Button onClick={showHideActivityBar}>
                            Show/Hide ActivityBar
                        </Button>
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Auxiliary Bar:</h2>
                        <Button onClick={toggleAuxiliaryBar}>
                            Show/Hide Auxiliary Bar
                        </Button>
                        <Button onClick={setAuxiliaryToTabs}>
                            Set Auxiliary Bar mode to 「Tabs」
                        </Button>
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
                        <Button onClick={addLocaleNotification}>
                            Add a locale Notification
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
                            Remove MenuBar Item
                        </Button>
                        <Button onClick={updateMenu}>
                            Update MenuBar Item
                        </Button>
                        <Button onClick={toggleMenuBarMode}>
                            Toggle MenuBar mode
                        </Button>
                        <Button onClick={updateMenuBarLogo}>
                            Update MenuBar Logo
                        </Button>
                        <Button onClick={showHideMenuBar}>
                            Show/Hide MenuBar
                        </Button>
                    </div>
                    <div style={{ marginBottom: 50 }}>
                        <h2>Exploer:</h2>
                        <Button onClick={addExplorer}>
                            Add Explorer Panel
                        </Button>
                        <Button onClick={setExpandedPanels}>
                            setExpandedPanels
                        </Button>
                        <Button onClick={addRootFolder}>Add Root Folder</Button>
                    </div>
                    <div>
                        <h2>StatusBar:</h2>
                        <Button onClick={addStatusBar}>
                            Add StatusBar Item
                        </Button>
                        <Button onClick={removeStatusBar}>
                            Remove StatusBar Item
                        </Button>
                        <Button onClick={updateStatusBar}>
                            Update StatusBar Item
                        </Button>
                        <Button onClick={showHideStatusBar}>
                            Show/Hide StatusBar
                        </Button>
                    </div>
                </div>
            </Scrollbar>
        );
    }
}
