import * as React from 'react';
import Input from 'mo/components/input';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const TextArea = Input.TextArea;
const stories = storiesOf('InpuxBox', module);
stories.addDecorator(withKnobs);

stories.add('Basic Usage', () => {
    return (
        <>
            <h2>简述</h2>
            <p>Inputbox</p>
            <h3>使用示例 1 - Input</h3>
            <Input placeholder="Search" />
            <h3>使用示例 2 - TextArea</h3>
            <TextArea
                placeholder="replace"
                maxLength={100}
                showCount={true}
                style={{ marginTop: 10 }}
            />
        </>
    );
});
