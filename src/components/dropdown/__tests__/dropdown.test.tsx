import React, { useRef } from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { DropDown, DropDownRef } from '../index';

function DropdownTest(props) {
    const ref = useRef<DropDownRef>(null);

    const finalProps = {
        'data-testid': 'dropdown',
        overlay: (
            <h1
                data-testid="overlay"
                style={{ display: 'block', width: 50, height: 50 }}
                id="overlay"
            >
                Test
            </h1>
        ),
        className: 'test',
        style: {
            position: 'absolute',
            top: 50,
            left: 50,
            width: 200,
            height: 100,
        },
        ...props,
    };
    return (
        <DropDown ref={ref} {...finalProps}>
            <span data-testid="button">test</span>
        </DropDown>
    );
}

describe('Test Dropdown Component', () => {
    // Clean up the html manually
    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('Test the Dropdown snapshot', () => {
        const component = renderer.create(<DropdownTest />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Custom the Dropdown className', () => {
        const expected = 'customClassName';
        const body = render(<DropdownTest className={expected} />);
        expect(body.getByTestId('dropdown')?.className).toContain(expected);
    });

    test('Render the children element', () => {
        const body = render(<DropdownTest />);
        expect(body.getByTestId('button')).not.toBeNull();
    });

    test('Trigger the overlay by the click event', () => {
        const body = render(<DropdownTest />);
        const dropdown = body.getByTestId('dropdown');
        fireEvent.click(dropdown);
        expect(screen.getByTestId('overlay')).not.toBeNull();
    });

    test('Trigger the overlay by the hover event', () => {
        const body = render(<DropdownTest trigger="hover" />);
        const dropdown = body.getByTestId('dropdown');
        fireEvent.mouseOver(dropdown);
        expect(screen.getByTestId('overlay')).not.toBeNull();
    });

    test('Trigger the overlay by the contextmenu event', () => {
        const body = render(<DropdownTest trigger="contextmenu" />);
        const dropdown = body.getByTestId('dropdown');
        if (dropdown) {
            fireEvent.contextMenu(dropdown);
        }
        expect(screen.getByTestId('overlay')).not.toBeNull();
    });

    test('Dispose the Dropdown', () => {
        const tree = renderer.create(<DropdownTest />);

        const dropdownNode: any = (
            tree as renderer.ReactTestRenderer
        ).root.findByType(DropDown);

        expect(dropdownNode._fiber).not.toBeUndefined();

        const dropdownRef = dropdownNode._fiber.ref;
        expect(dropdownRef).not.toBeUndefined();

        const contextView = document.body.querySelector(
            '.mo-context-view'
        ) as HTMLDivElement;
        contextView.style.visibility = 'visible';
        expect(dropdownRef.current.dispose).not.toBeUndefined();
        dropdownRef.current.dispose();
        expect(contextView?.style?.visibility).toEqual('hidden');
    });

    test('Set the Dropdown placement', () => {
        const body = render(<DropdownTest placement="top" />);
        const dropdown = body.getByTestId('dropdown');
        fireEvent.click(dropdown);
        const contextView = document.body.querySelector(
            '.mo-context-view'
        ) as HTMLDivElement;
        expect(contextView?.style?.visibility).toEqual('visible');
        expect(screen.getByTestId('overlay')).not.toBeNull();
    });
});
