import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';
import molecule from '@dtinsight/molecule';

const { Icon, Button } = molecule.component;

const stories = storiesOf('Icon', module);
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
                <p>
                    This `Icon` Component based on{' '}
                    <a href="https://microsoft.github.io/vscode-codicons/dist/codicon.html">
                        vscode codicons
                    </a>
                    , so you just can using icons from this library.
                </p>
                <div>
                    <h3>使用示例 - Basic</h3>
                    <div style={{ display: 'flex' }}>
                        <Button>
                            <Icon type="edit" />
                            edit
                        </Button>
                        <Button>
                            <Icon type="check" />
                            check
                        </Button>
                    </div>
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
