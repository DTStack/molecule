import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import { List, Item } from 'mo/components/list';
import { useState } from 'react';
import { Button } from 'mo/components';

const stories = storiesOf('List', module);
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
        const [active, setActive] = useState<string | undefined>('1');
        const [disable, setDisable] = useState<string | undefined>('1');

        const click = (e) => {
            setActive('2');
        };

        const doDisable = (e) => {
            setDisable('2');
        };

        const itemStyle = {
            width: 100,
            height: 50,
            marginRight: 10,
        };

        return (
            <div>
                <h2>简述</h2>
                <p>List component.</p>
                <h2>使用示例</h2>
                <div>
                    <h3>Mode - vertical</h3>
                    <List
                        className="custom-list-1"
                        mode="vertical"
                        current={active}
                        disable={disable}
                        onClick={click}
                    >
                        <Item id="1">Item 1</Item>
                        <Item id="2">Item 2</Item>
                        <Item id="3" disabled>
                            Item 3
                        </Item>
                    </List>
                    <Button onClick={click}>Click</Button>
                    <Button onClick={doDisable}>Disable</Button>
                </div>
                <div>
                    <h3>Mode - horizontal</h3>
                    <List className="custom-list-2" mode="horizontal">
                        <Item id="1" style={itemStyle}>
                            Item 1
                        </Item>
                        <Item id="2" style={itemStyle}>
                            Item 2
                        </Item>
                        <Item id="3" style={itemStyle}>
                            Item 3
                        </Item>
                    </List>
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
