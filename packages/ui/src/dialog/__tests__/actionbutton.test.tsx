import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ActionButton from '../actionButton';

const TEST_ID = 'test-id';

describe('Test ActionButton Component', () => {
    test('Match ActionButton Snapshot', () => {
        const TEST_FN = jest.fn();
        const component = renderer.create(
            <ActionButton closeModal={TEST_FN}></ActionButton>
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('The ActionButton actionFn', () => {
        const ACTION_FN = jest.fn(() => false);
        const MODAL_FN = jest.fn();
        const wrapper = render(
            <ActionButton
                data-testid={TEST_ID}
                actionFn={ACTION_FN}
                closeModal={MODAL_FN}
            />
        );
        const button = wrapper.getByTestId(TEST_ID);

        fireEvent.click(button);
        expect(ACTION_FN).toBeCalled();
        expect(MODAL_FN).toBeCalled();
    });

    test('The ActionButton closeModal', () => {
        const CLOSE_FN = jest.fn();
        const ACTION_FN = jest.fn(() => Promise.resolve(1));
        const wrapper = render(
            <ActionButton
                data-testid={TEST_ID}
                actionFn={ACTION_FN}
                closeModal={CLOSE_FN}
            />
        );
        const button = wrapper.getByTestId(TEST_ID);

        fireEvent.click(button);
        expect(ACTION_FN).toBeCalled();
    });
});
