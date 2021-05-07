import * as React from 'react';
import * as monaco from 'monaco-editor';
import {
    activityBarService,
    colorThemeService,
    menuBarService,
    panelService,
    settingsService,
} from 'mo';
import { editorService, notificationService } from 'mo';
import { Button } from 'mo/components/button';
import { Select, Option } from 'mo/components/select';
import { IColorTheme } from 'mo/model/colorTheme';
import { IEditorTab } from 'mo/model';

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
            colorThemeService.applyTheme(option.value);
        }
    };

    renderColorThemes() {
        const colorThemes = colorThemeService.getThemes();
        const defaultTheme = colorThemeService.colorTheme;
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
            activityBarService.addBar({
                id: id + '',
                name: 'folder' + id,
                iconName: 'codicon-edit',
            });
        };

        const addPanel = function () {
            const id = Math.random() * 10 + 1;
            panelService.open({
                id: 'Pane' + id,
                name: 'Panel' + id,
                render: () => <h1>Test Pane</h1>,
            });
        };

        const showHidePanel = function () {
            panelService.showHide();
        };

        const updateOutput = () => {
            panelService.appendOutput('Number: ' + Math.random() * 10);
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
            editorService.open(tabData);
        };

        editorService.onUpdateTab((newTab) => {
            const { current } = editorService.getState();
            const tab = current?.tab!;
            editorService.updateTab(
                {
                    id: tab.id,
                    data: {
                        ...tab.data,
                        modified: true,
                    },
                },
                current?.id || -1
            );
            // TODO editorService add onSaveEditor() event.
            current?.editorInstance.addCommand(
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
                () => {
                    // ctrl + s
                    editorService.updateTab(
                        {
                            id: tab.id,
                            data: {
                                ...tab.data,
                                modified: false,
                            },
                        },
                        current?.id || -1
                    );
                }
            );
        });
        let notify;
        const addANotification = function () {
            notify = notificationService.addNotifications<string>([
                {
                    value: 'Test Notification!',
                },
            ]);
            console.log('Add Notification index:', notify);
        };

        const removeNotification = function () {
            notificationService.removeNotification(notify.id);
        };

        const openCommand = function () {};

        const appendMenu = function () {
            const id = Math.random() * 10 + 1;
            menuBarService.add(
                {
                    id: id + '',
                    name: 'menuBar' + id,
                    iconName: '',
                },
                'Edit'
            );
        };

        const removeMenu = function () {
            menuBarService.remove('SelectAll');
        };

        const updateMenu = function () {
            menuBarService.update('SelectAll', { icon: 'check' });
        };

        const addSettingsItem = function () {
            settingsService.append({
                project: {
                    a: {
                        name: `${Math.floor(Math.random() * 10) + 1}`,
                    },
                },
            });
        };

        return (
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
            </div>
        );
    }
}
