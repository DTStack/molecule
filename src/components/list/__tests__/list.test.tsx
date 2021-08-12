import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { List, Item } from '../index';

function TestList(props) {
    return (
        <List
            data-testid="myList"
            className="testList"
            mode="horizontal"
            current="2"
            {...props}
        >
            <Item id="1" disabled data-testid="myLi1">
                1
            </Item>
            <Item id="2" data-testid="myLi2">
                2
            </Item>
            <Item id="3" data-testid="myLi3">
                3
            </Item>
        </List>
    );
}

describe('Test the List Component', () => {
    test('Match the List snapshot', () => {
        const component = renderer.create(<TestList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Click the List item', () => {
        const mockCallback = jest.fn();
        const wrapper = render(<TestList onClick={mockCallback} />);
        fireEvent.click(wrapper.getByTestId('myLi1'));
        expect(mockCallback).toHaveBeenCalled();
    });

    test('Select the List item', () => {
        const mockCallback = jest.fn();
        const wrapper = render(<TestList onSelect={mockCallback} />);
        fireEvent.click(wrapper.getByTestId('myLi1'));
        expect(mockCallback).toHaveBeenCalled();
    });

    test('Set the List to horizontal mode', () => {
        const wrapper = render(<TestList />);
        expect(wrapper.getByTestId('myList').className).toContain('horizontal');
    });

    test('Default to activate a List item', () => {
        const wrapper = render(<TestList />);
        expect(wrapper.getByTestId('myLi2').className).toContain('active');
    });

    test('Change the active item', () => {
        const wrapper = render(<TestList />);
        fireEvent.click(wrapper.getByTestId('myLi1'));
        expect(wrapper.getByTestId('myLi1').className).toContain('active');
    });

    test('Change the current active the item', () => {
        const { rerender, getByTestId } = render(<TestList current="1" />);

        expect(getByTestId('myLi1').className).toContain('active');

        rerender(<TestList current="2" />);

        expect(getByTestId('myLi2').className).toContain('active');
    });

    test('Default to disable a List item', () => {
        const wrapper = render(<TestList />);
        expect(wrapper.getByTestId('myLi1').className).toContain('disabled');
    });

    test('Change the disabled item', () => {
        const { rerender, getByTestId } = render(<TestList disable="2" />);

        expect(getByTestId('myLi2').className).toContain('disabled');

        rerender(<TestList disable="3" />);

        expect(getByTestId('myLi3').className).toContain('disabled');
    });

    test('Change the List mode', () => {
        const { rerender, getByTestId } = render(
            <TestList mode="horizontal" />
        );

        rerender(<TestList mode="vertical" />);
        expect(getByTestId('myList').className).not.toContain('horizontal');
        expect(getByTestId('myList').className).toContain('vertical');
    });
});
