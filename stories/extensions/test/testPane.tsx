import * as React from 'react';
import molecule from 'mo';

import { Button } from 'mo/components/button';
import { Select, Option } from 'mo/components/select';
import { IColorTheme } from 'mo/model/colorTheme';
import { FileTypes, IEditorTab, TreeNodeModel } from 'mo/model';
import { ILocale } from 'mo/i18n/localization';
import { localize } from 'mo/i18n/localize';
import { Scrollable } from 'mo/components';

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
            molecule.colorTheme.applyTheme(option.value);
        }
    };

    onChangeLocale = (e, option) => {
        if (option && option.value) {
            console.log('onChangeLocale:', option.value);
            molecule.il8n.setCurrentLocale(option.value);
        }
    };

    renderLocales() {
        const data = molecule.il8n.getLocales();
        const current = molecule.il8n.getCurrentLocale();
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
        const defaultTheme = molecule.colorTheme.colorTheme;
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
            const id = Math.random() * 10 + 1;
            molecule.activityBar.addBar({
                id: id + '',
                name: 'folder' + id,
                iconName: 'codicon-edit',
            });
        };

        const addPanel = function () {
            const id = Math.random() * 10 + 1;
            molecule.panel.open({
                id: 'Pane' + id,
                name: 'Panel' + id,
                render: () => <h1>Test Pane</h1>,
            });
        };

        const showHidePanel = function () {
            molecule.layout.setPanelHidden();
        };

        const updateOutput = () => {
            molecule.panel.appendOutput('Number: ' + Math.random() * 10);
        };

        const newEditor = function () {
            const key = (Math.random() * 10 + 1).toFixed(2);
            const tabData: IEditorTab = {
                id: `${key}`,
                name: `editor${key}.ts`,
                data: {
                    value: `${key}export interface Type<T> { new(...args: any[]): T;}
export type GenericClassDecorator<T> = (target: T) => void;`,
                    path: 'desktop/molecule/editor1',
                    language: 'typescript',
                    modified: false,
                },
                breadcrumb: [{ id: `${key}`, name: `editor.ts` }],
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
            molecule.notification.addNotifications<string>([
                {
                    value: 'Test Notification!',
                },
            ]);
        };

        const removeNotification = function () {
            const { data = [] } = molecule.notification.getState();
            const lastItemId = data[data.length - 1]?.id;
            if (lastItemId) {
                molecule.notification.removeNotification(lastItemId);
            }
        };

        const openCommand = function () {};

        const appendMenu = function () {
            const id = Math.random() * 10 + 1;
            molecule.menuBar.add(
                {
                    id: id + '',
                    name: 'menuBar' + id,
                    iconName: '',
                },
                'Edit'
            );
        };

        const removeMenu = function () {
            molecule.menuBar.remove('SelectAll');
        };

        const updateMenu = function () {
            molecule.menuBar.update('SelectAll', { icon: 'check' });
        };

        const addSettingsItem = function () {
            molecule.settings.append({
                project: {
                    a: {
                        name: `${Math.floor(Math.random() * 10) + 1}`,
                    },
                },
            });
        };

        const addExplorer = () => {
            const id = ~~(Math.random() * 10) + new Date().getTime();
            const panels = [
                {
                    id: `Panel-${id}`,
                    name: 'Panel-' + id,
                    toolbar: [
                        {
                            iconName: 'codicon-remove',
                            id: 'explorer.remove',
                            title: 'remove this panel',
                        },
                    ],
                },
            ];
            molecule.explorer.addPanel(panels);
        };

        const addRootFolder = () => {
            const children = new Array(50).fill(1).map(
                (_, index) =>
                    new TreeNodeModel({
                        id: index,
                        name: `test_sql_${index}.txt`,
                        fileType: FileTypes.File,
                        icon: molecule.folderTree.getFileIconByExtensionName(
                            'test_sql.txt',
                            FileTypes.File
                        ),
                        content: `show tables;
SELECT 1;
DESC 6d_target_test;
create table if not exists ods_order_header1213 (
order_header_id     string comment '订单头id'
,order_date          bigint comment '订单日期'
,shop_id             string comment '店铺id'
,customer_id         string comment '客户id'
,order_status        bigint comment '订单状态'
,pay_date            bigint comment '支付日期'
)comment '销售订单明细表'
PARTITIONED BY (ds string) lifecycle 1000;
`,
                    })
            );
            molecule.folderTree.addRootFolder?.(
                new TreeNodeModel({
                    name: 'molecule_temp',
                    fileType: FileTypes.RootFolder,
                    children,
                })
            );
        };

        return (
            <Scrollable>
                <div>
                    <div style={{ margin: '50px 20px' }}>
                        <Button onClick={addABar}>Add Bar</Button>
                        <Button onClick={newEditor}>New Editor</Button>
                        <Button onClick={openCommand}>Command Palette</Button>
                    </div>
                    <div style={{ margin: '50px 20px' }}>
                        <h1>Select a ColorTheme:</h1>
                        {this.renderColorThemes()}
                    </div>
                    <div style={{ margin: '50px 20px' }}>
                        <h1>Select a localization language:</h1>
                        {this.renderLocales()}
                        {localize('test.id', 'aaaa')}
                    </div>
                    <div style={{ margin: '50px 20px' }}>
                        <h2>Add a new Panel:</h2>
                        <Button onClick={addPanel}>Add Panel</Button>
                        <Button onClick={showHidePanel}>Show/Hide Panel</Button>
                        <Button onClick={updateOutput}>Update Output</Button>
                    </div>
                    <div style={{ margin: '50px 20px' }}>
                        <h2>Notification:</h2>
                        <Button onClick={addANotification}>
                            Add A Notification
                        </Button>
                        <Button onClick={removeNotification}>
                            Remove A Notification
                        </Button>
                    </div>
                    <div style={{ margin: '50px 20px' }}>
                        <h2>MenuBar:</h2>
                        <Button onClick={appendMenu}>Add MenuBar</Button>
                        <Button onClick={removeMenu}>Remove MenuBar</Button>
                        <Button onClick={updateMenu}>Update MenuBar</Button>
                        <Button onClick={addSettingsItem}>
                            Append Settings Item
                        </Button>
                    </div>
                    <div style={{ margin: '50px 20px' }}>
                        <h2>Exploer:</h2>
                        <Button onClick={addExplorer}>
                            Add Explorer Panel
                        </Button>
                        <Button onClick={addRootFolder}>Add Root Folder</Button>
                    </div>
                    <div>
                        <molecule.component.Button>
                            AAA
                        </molecule.component.Button>
                    </div>
                </div>
            </Scrollable>
        );
    }
}
