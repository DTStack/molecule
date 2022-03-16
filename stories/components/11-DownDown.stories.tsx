import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import { Menu, Icon, DropDown } from '@dtinsight/molecule/ui';
import { useState } from 'react';
import { PlacementType } from '@dtinsight/molecule';

const stories = storiesOf('DropDown', module);
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

        const [placement, setPlacement] = useState<PlacementType>('right');

        const onSelectPlacement = (e) => {
            const value = e.target.value;
            console.log('onSelectPlacement:', value);
            setPlacement(value);
        };

        return (
            <div>
                <h2>简述</h2>
                <p>
                    DownDown
                    组件主要是提供了一个可根据指定锚点位置、渲染内容的视图容器。
                </p>
                <div>
                    <h3>使用示例 1 - Hover me!</h3>
                    <DropDown
                        style={{
                            width: 45,
                            height: 45,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        trigger="hover"
                        placement="right"
                        overlay={
                            <Menu style={{ width: 200 }} data={menuData} />
                        }
                    >
                        <Icon type="menu" />
                    </DropDown>
                </div>
                <div>
                    <h3>使用示例 2 - Click me!</h3>
                    <DropDown
                        style={{
                            width: 45,
                            height: 45,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        trigger="click"
                        placement="right"
                        overlay={
                            <Menu style={{ width: 200 }} data={menuData} />
                        }
                    >
                        <Icon type="menu" />
                    </DropDown>
                </div>
                <div>
                    <h3>
                        使用示例 3 - Custom Placement
                        <select
                            onChange={onSelectPlacement}
                            defaultValue="right"
                        >
                            <option value="top">Top</option>
                            <option value="right">Right</option>
                            <option value="bottom">Bottom</option>
                            <option value="left">Left</option>
                        </select>
                    </h3>
                    <DropDown
                        style={{
                            width: 45,
                            height: 45,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        trigger="click"
                        placement={placement}
                        overlay={
                            <Menu style={{ width: 200 }} data={menuData} />
                        }
                    >
                        <Icon type="menu" />
                    </DropDown>
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
