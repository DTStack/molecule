import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import { List, Item } from 'mo/components/list';
import { useState } from 'react';

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

        const [active, setActive] = useState('1');

        const click = (e, item) => {
            console.log('item.', e, item);
            setActive(item.id);
        }

        return (
            <div>
                <h2>简述</h2>
                <p>
                    List component.
                </p>
                <h2>使用示例</h2>
                <div>
                    <h3>Direction - vertical</h3>
                    <List className="custom-list-1" mode="vertical" onClick={click} active={active}>
                        <Item id="1">Item 1</Item>
                        <Item id="2">Item 1</Item>
                        <Item id="3">Item 1</Item>
                    </List>
                </div>
                <div>
                    <h3>Direction - horizontal</h3>
                    <List className="custom-list-2" mode="horizontal">
                        <Item>Item 1</Item>
                        <Item>Item 1</Item>
                        <Item>Item 1</Item>
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
