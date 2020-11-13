import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import ActionBar, { IActionBarItem } from 'mo/components/actionbar';

const stories = storiesOf('ActionBar', module);
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
        const data: IActionBarItem<any>[] = [
            {
                id: '1',
                name: 'bar1',
                iconName: 'codicon-add',
            },
            {
                id: '2',
                name: 'bar2',
                iconName: 'codicon-chrome-restore',
            },
            {
                id: '3',
                name: 'bar3',
                iconName: 'codicon-check',
            },
        ];

        const onClick = (e, item) => {
            console.log('onClick:', e, item);
        };

        return (
            <div>
                <h2>简述</h2>
                <p>
                    ActionBar
                    组件主要是提供了一个可根据指定锚点位置、渲染内容的视图容器。
                </p>
                <h2>示例</h2>
                <div
                    className="toolbar"
                    style={{
                        width: 200,
                        border: '1px solid #222',
                    }}
                >
                    <ActionBar data={data} onClick={onClick} />
                </div>
            </div>
        );
    },
    {
        info: {
            inline: true,
            TableComponent: () => propsTable({ propDefinitions }),
            propTablesExclude: [],
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
