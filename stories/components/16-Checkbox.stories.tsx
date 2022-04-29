import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';
import molecule from '@dtinsight/molecule';

const { Checkbox } = molecule.component;
const stories = storiesOf('Checkbox', module);
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
        const onSelectOption = (e, option) => {
            console.log('onSelectOption', e, option);
        };
        return (
            <div
                style={{
                    backgroundColor: 'rgb(37, 37, 38)',
                    color: 'rgb(240, 240, 240)',
                    height: 500,
                    padding: 20,
                }}
            >
                <h2>简述</h2>
                <p>Checkbox component.</p>

                <h3>使用示例 1</h3>
                <div>
                    <Checkbox
                        id="checkbox1"
                        value="1"
                        style={{
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        onChange={onSelectOption}
                    >
                        Controls whether and how files path are shown in the
                        breadcrumbs view.
                    </Checkbox>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Checkbox
                        id="checkbox2"
                        value="2"
                        style={{
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        onChange={onSelectOption}
                    >
                        Render breadcrumb items with icons.
                    </Checkbox>
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
