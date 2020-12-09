import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Select, Option } from 'mo/components/select';
import { useContextView } from 'mo/components/contextview';
import { Menu, MenuMode, MenuItem, SubMenu } from 'mo/components/menu';

import { propsTable } from '../common/propsTable';

const stories = storiesOf('ContextView', module);
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
        const contextView = useContextView();

        const show = (event: React.MouseEvent): void => {
            const x = event.clientX;
            const y = event.clientY;
            console.log('x, y:', x, y);
            contextView.show(
                {
                    x: x,
                    y: y,
                },
                () => {
                    return (
                        <div>
                            <h1>Hello World: </h1>
                            <p>x: {x}</p>
                            <p>y: {y}</p>
                        </div>
                    );
                }
            );
        };

        const styled: React.CSSProperties = {
            position: 'relative',
            width: 200,
            height: 200,
            margin: 'auto',
            background: '#dddddd',
        };

        return (
            <div>
                <h2>简述</h2>
                <p>
                    ContextView
                    组件主要是提供了一个可根据指定锚点位置、渲染内容的视图容器。
                </p>
                <h2>使用示例 - 1</h2>
                <div id="topLeft" onClick={show} style={styled}>
                    Click me!
                </div>
                <div>
                    <h2>使用示例 - 2</h2>
                    <Select
                        id="demo2"
                        key="demo2"
                        style={{
                            width: 200,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        placeholder="请选择"
                    >
                        <Option value="1">option - 1</Option>
                        <Option value="2">option - 2</Option>
                        <Option value="3">option - 3</Option>
                        <Option value="4" description="Test option one">
                            option - 4
                        </Option>
                    </Select>
                </div>
                <div>
                    <h2>使用示例 - 3</h2>
                    <Menu style={{ width: 200 }}>
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
