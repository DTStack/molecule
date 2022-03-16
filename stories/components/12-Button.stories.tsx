import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import { Button, Icon } from '@dtinsight/molecule/ui';

const stories = storiesOf('Button', module);
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
        return (
            <div>
                <h2>简述</h2>
                <p>Button Component</p>
                <div>
                    <h3>使用示例 1</h3>
                    <Button>Btn</Button>
                </div>
                <div>
                    <h3>使用示例 2 - size</h3>
                    <Button>Normal Button</Button>
                    <Button size="large">Large Button</Button>
                </div>
                <div>
                    <h3>使用示例 2 - Icon</h3>
                    <Button>
                        <Icon type="refresh" />
                    </Button>
                    <Button
                        style={{
                            width: 100,
                        }}
                    >
                        <Icon type="play" /> <span>Play</span>
                    </Button>
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
