import React from 'react';
import { useState } from 'react';
import { Modal } from 'mo/components/dialog';
import { Button } from 'mo/components/button';
import { storiesOf } from '@storybook/react';

const confirm = Modal.confirm;
const stories = storiesOf('Dialog', module);

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

    function showConfirm() {
        confirm({
            title: 'Tweet us your feedback',
            content: (
                <div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>
            ),
            onOk() {
                console.log('onOk');
            },
            onCancel() {
                console.log('onCancel');
            },
        });
    }

    return (
        <>
            <h2>简述</h2>
            <p>
                当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm()
                等语法糖方法
            </p>
            <div>
                <h3>使用示例 1 - Modal</h3>
                <Button onClick={showModal}>Open Modal</Button>
                <Modal
                    width={520}
                    title="Tweet us your feedback"
                    destroyOnClose={true}
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <h3>使用示例 2 - confirm</h3>
                <Button onClick={showConfirm}>Confirm</Button>
            </div>
        </>
    );
});
