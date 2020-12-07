import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';
import { Select, Option } from 'mo/components/select';
import { useState } from 'react';

const stories = storiesOf('Select', module);
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
        const [selectedVal3, setSelectedVal3] = useState('');
        const onSelectOption = (e, option) => {
            console.log('onSelectOption', e, option);
            if (option) {
                setSelectedVal3(option.value)
            }
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
                <p>Select component.</p>
                <div>
                    <h3>使用示例 1</h3>
                    <Select
                        id="demo1"
                        key="demo1"
                        defaultValue="1"
                        style={{
                            width: 200,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        onSelect={onSelectOption}
                    >
                        <Option value="1">option - 1</Option>
                        <Option value="2">option - 2</Option>
                        <Option value="3">option - 3</Option>
                        <Option value="4" description="Test option one">
                            option - 4
                        </Option>
                    </Select>

                    <h3>使用示例 2</h3>
                    <Select
                        id="demo2"
                        key="demo2"
                        style={{
                            width: 200,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        placeholder="请选择"
                        onSelect={onSelectOption}
                    >
                        <Option value="1">option - 1</Option>
                        <Option value="2">option - 2</Option>
                        <Option value="3">option - 3</Option>
                        <Option value="4" description="Test option one">
                            option - 4
                        </Option>
                    </Select>

                    <h3>使用示例 - 3 Change Select Value</h3>
                    <Select
                        id="demo3"
                        style={{
                            width: 200,
                            color: 'rgba(255, 255, 255, 0.4)',
                            background: '#252526',
                        }}
                        placeholder="请选择"
                        value={selectedVal3}
                        key={`demo3-${selectedVal3}`}
                        defaultValue={"1"}
                        onSelect={onSelectOption}
                    >
                        <Option value="1">option - 1</Option>
                        <Option value="2">option - 2</Option>
                        <Option value="3">option - 3</Option>
                        <Option value="4" description="Test option one">
                            option - 4
                        </Option>
                    </Select>
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
