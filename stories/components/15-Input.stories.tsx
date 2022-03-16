import React from 'react';
import { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Input } from '@dtinsight/molecule/ui';
import { propsTable } from '../common/propsTable';

const TextArea = Input.TextArea;
const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'autoSize',
        propType: 'boolean | object',
        required: false,
        description:
            '自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
        defaultValue: 'false',
    },
    {
        property: 'defaultValue',
        propType: 'string',
        required: false,
        description: '输入框默认内容',
        defaultValue: '--',
    },
    {
        property: 'value',
        propType: 'string',
        required: false,
        description: '输入框内容',
        defaultValue: '--',
    },
    {
        property: 'maxLength',
        propType: 'number',
        required: false,
        description: '内容最大长度',
        defaultValue: '--',
    },
    {
        property: 'showCount',
        propType: 'boolean',
        required: false,
        description: '是否展示字数',
        defaultValue: 'false',
    },
    {
        property: 'onPressEnter',
        propType: 'function(e)	',
        required: false,
        description: '按下回车的回调',
        defaultValue: '--',
    },
    {
        property: 'onResize',
        propType: 'function({ width, height })',
        required: false,
        description: 'resize 回调',
        defaultValue: '--',
    },
];

const renderMultipeTextArea = () => {
    const [value, setValue] = useState(10);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const onChange = useCallback((e) => setValue(e.target.value), [value]);
    const onPressEnter = (e) => console.log(`enter key is pressed`);
    const onResize = useCallback(
        ({ width, height }) => {
            console.log(`size is changed, width:${width} height:${height}`);
            setSize((resize) => ({ ...size, width, height }));
        },
        [size.width, size.height]
    );

    return (
        <>
            <TextArea
                placeholder="Autosize height based on content lines"
                autoSize
            />
            <div style={{ margin: '10px 0' }} />
            <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autoSize={{ minRows: 2, maxRows: 6 }}
            />
            <div style={{ margin: '10px 0' }} />
            <TextArea
                value={value}
                onChange={onChange}
                onResize={onResize}
                onPressEnter={onPressEnter}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
        </>
    );
};

stories.add(
    'Basic Usage',
    () => {
        const [inputValue, setInputValue] = useState('');
        const handleInputChange = useCallback(
            (e) => setInputValue(e.target.value),
            [inputValue]
        );

        return (
            <>
                <h2>简述</h2>
                <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
                <h3>使用示例 1 - Input基本使用</h3>
                <Input placeholder="basic usage" />
                <h3>使用示例 2 - Input默认值</h3>
                <Input
                    placeholder="input default value"
                    defaultValue="default value"
                />
                <h3>
                    使用示例 3 - 输入框定义了三种尺寸（大、默认），高度分别为
                    40px、32px
                </h3>
                <Input size="large" placeholder="please input large size" />
                <Input
                    placeholder="input default size"
                    value={inputValue}
                    style={{ marginTop: 10 }}
                    onChange={handleInputChange}
                    onPressEnter={(e) => console.log('enter key is pressed')}
                />
                <h3>使用示例 4 - 带字数提示的文本域</h3>
                <TextArea
                    placeholder="replace"
                    maxLength={100}
                    showCount={true}
                    style={{ marginTop: 10 }}
                />
                <h3>使用示例 5 - 用于多行输入</h3>
                <TextArea
                    rows={4}
                    placeholder="input multipe line"
                    defaultValue="hi textarea"
                />
                <h3>
                    使用示例 6 - autoSize 属性适用于 textarea
                    节点，并且只有高度会自动变化。另外 autoSize
                    可以设定为一个对象，指定最小行数和最大行数。
                </h3>
                {renderMultipeTextArea()}
            </>
        );
    },
    {
        info: {
            text: `
            TextTrea代码示例：
            ~~~js
            const [value, setValue] = useState(10)
            const onChange = useCallback((e) => setValue(e.target.value), [value])
            const onPressEnter = e => ('enter key is pressed')
            return (
                <>
                    <TextArea placeholder="Autosize height based on content lines" autoSize />
                    <div style={{ margin: '10px 0' }} />
                    <TextArea
                        placeholder="Autosize height with minimum and maximum number of lines"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                    />
                    <div style={{ margin: '10px 0' }} />
                    <TextArea
                        value={value}
                        onChange={onChange}
                        onPressEnter={onPressEnter}
                        placeholder="Controlled autosize"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </>
            );              
            ~~~
        `,
            TableComponent: () => propsTable({ propDefinitions }),
        },
    }
);
