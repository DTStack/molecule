import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import { Menu, MenuItem, Scrollable } from '@dtinsight/molecule/ui';

const stories = storiesOf('Scrollable', module);
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
        const items: any[] = [];
        for (let i = 0; i < 100; i++) {
            items.push(<MenuItem key={i}>{i}</MenuItem>);
        }
        return (
            <div>
                <h2>简述</h2>
                <p>
                    Scrollable, custom scrollbar component based on
                    [react-scrollbars-custom](https://xobotyi.github.io/react-scrollbars-custom/),
                    More usage, please
                    [visit](https://github.com/xobotyi/react-scrollbars-custom).
                </p>
                <div>
                    <h3>使用示例 1</h3>
                    <Menu
                        style={{
                            width: 100,
                            height: 200,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                    >
                        <Scrollable>{items}</Scrollable>
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
