import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Input } from '../index';
import { disabledClassName, normalClassName, largetClassName } from '../input';

const TEST_ID = 'input';
const mockData = {
    placeholder: 'basic usage',
};

describe('Test Input Component', () => {
    test('Input snapshot', () => {
        const component = renderer.create(<Input {...mockData} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Input disabled', () => {
        const wrapper = render(
            <Input data-testid={TEST_ID} {...mockData} disabled />
        );
        const classContain = wrapper
            .getByTestId(TEST_ID)
            .classList.contains(disabledClassName);

        expect(classContain).toBeTruthy();
    });

    test('Input normal size', () => {
        const wrapper = render(<Input data-testid={TEST_ID} />);
        const classContain = wrapper
            .getByTestId(TEST_ID)
            .classList.contains(normalClassName);

        expect(classContain).toBeTruthy();
    });

    test('Input large size', () => {
        const wrapper = render(
            <Input data-testid={TEST_ID} {...mockData} size="large" />
        );
        const classContain = wrapper
            .getByTestId(TEST_ID)
            .classList.contains(largetClassName);

        expect(classContain).toBeTruthy();
    });

    test('Input type', () => {
        const INPUT_TYPE = 'search';
        const wrapper = render(
            <Input
                data-testid={TEST_ID}
                {...mockData}
                type={INPUT_TYPE}
                size="large"
            />
        );
        const typeContain = wrapper.getByTestId(TEST_ID).getAttribute('type');

        expect(typeContain).toBe(INPUT_TYPE);
    });

    test('Input placeholder', () => {
        const INPUT_PLACEHOLDER = 'basic usage';
        const wrapper = render(
            <Input data-testid={TEST_ID} placeholder={INPUT_PLACEHOLDER} />
        );
        const placeHolderContain = wrapper
            .getByTestId(TEST_ID)
            .getAttribute('placeholder');

        expect(placeHolderContain).toBe(INPUT_PLACEHOLDER);
    });

    test('Input value', () => {
        const INPUT_PLACEHOLDER = 'basic usage';
        const wrapper = render(
            <Input data-testid={TEST_ID} placeholder={INPUT_PLACEHOLDER} />
        );
        const placeHolderContain = wrapper
            .getByTestId(TEST_ID)
            .getAttribute('placeholder');

        expect(placeHolderContain).toBe(INPUT_PLACEHOLDER);
    });

    test('Input style', () => {
        const INPUT_BGCOLOR = 'red';
        const wrapper = render(
            <Input
                data-testid={TEST_ID}
                style={{ background: INPUT_BGCOLOR }}
            />
        );
        const placeHolderContain = wrapper.getByTestId(TEST_ID).style
            .background;

        expect(placeHolderContain).toBe(INPUT_BGCOLOR);
    });

    test('Input value', () => {
        const VALUE_INPUT = 'preset content';
        const wrapper = render(
            <Input data-testid={TEST_ID} value={VALUE_INPUT} />
        );
        const valueContain = wrapper.getByTestId(TEST_ID).getAttribute('value');

        expect(valueContain).toBe(VALUE_INPUT);
    });

    test('Input default value', () => {
        const DEFAULT_VALUE_INPUT = 'defaultValue';
        const wrapper = render(
            <Input data-testid={TEST_ID} defaultValue={DEFAULT_VALUE_INPUT} />
        );
        const valueContain = wrapper.getByTestId(TEST_ID).getAttribute('value');

        expect(valueContain).toBe(DEFAULT_VALUE_INPUT);
    });

    test('Input customer className', () => {
        const DEFAULT_VALUE_INPUT = 'test-className';
        const wrapper = render(
            <Input data-testid={TEST_ID} className={DEFAULT_VALUE_INPUT} />
        );
        const valueContain = wrapper
            .getByTestId(TEST_ID)
            .classList.contains(DEFAULT_VALUE_INPUT);

        expect(valueContain).toBeTruthy();
    });

    test('Input customer keyDown event', () => {
        const TEST_EVENT = jest.fn();
        const wrapper = render(
            <Input data-testid={TEST_ID} onKeyDown={TEST_EVENT} />
        );
        fireEvent.keyDown(wrapper.getByTestId(TEST_ID));

        expect(TEST_EVENT).toBeCalled();
    });

    test('Input customer pressEnter event', () => {
        const TEST_EVENT = jest.fn();
        const wrapper = render(
            <Input data-testid={TEST_ID} onPressEnter={TEST_EVENT} />
        );
        fireEvent.keyDown(wrapper.getByTestId(TEST_ID), {
            key: 'Enter',
            keyCode: 13,
        });

        expect(TEST_EVENT).toBeCalled();
    });

    test('Input customer onchange event', () => {
        const TEST_EVENT = jest.fn();
        const wrapper = render(
            <Input data-testid={TEST_ID} onChange={TEST_EVENT} />
        );
        const element = wrapper.getByTestId(TEST_ID);
        fireEvent.change(element, {
            target: { value: 'test' },
        });

        expect(TEST_EVENT).toBeCalled();
    });

    test('Overwrite the current state value with props', () => {});
});
