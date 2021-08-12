import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { DropDown } from '../index';

function DropdownTest(props) {
    const finalProps = {
        'data-testid': 'dropdown',
        overlay: (
            <h1 data-testid="overlay" id="overlay">
                Test
            </h1>
        ),
        trigger: 'click',
        placement: 'bottom',
        className: 'test',
        style: {
            position: 'absolute',
            top: 50,
            width: 200,
            height: 100,
        },
        ...props,
    };
    return (
        <DropDown {...finalProps}>
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

    test('Render the children element', async () => {
        const body = render(<DropdownTest />);
        expect(body.getByTestId('button')).not.toBeNull();
    });

    test('Trigger the overlay by the click event', async () => {
        const body = render(<DropdownTest />);
        const dropdown = body.getByTestId('dropdown');
        fireEvent.click(dropdown);
        expect(screen.getByTestId('overlay')).not.toBeNull();
    });

    test('Trigger the overlay by the hover event', async () => {
        const body = render(<DropdownTest trigger="hover" />);
        const dropdown = body.getByTestId('dropdown');
        fireEvent.mouseOver(dropdown);
        expect(screen.getByTestId('overlay')).not.toBeNull();
    });

    test('Trigger the overlay by the contextmenu event', async () => {
        const body = render(<DropdownTest trigger="contextmenu" />);
        const dropdown = body.getByTestId('dropdown');
        if (dropdown) {
            fireEvent.contextMenu(dropdown);
        }
        expect(screen.getByTestId('overlay')).not.toBeNull();
    });
});
