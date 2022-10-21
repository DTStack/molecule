import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { querySelector } from '@test/utils';

import { ConfirmState, Modal } from '../index';
import {
    iconConfirmClassName,
    textConfirmClassName,
    detailConfirmClassName,
} from '../base';

const { confirm, warn, warning } = Modal;
const TEST_ID = 'test-id';

describe('Test Confirm Component', () => {
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
            const component = querySelector(`div[class*="${className}"]`);
            expect(component!.classList).toContain(className);

            const icon = querySelector('.codicon-warning');
            expect(icon).not.toBeNull();

            const confirmTitle = querySelector(`.${textConfirmClassName}`);
            expect(confirmTitle?.textContent).toBe(TEST_TITLE);

            const confirmDetail = querySelector(`.${detailConfirmClassName}`);
            expect(confirmDetail?.textContent).toBe(TEST_CONTENT);

            /**
             * Destroy the confirm
             */
            fireEvent.click(wrapper.getByTestId(DESTROY_ID));
            await waitFor(() => {
                const component = querySelector(`div[class*="${className}"]`);
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
