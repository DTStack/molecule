import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { propsTable } from '../common/propsTable';

import { Breadcrumb, IBreadcrumbItem } from 'mo/components/breadcrumb';

const stories = storiesOf('Breadcrumb', module);
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
        const click = (e, item) => {
            console.log('onClick breadcrumb item.', e, item);
        };

        const data: IBreadcrumbItem[] = [
            {
                id: 'item1',
                name: 'item1',
                href: '#',
            },
            {
                id: 'item2',
                name: 'item1',
                href: '#',
            },
            {
                id: 'item3',
                name: 'item1',
                href: '#',
            },
        ];

        return (
            <div>
                <h2>简述</h2>
                <p>Breadcrumb component.</p>
                <h2>使用示例</h2>
                <div>
                    <h3>Basic</h3>
                    <Breadcrumb
                        className="custom-list-1"
                        onClick={click}
                        routes={data}
                    />
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
