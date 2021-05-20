import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import {
    Menu,
    MenuMode,
    MenuItem,
    SubMenu,
    IMenuItemProps,
} from 'mo/components/menu';
const stories = storiesOf('Menu', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'render',
        propType: '() => React.ReactNode',
        required: false,
        description: 'Default render content',
        defaultValue: null,
    },
];

stories.add(
    'Basic Usage',
    () => {
        const menuData = [
            {
                id: 'File',
                name: 'File',
                data: [
                    {
                        id: 'New File',
                        name: 'New File',
                    },
                    {
                        id: 'OpenFile',
                        name: 'Open',
                    },
                ],
            },
            {
                id: 'Edit',
                name: 'Edit',
                data: [
                    {
                        id: 'Undo',
                        name: 'Undo',
                    },
                    {
                        id: 'Redo',
                        name: 'Redo',
                    },
                ],
            },
            {
                id: 'Selection',
                name: 'Selection',
                data: [
                    {
                        id: 'SelectAll',
                        name: 'Select All',
                    },
                    {
                        id: 'CopyLineUp',
                        name: 'Copy Line Up',
                    },
                ],
            },
            {
                id: 'View',
                name: 'View',
                data: [
                    {
                        id: 'Command Palette',
                        name: 'Command Palette',
                    },
                    {
                        id: 'OpenView',
                        name: 'Open View',
                    },
                    {
                        id: 'Appearance',
                        name: 'Appearance',
                        data: [
                            {
                                icon: 'check',
                                id: 'ShowMenuBar',
                                name: 'Show Menu Bar',
                            },
                            {
                                icon: 'check',
                                id: 'ShowSideBar',
                                name: 'Show Side Bar',
                            },
                            {
                                icon: 'check',
                                id: 'ShowStatusBar',
                                name: 'Show Status Bar',
                            },
                            {
                                icon: 'check',
                                id: 'ShowActivityBar',
                                name: 'Show Activity Bar',
                            },
                        ],
                    },
                ],
            },
            {
                id: 'Run',
                name: 'Run',
                data: [
                    {
                        id: 'RunTask',
                        name: 'Run Task',
                    },
                ],
            },
            {
                id: 'Help',
                name: 'Help',
                data: [
                    {
                        id: 'About',
                        name: 'About',
                    },
                ],
            },
        ];

        const handleClick = (e: React.MouseEvent, item?: IMenuItemProps) => {
            console.log('click Menu', e, item);
        };

        return (
            <div>
                <h2>简述</h2>
                <p>
                    Menu
                    组件主要是提供了一个可根据指定锚点位置、渲染内容的视图容器。
                </p>
                <div>
                    <h3>使用示例 1 - 基本使用</h3>
                    <Menu mode={MenuMode.Horizontal} onClick={handleClick}>
                        <MenuItem>menuItem1</MenuItem>
                        <MenuItem>menuItem2</MenuItem>
                        <MenuItem>menuItem3</MenuItem>
                        <SubMenu mode={MenuMode.Vertical} name={'menuItem4'}>
                            <MenuItem>subMenuItem1</MenuItem>
                            <MenuItem>subMenuItem2</MenuItem>
                            <MenuItem>subMenuItem3</MenuItem>
                            <MenuItem>subMenuItem4</MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
                <div>
                    <h3>使用示例 2 - horizontal</h3>
                    <Menu
                        mode={MenuMode.Horizontal}
                        data={menuData}
                        onClick={handleClick}
                    />
                </div>
                <div>
                    <h3>使用示例 3 - vertical</h3>
                    <Menu
                        style={{ width: 200 }}
                        data={menuData}
                        mode={MenuMode.Vertical}
                        onClick={handleClick}
                    />
                </div>
            </div>
        );
    },
    {
        info: {
            inline: true,
            TableComponent: () => propsTable({ propDefinitions }),
            // propTablesExclude: [],
            text: `
            代码示例：
            ~~~js
            import { useContextView } from 'mo/components/contextview';

            const contextView = useContextView();

            const mouseMove = (event: React.MouseEvent): void => {
                contextView.show({
                    x: event.clientX,
                    y: event.clientY,
                }, () => {
                    return (
                        <h1>Hello World</h1>
                    );
                });
            };

            return (
                <div>
                    <div id="topLeft"
                        onMouseMove={mouseMove}
                        style={
                            {
                                position: 'absolute',
                                width: 200,
                                height: 200,
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: '#dddddd',
                            }
                        }>
                            Hover me!
                    </div>
                </div>
            );
            ～～
        `,
        },
    }
);
