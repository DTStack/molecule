import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ConfirmDialog from '../confirmDialog';
import { Modal, ConfirmState } from '../index';

import {
    wrapDialogClassName,
    iconConfirmClassName,
    textConfirmClassName,
    detailConfirmClassName,
} from '../base';

const { confirm, warn, warning } = Modal;

const TEST_ID = 'test-id';

describe('Test Modal Component', () => {
    test('Match the Modal snapshot', () => {
        const component = renderer.create(<Modal />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

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
        const div = component?.closest('div')!.parentElement!.parentElement
            ?.parentElement;

        expect(div!.classList).toContain(wrapDialogClassName);
    });
});

describe('Test Confirm Component', () => {
    function $$(className) {
        return document.body.querySelector(className);
    }

    test('Confirm general display', async () => {
        const className = iconConfirmClassName(ConfirmState.confirm);
        const DESTROY_ID = 'test-destroy';
        const TEST_TITLE = 'test-title';
        const TEST_CONTENT = 'test-content';
        const CANCEL_FN = jest.fn();
        const OK_FN = jest.fn();
        const TEST_CONFIRM = 'test-confirm';

        class App extends React.Component {
            state = {
                destroy: () => {},
            };
            openConfirm = () => {
                const { destroy } = confirm({
                    title: TEST_TITLE,
                    content: TEST_CONTENT,
                    'data-testid': TEST_CONFIRM,
                    onOk: OK_FN,
                    onCancel: CANCEL_FN,
                } as any);

                this.setState({
                    destroy,
                });
            };

            render() {
                const { destroy } = this.state;
                return (
                    <>
                        <div
                            data-testid={TEST_ID}
                            onClick={() => this.openConfirm()}
                        >
                            click
                        </div>
                        <div data-testid={DESTROY_ID} onClick={() => destroy()}>
                            destroy
                        </div>
                    </>
                );
            }
        }

        const wrapper = render(<App />);

        fireEvent.click(wrapper.getByTestId(TEST_ID));
        await waitFor(async () => {
            const component = $$(`div[class*="${className}"]`);
            expect(component!.classList).toContain(className);

            const icon = $$('.codicon-warning');
            expect(icon).not.toBeNull();

            const title = $$('.mo-modal-title');
            expect(title?.textContent).toBe(TEST_TITLE);

            const confirmTitle = $$(`.${textConfirmClassName}`);
            expect(confirmTitle?.textContent).toBe(TEST_TITLE);

            const confirmDetail = $$(`.${detailConfirmClassName}`);
            expect(confirmDetail?.textContent).toBe(TEST_CONTENT);

            /**
             * Destroy the confirm
             */
            fireEvent.click(wrapper.getByTestId(DESTROY_ID));
            await waitFor(() => {
                const component = $$(`div[class*="${className}"]`);
                expect(component).toBeNull();
            });
        });
    });

    test('Warn confirm general display', async () => {
        const className = iconConfirmClassName(ConfirmState.warning);

        class App extends React.Component {
            state = {
                distory: null,
            };
            openConfirm = () => {
                warn({});
            };

            render() {
                return (
                    <div
                        data-testid={TEST_ID}
                        onClick={() => this.openConfirm()}
                    >
                        click
                    </div>
                );
            }
        }

        const wrapper = render(<App />);

        fireEvent.click(wrapper.getByTestId(TEST_ID));
        await waitFor(() => {
            const confirmDetail = document.body.querySelector(`.${className}`);
            expect(confirmDetail?.textContent).not.toBeNull();
        });
    });

    test('Warning confirm general display', async () => {
        const className = iconConfirmClassName(ConfirmState.warning);

        class App extends React.Component {
            state = {
                distory: null,
            };
            openConfirm = () => {
                warning({});
            };

            render() {
                return (
                    <div
                        data-testid={TEST_ID}
                        onClick={() => this.openConfirm()}
                    >
                        click
                    </div>
                );
            }
        }

        const wrapper = render(<App />);

        fireEvent.click(wrapper.getByTestId(TEST_ID));
        await waitFor(() => {
            const confirmDetail = document.body.querySelector(`.${className}`);
            expect(confirmDetail?.textContent).not.toBeNull();
        });
    });
});

describe('Test confirmDialog', () => {
    test('Match ConfirmDialog Snapshot', () => {
        const component = renderer.create(
            <ConfirmDialog
                close={() => {}}
                title="Are you sure you want to permanently delete ?"
                content="This action is irreversible!"
            ></ConfirmDialog>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('The ConfirmDialog Snapshot', () => {
        const component = renderer.create(
            <ConfirmDialog
                close={() => {}}
                title="Are you sure you want to permanently delete ?"
                content="This action is irreversible!"
            ></ConfirmDialog>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('The ConfirmDialog close and destroy', async () => {
        const CLOSE_FN = jest.fn();
        const BUTTON_OK = 'button-ok';
        const BUTTON_CANCEL = 'button-cancel';
        const cancelButtonProps = {
            'data-testid': BUTTON_CANCEL,
            className: BUTTON_OK,
        };
        const wrapper = render(
            <ConfirmDialog
                cancelButtonProps={cancelButtonProps}
                onCancel={CLOSE_FN}
                close={CLOSE_FN}
                okCancel={true}
                visible={true}
                title="Are you sure you want to permanently delete ?"
                content="This action is irreversible!"
            ></ConfirmDialog>
        );
        const component = wrapper.getByTestId(BUTTON_CANCEL);

        fireEvent.click(component);
        expect(CLOSE_FN).toBeCalled();
    });

    test('The ConfirmDialog actions', async () => {
        const ACTIONS = <a data-testid={TEST_ID}>molecule</a>;
        const wrapper = render(
            <ConfirmDialog
                actions={ACTIONS}
                close={() => {}}
                okCancel={true}
                visible={true}
                title="Are you sure you want to permanently delete ?"
                content="This action is irreversible!"
            ></ConfirmDialog>
        );
        const component = wrapper.getByTestId(TEST_ID);

        expect(component).not.toBeNull();
    });
});
