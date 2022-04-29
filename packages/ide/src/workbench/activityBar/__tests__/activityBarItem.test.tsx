import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActivityBarItem } from '../activityBarItem';
import {
    indicatorClassName,
    itemCheckedClassName,
    itemDisabledClassName,
    labelClassName,
    itemClassName,
} from '../base';
import { keybindingClassName } from '@dtinsight/molecule-ui/esm/menu/base';
import { KeybindingHelper } from 'mo/services/keybinding';
import { KeyCode } from 'mo/monaco';

describe('The ActivityBar Item Component', () => {
    test('match the snapshot', () => {
        const component = renderer.create(<ActivityBarItem id="test" />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to set status for item', () => {
        const { container, rerender } = render(
            <ActivityBarItem id="test" disabled />
        );

        expect(container.querySelector('#test')?.classList).toContain(
            itemDisabledClassName
        );

        rerender(<ActivityBarItem id="test" checked />);
        expect(container.querySelector('#test')?.classList).toContain(
            itemCheckedClassName
        );
    });

    test('Should support to pass through className', () => {
        const { container } = render(
            <ActivityBarItem id="test" className="test-className" />
        );

        expect(container.querySelector('#test')?.classList).toContain(
            'test-className'
        );
    });

    test('Should have an indicator when checked', () => {
        const { container } = render(<ActivityBarItem id="test" checked />);

        const indicator = container.querySelector(`div.${indicatorClassName}`);
        expect(indicator).toBeInTheDocument();
    });

    test('Should render a icon as the children or custom render', () => {
        const { container, rerender, getByTestId } = render(
            <ActivityBarItem id="test" checked icon="type" />
        );
        const icon = container.querySelector(`.${labelClassName}`);

        expect(icon).toBeInTheDocument();

        rerender(
            <ActivityBarItem
                id="test"
                checked
                render={() => <div data-testid="test"></div>}
            />
        );

        expect(getByTestId('test')).toBeInTheDocument();
    });

    test('Should have click event', () => {
        const mockFn = jest.fn();
        const { container } = render(
            <ActivityBarItem id="test" checked icon="type" onClick={mockFn} />
        );

        fireEvent.click(container.querySelector('#test')!);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe('test');
        expect(mockFn.mock.calls[0][1]).toEqual({
            id: 'test',
            checked: true,
            icon: 'type',
            onClick: mockFn,
        });
    });

    test('Should have contextMenu', () => {
        const contexts = [
            {
                id: 'search',
                name: 'Search',
                icon: 'check',
            },
            {
                id: 'menu',
                name: 'menu',
            },
        ];
        const { container, getByRole } = render(
            <ActivityBarItem id="test" contextMenu={contexts} icon="type" />
        );

        fireEvent.click(container.querySelector(`.${itemClassName}`)!);

        const menus = getByRole('menu');
        expect(menus).toBeInTheDocument();
        expect(menus?.childElementCount).toBe(2);
    });

    test('Should render keybinding if this item have keybinding', () => {
        const contexts = [
            {
                id: 'search',
                name: 'Search',
                icon: 'check',
            },
            {
                id: 'menu',
                name: 'menu',
            },
        ];
        const originalQuery = KeybindingHelper.queryGlobalKeybinding;
        KeybindingHelper.queryGlobalKeybinding = jest.fn((id) => {
            if (id === 'search') {
                return [
                    {
                        ctrlKey: false,
                        shiftKey: false,
                        altKey: false,
                        metaKey: true,
                        keyCode: KeyCode.KeyF,
                    },
                ];
            }
            return null;
        });
        const { container, getByRole } = render(
            <ActivityBarItem id="test" contextMenu={contexts} icon="type" />
        );
        fireEvent.click(container.querySelector(`.${itemClassName}`)!);

        const menus = getByRole('menu');
        // the first menu have keybinding
        expect(menus).toBeInTheDocument();
        expect(
            menus.firstElementChild!.querySelector(`.${keybindingClassName}`)
        ).toBeInTheDocument();

        // the second menu doesn't have keybinding
        expect(
            menus.firstElementChild!.nextElementSibling!.querySelector(
                `.${keybindingClassName}`
            )
        ).not.toBeInTheDocument();

        // restore the original queryGlobalKeybinding
        KeybindingHelper.queryGlobalKeybinding = originalQuery;
    });

    test('Should have click event for the menu item', () => {
        const contexts = [
            {
                id: 'search',
                name: 'Search',
                icon: 'check',
            },
            {
                id: 'menu',
                name: 'menu',
            },
        ];
        const mockFn = jest.fn();
        const { container, getByRole } = render(
            <ActivityBarItem
                id="test"
                contextMenu={contexts}
                icon="type"
                onContextMenuClick={mockFn}
            />
        );
        fireEvent.click(container.querySelector(`.${itemClassName}`)!);

        const menus = getByRole('menu');
        fireEvent.click(menus.firstElementChild!);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][1]).toEqual(
            expect.objectContaining({
                id: 'search',
                name: 'Search',
                icon: 'check',
            })
        );
    });
});
