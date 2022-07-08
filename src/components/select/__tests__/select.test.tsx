import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Select, Option, inputClassName } from '../index';

function SelectTest(props) {
    return (
        <Select
            id="demo1"
            key="demo1"
            defaultValue="1"
            style={{
                width: 200,
                color: 'rgba(255, 255, 255, 0.4)',
                background: '#252526',
            }}
            {...props}
        >
            <Option data-testid="o1" value="1">
                option - 1
            </Option>
            <Option data-testid="o2" value="2">
                option - 2
            </Option>
            <Option data-testid="o3" value="3">
                option - 3
            </Option>
            <Option data-testid="o4" value="4" description="Test option one">
                option - 4
            </Option>
        </Select>
    );
}

describe('Test Select Component', () => {
    // Clean up the html manually
    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('Match the Select snapshot', () => {
        let component;
        act(() => {
            component = renderer.create(<SelectTest />);
        });
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Set the onSelect defaultValue', () => {
        const { container } = render(<SelectTest defaultValue="2" />);
        const input = container.querySelector('.' + inputClassName);
        expect(input?.getAttribute('value')).toEqual('option - 2');
    });

    test('Update the onSelect value', () => {
        const { rerender, container } = render(<SelectTest value="2" />);

        const input = container.querySelector('.' + inputClassName);
        expect(input?.getAttribute('value')).toEqual('option - 2');

        rerender(<SelectTest value="3" />);
        expect(input?.getAttribute('value')).toEqual('option - 3');
    });

    test('Custom the onSelect className', () => {
        const { rerender, container } = render(<SelectTest />);
        const select = container.firstElementChild;
        expect(select?.classList.length).toEqual(1);
        expect(select?.className).toEqual('mo-select');

        rerender(<SelectTest className="myClassName" />);
        expect(select?.classList.length).toEqual(2);
        expect(select?.className).toContain('myClassName');
    });

    test('Custom the onSelect style', () => {
        const expected = { position: 'absolute' };
        const { getByTestId, rerender } = render(
            <SelectTest data-testid="select" />
        );
        expect(getByTestId('select')?.style.position).toEqual('');
        rerender(<SelectTest data-testid="select" style={expected} />);
        expect(getByTestId('select')?.style.position).toEqual(
            expected.position
        );
    });

    test('Set the onSelect placeholder', () => {
        const { rerender, container } = render(
            <SelectTest placeholder="test1" />
        );

        const input = container.querySelector('.' + inputClassName);
        expect(input?.getAttribute('placeholder')).toEqual('test1');

        rerender(<SelectTest placeholder="test2" />);
        expect(input?.getAttribute('placeholder')).toEqual('test2');
    });

    test('Select an option', () => {
        const select = jest.fn();

        const body = render(<SelectTest onSelect={select} />);
        const input = body.container.querySelector('.' + inputClassName);
        if (input) {
            fireEvent.click(input);
            const option = body.getByTestId('o1');
            fireEvent.click(option);
            expect(select).toBeCalled();
        }

        body.unmount();
        expect(
            document.querySelector('.mo-context-view__content')
        ).toBeEmptyDOMElement();
    });

    test('Show the Select Option description', async () => {
        const body = render(
            <Select placeholder="input">
                <Option data-testid="o4" description="test-1">
                    option1
                </Option>
            </Select>
        );
        const input = body.getByPlaceholderText('input');
        if (input) {
            fireEvent.click(input);
            const descriptor = document.querySelector('.mo-select__descriptor');
            expect(descriptor?.innerHTML).toEqual('None');
            const option = body.getByTestId('o4');
            fireEvent.mouseOver(option);
            expect(descriptor?.innerHTML).toEqual('test-1');
        }
    });

    test('Select an unnamed option', () => {
        const select = jest.fn();

        const body = render(
            <Select placeholder="input" onSelect={select}>
                <Option data-testid="o1" description="test-1"></Option>
                <Option data-testid="o2" description="test-2">
                    test-2
                </Option>
            </Select>
        );
        const input = body.getByPlaceholderText('input');
        if (input) {
            fireEvent.click(input);
            fireEvent.click(body.getByTestId('o1'));
            expect(select).not.toBeCalled();
            fireEvent.click(input);
            fireEvent.click(body.getByTestId('o2'));
            expect(select).toBeCalled();
        }
    });

    test('Select a disabled option', () => {
        const select = jest.fn();

        const body = render(
            <Select placeholder="input" onSelect={select}>
                <Option data-testid="o1" disabled>
                    test-1
                </Option>
            </Select>
        );
        const input = body.getByPlaceholderText('input');
        if (input) {
            fireEvent.click(input);
            fireEvent.click(body.getByTestId('o1'));
            expect(select).not.toBeCalled();
        }
    });
});
