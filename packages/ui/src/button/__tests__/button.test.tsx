import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {
    Button,
    normalButtonClassName,
    disableButtonClassName,
    largeButtonClassName,
} from '../index';

describe('Test Button Component', () => {
    test('The Button Snapshot', () => {
        const component = renderer.create(<Button />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('The Button setting disabled', () => {
        const wrapper = render(<Button data-testid="button" disabled />);
        const element = wrapper.getByTestId('button');
        const classExist = element?.classList.contains(disableButtonClassName);

        expect(classExist).toBeTruthy();
    });

    test('The Button is not set disabled', () => {
        const wrapper = render(<Button data-testid="button" />);
        const element = wrapper.getByTestId('button');
        const classExist = element?.classList.contains(disableButtonClassName);

        expect(classExist).not.toBeTruthy();
    });

    test('When the button is set to normal size, it has the corresponding class', () => {
        const wrapper = render(<Button data-testid="button" size="normal" />);
        const element = wrapper.getByTestId('button');
        const classNormaleExist = element?.classList.contains(
            normalButtonClassName
        );
        const classLargeExist =
            element?.classList.contains(largeButtonClassName);

        expect(classNormaleExist).toBeTruthy();
        expect(classLargeExist).not.toBeTruthy();
    });

    test('When the button is set to large size, it has the corresponding class', () => {
        const wrapper = render(<Button data-testid="button" size="large" />);
        const element = wrapper.getByTestId('button');
        const classNormaleExist = element?.classList.contains(
            normalButtonClassName
        );
        const classLargeExist =
            element?.classList.contains(largeButtonClassName);

        expect(classNormaleExist).not.toBeTruthy();
        expect(classLargeExist).toBeTruthy();
    });
});
