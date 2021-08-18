import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Option } from '../index';

describe('Test Select Option Component', () => {
    test('Match the Select snapshot', () => {
        const component = renderer.create(
            <Option
                value="1"
                name="test"
                disabled
                title="test"
                description="test"
            />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Disabled the Option', () => {
        const click = jest.fn();

        const { getByTestId, rerender } = render(
            <Option data-testid="t1" disabled onClick={click} />
        );
        const option = getByTestId('t1');
        expect(option.className).toContain('disabled');
        fireEvent.click(option);
        expect(click).not.toBeCalled();

        rerender(<Option data-testid="t1" disabled={true} onClick={click} />);

        expect(option.className).toContain('disabled');
        fireEvent.click(option);
        expect(click).not.toBeCalled();

        rerender(<Option data-testid="t1" disabled={false} onClick={click} />);

        expect(option.className).not.toContain('disabled');
        fireEvent.click(option);
        expect(click).toBeCalled();
    });

    test('Add the children prop in Option', () => {
        const { getByTestId } = render(
            <Option>
                <span data-testid="t1"></span>
            </Option>
        );
        expect(getByTestId('t1')).not.toBeNull();
    });
});
