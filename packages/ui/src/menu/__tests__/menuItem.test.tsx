import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { MenuItem } from '../';
import { disabledClassName, labelClassName } from '../base';

const TEST_ID = 'test-id';
const MOCK_JSX = <div data-testid={TEST_ID}>molecule</div>;

describe('Test the MenuItem Component', () => {
    test('Set Icon to MenuItem', () => {
        render(<MenuItem icon="warning" />);
        const component = document.body.querySelector('.codicon-warning');

        expect(component).not.toBeNull();
    });

    test('Set JSX Icon to MenuItem', () => {
        const wrapper = render(<MenuItem icon={MOCK_JSX} />);
        const jsx = wrapper.getByTestId(TEST_ID);

        expect(jsx).not.toBeNull();
    });

    test('Set name to MenuItem', () => {
        render(<MenuItem name={TEST_ID} />);
        const span = document.querySelector(`.${labelClassName}`);

        expect(span).not.toBeNull();
    });

    test('Set title to MenuItem', () => {
        const wrapper = render(<MenuItem title={TEST_ID} />);
        const jsx = wrapper.getByTitle(TEST_ID);

        expect(jsx).not.toBeNull();
    });

    test('Click to MenuItem', () => {
        const TEST_FN = jest.fn();
        const wrapper = render(
            <MenuItem data-testid={TEST_ID} onClick={TEST_FN} />
        );
        const component = wrapper.getByTestId(TEST_ID);

        fireEvent.click(component);
        expect(TEST_FN).toBeCalled();
    });

    test('Set disabled to MenuItem', () => {
        const TEST_FN = jest.fn();
        const wrapper = render(
            <MenuItem data-testid={TEST_ID} disabled onClick={TEST_FN} />
        );
        const component = wrapper.getByTestId(TEST_ID);

        fireEvent.click(component);
        expect(component.classList).toContain(disabledClassName);
    });

    test('Set keybinding to MenuItem', () => {
        const keybinding = '⇧⌘P';
        const wrapper = render(
            <MenuItem data-testid={TEST_ID} keybinding={keybinding} />
        );
        const span = wrapper
            .getByTestId(TEST_ID)
            .querySelectorAll<HTMLSpanElement>('span')[1];

        expect(span.textContent).toBe(keybinding);
    });

    test('Set children to MenuItem', () => {
        const wrapper = render(<MenuItem>{MOCK_JSX}</MenuItem>);
        const component = wrapper.getByTestId(TEST_ID);

        expect(component).not.toBeNull();
    });

    test('Set render to MenuItem', () => {
        const customRender = () => MOCK_JSX;
        const wrapper = render(<MenuItem render={customRender} />);
        const component = wrapper.getByTestId(TEST_ID);

        expect(component).not.toBeNull();
    });
});
