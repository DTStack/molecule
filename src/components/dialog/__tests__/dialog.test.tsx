import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Modal } from '../index';

import { wrapDialogClassName } from '../base';

const TEST_ID = 'test-id';

describe('Test Modal Component', () => {
    test('Modal component default value', () => {
        const CANCEL_FN = jest.fn();
        const OK_FN = jest.fn();
        const TEST_OK = 'ok';
        const TEST_CANCEL = 'cancel';
        const BUTTON_OK = 'button-ok';
        const BUTTON_CANCEL = 'button-cancel';
        const okButtonProps = {
            'data-testid': BUTTON_OK,
            className: BUTTON_CANCEL,
        };
        const cancelButtonProps = {
            'data-testid': BUTTON_CANCEL,
            className: BUTTON_OK,
        };
        const wrapper = render(
            <Modal
                visible={true}
                okText={TEST_OK}
                cancelText={TEST_CANCEL}
                okButtonProps={okButtonProps as any}
                cancelButtonProps={cancelButtonProps as any}
                onOk={OK_FN}
                onCancel={CANCEL_FN}
            />
        );
        const buttonOK = wrapper.getByTestId(BUTTON_OK);
        const buttonCancel = wrapper.getByTestId(BUTTON_CANCEL);

        expect(buttonOK.textContent).toBe(TEST_OK);
        expect(buttonCancel.textContent).toBe(TEST_CANCEL);
        expect(buttonOK.classList).toContain(BUTTON_CANCEL);
        expect(buttonCancel.classList).toContain(BUTTON_OK);

        fireEvent.click(buttonOK);
        expect(OK_FN).toBeCalled();

        fireEvent.click(buttonCancel);
        expect(CANCEL_FN).toBeCalled();
    });

    test('Modal component custom footer', () => {
        const TEST_FOOTER = <a data-testid={TEST_ID}>{TEST_ID}</a>;
        const wrapper = render(<Modal footer={TEST_FOOTER} visible={true} />);
        const footer = wrapper.getByTestId(TEST_ID);

        expect(footer.textContent).toBe(TEST_ID);
    });

    test('Modal component centered', () => {
        const TEST_FOOTER = <a data-testid={TEST_ID}>{TEST_ID}</a>;
        const wrapper = render(
            <Modal footer={TEST_FOOTER} centered={true} visible={true} />
        );
        const component = wrapper.getByTestId(TEST_ID);
        const div =
            component?.closest('div')!.parentElement!.parentElement
                ?.parentElement;

        expect(div!.classList).toContain(wrapDialogClassName);
    });
});
