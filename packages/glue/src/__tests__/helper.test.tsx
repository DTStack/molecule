import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { cloneReactChildren } from '..';

describe('Test helper.ts', () => {
    test('Clone the React children', () => {
        const fn = jest.fn();
        const Test = <span data-testid="test">test</span>;

        const newTest = cloneReactChildren(Test, { onClick: fn });

        const { getByTestId } = render(<>{newTest}</>);
        const span = getByTestId('test');
        expect(span).not.toBeNull();
        fireEvent.click(span);

        expect(fn).toBeCalled();
    });

    test('Clone the invalid React element', () => {
        const newTest = cloneReactChildren('abc', {});
        expect(newTest).toEqual(['abc']);
    });
});
