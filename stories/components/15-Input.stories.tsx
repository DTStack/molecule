import * as React from 'react';
import Input from 'mo/components/input';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const TextArea = Input.TextArea;
const stories = storiesOf('InpuxBox', module);
stories.addDecorator(withKnobs);

stories.add('Basic Usage', () => {
    const styled: React.CSSProperties = {
        background: '#1e1e1e',
        height: 100,
        padding: 10,
    };
    return (
        <>
            <h2>简述</h2>
            <p>Inputbox</p>
            <h3>使用示例 1 - 基本使用</h3>
            <div style={styled}>
                <Input placeholder="Search" />
                <TextArea
                    placeholder="replace"
                    style={{ marginTop: 10 }}
                />
            </div>
        </>
    );
});
