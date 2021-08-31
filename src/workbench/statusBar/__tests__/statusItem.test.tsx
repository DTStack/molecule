import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatusItem } from '../item';

describe('The StatusBar Item Component', () => {
    test('Match Snapshot', () => {
        const component = renderer.create(<StatusItem id="test" name="test" />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to pass through className', () => {
        const { getByTestId } = render(
            <StatusItem
                id="test"
                name="test"
                className="test-className"
                data-testid="test"
            />
        );

        const dom = getByTestId('test');
        expect(dom.classList).toContain('test-className');
    });

    test('Should support to custom render', () => {
        const { getByTestId } = render(
            <StatusItem
                id="test"
                className="test-className"
                data-testid="test"
                render={() => <div data-testid="test-render">123</div>}
            />
        );
        expect(getByTestId('test-render')).toBeInTheDocument();
    });

    test('Should trigger the click event', () => {
        const mockFn = jest.fn();
        const props = {
            id: 'test',
            name: 'test-name',
            'data-testid': 'test',
            onClick: mockFn,
        };
        const { getByTestId } = render(<StatusItem {...props} />);
        const dom = getByTestId('test').firstElementChild!;

        fireEvent.click(dom);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][1]).toEqual(props);
    });
});
