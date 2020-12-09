import * as React from 'react';
import { useState } from 'react';
import Dialog from 'mo/components/dialog';
import { Button } from 'mo/components/button';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
const stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs);

stories.add('Basic Usage', () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
        <>
            <h2>简述</h2>
            <p>当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法</p>
            <div>
                <h3>使用示例 1 - 基本使用</h3>
                <div>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Dialog
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Dialog>
                </div>
            </div>
        </>
    ;
});
