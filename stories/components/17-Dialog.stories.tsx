import React from 'react';
import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import molecule from '@dtinsight/molecule';

const { Modal, Button } = molecule.component;
const confirm = Modal.confirm;
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

    function showConfirm() {
        confirm({
            title: 'Are you sure you want to permanently delete ?',
            content: 'This action is irreversible!',
            cancelButtonProps: { disabled: true },
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
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
