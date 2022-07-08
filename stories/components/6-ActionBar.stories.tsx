import React from 'react';
import { storiesOf } from '@storybook/react';
import { propsTable } from '../common/propsTable';

import { ActionBar, IActionBarItemProps } from 'mo/components/actionBar';

const stories = storiesOf('ActionBar', module);

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
        const data: IActionBarItemProps<any>[] = [
            {
                id: '1',
                title: 'bar1',
                icon: 'add',
            },
            {
                id: '2',
                title: 'bar2',
                icon: 'chrome-restore',
            },
            {
                id: '3',
                title: 'bar3',
                icon: 'check',
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
