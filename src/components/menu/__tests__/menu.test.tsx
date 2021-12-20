import React, { useRef } from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Menu } from '../';
import { Divider } from '../divider';
import { MenuMode } from '../subMenu';

import {
    activeClassName,
    horizontalMenuClassName,
    verticalMenuClassName,
} from '../base';
import { MenuRef } from '../index';

const menuData = [
    {
        id: 'File',
        name: 'File',
        data: [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
        ],
    },
    {
        id: 'Edit',
        name: 'Edit',
        data: [
            {
                id: 'Undo',
                name: 'Undo',
            },
            {
                id: 'Redo',
                name: 'Redo',
            },
        ],
    },
    {
        id: 'Selection',
        name: 'Selection',
        data: [
            {
                id: 'SelectAll',
                name: 'Select All',
            },
            {
                id: 'CopyLineUp',
                name: 'Copy Line Up',
            },
        ],
    },
    {
        id: 'View',
        name: 'View',
        data: [
            {
                id: 'Command Palette',
                name: 'Command Palette',
            },
            {
                id: 'OpenView',
                name: 'Open View',
            },
            {
                id: 'Appearance',
                name: 'Appearance',
                data: [
                    {
                        icon: 'check',
                        id: 'ShowMenuBar',
                        name: 'Show Menu Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowSideBar',
                        name: 'Show Side Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowStatusBar',
                        name: 'Show Status Bar',
                    },
                    {
                        icon: 'check',
                        id: 'ShowActivityBar',
                        name: 'Show Activity Bar',
                    },
                ],
            },
        ],
    },
    {
        id: 'Run',
        name: 'Run',
        data: [
            {
                id: 'RunTask',
                name: 'Run Task',
            },
        ],
    },
    {
        id: 'Help',
        name: 'Help',
        data: [
            {
                id: 'About',
                name: 'About',
            },
        ],
    },
];
const TEST_ID = 'test-id';

function MenuTest(props) {
    const ref = useRef<MenuRef>(null);
    return <Menu ref={ref} data={menuData} {...props} />;
}

describe('Test the Menu Component', () => {
    test('Match the List snapshot', () => {
        const component = renderer.create(
            <Menu style={{ width: 200 }} data={menuData} />
        );
        const menu = component.toJSON();

        expect(menu).toMatchSnapshot();
    });

    test('Match the divider snapshot', () => {
        const component = renderer.create(<Divider />);
        const divider = component.toJSON();

        expect(divider).toMatchSnapshot();
    });

    test('Set className to Menu', () => {
        const classname = 'menu';
        const wrapper = render(
            <Menu data-testid={TEST_ID} className={classname} />
        );
        const component = wrapper.getByTestId(TEST_ID);

        expect(component.classList).toContain(classname);
    });

    test('Set horizontal to Menu', () => {
        const mode = MenuMode.Horizontal;
        const wrapper = render(<Menu data-testid={TEST_ID} mode={mode} />);
        const component = wrapper.getByTestId(TEST_ID);

        expect(component.classList).toContain(horizontalMenuClassName);
    });

    test('Set vertical to Menu', () => {
        const mode = MenuMode.Vertical;
        const wrapper = render(<Menu data-testid={TEST_ID} mode={mode} />);
        const component = wrapper.getByTestId(TEST_ID);

        expect(component.classList).toContain(verticalMenuClassName);
    });

    test('Set data single to Menu', () => {
        const mockData = [{ id: 'Edit', name: 'Edit', title: TEST_ID }];
        const wrapper = render(<Menu data={mockData} />);
        const component = wrapper.getByTitle(TEST_ID);

        expect(component).not.toBeNull();
    });

    test('Set data submenu to Menu', () => {
        const TEST_DATA1 = 'test1';
        const TEST_DATA2 = 'test2';
        const TEST_DATA3 = 'test3';
        const mockData = [
            {
                id: TEST_DATA1,
                name: TEST_DATA1,
                title: TEST_DATA1,
                data: [
                    {
                        id: TEST_DATA2,
                        name: TEST_DATA2,
                        'data-testid': TEST_DATA2,
                    },
                    {
                        id: TEST_DATA3,
                        name: TEST_DATA3,
                        'data-testid': TEST_DATA3,
                    },
                ],
            },
        ];
        const wrapper = render(<Menu data={mockData} />);
        const component1 = screen.getByTitle(TEST_DATA1);
        const component2 = wrapper.getByTestId(TEST_DATA2);
        const component3 = wrapper.getByTestId(TEST_DATA3);

        expect(component1).not.toBeNull();
        expect(component2).not.toBeNull();
        expect(component3).not.toBeNull();
    });

    test('Set children with click event', () => {
        const TEST_FN = jest.fn();
        const TEST_JSX = <div data-testid={TEST_ID}>test</div>;
        const wrapper = render(<Menu onClick={TEST_FN}>{TEST_JSX}</Menu>);
        const jsx = wrapper.getByTestId(TEST_ID);

        fireEvent.click(jsx);
        expect(jsx).not.toBeNull();
        expect(TEST_FN).toBeCalled();
    });
    //
    test('Global Click EventListener', async () => {
        const TEST_DATA1 = 'test1';
        const TEST_DATA2 = 'test2';
        const TEST_DATA3 = 'test3';
        const mockData = [
            {
                id: TEST_DATA1,
                name: TEST_DATA1,
                title: TEST_DATA1,
                data: [
                    {
                        id: TEST_DATA2,
                        name: TEST_DATA2,
                        'data-testid': TEST_DATA2,
                    },
                    {
                        id: TEST_DATA3,
                        name: TEST_DATA3,
                        'data-testid': TEST_DATA3,
                    },
                ],
            },
        ];
        let component1: HTMLElement = document.createElement('li');

        Object.defineProperty(document, 'elementsFromPoint', {
            value: () => {
                return [component1];
            },
            writable: true,
        });
        render(<Menu trigger="click" data={mockData} />);
        component1 = screen.getByTitle(TEST_DATA1);

        fireEvent.click(component1);

        await waitFor(async () => {
            const component = screen.getByTitle(TEST_DATA1);
            expect(component.classList).toContain(activeClassName);

            fireEvent.click(window);
            await waitFor(() => {
                expect(component.classList).not.toContain(activeClassName);
            });
        });
    });

    test('Global ContextMenu EventListener', async () => {
        const TEST_DATA1 = 'test1';
        const TEST_DATA2 = 'test2';
        const TEST_DATA3 = 'test3';
        const mockData = [
            {
                id: TEST_DATA1,
                name: TEST_DATA1,
                title: TEST_DATA1,
                data: [
                    {
                        id: TEST_DATA2,
                        name: TEST_DATA2,
                        'data-testid': TEST_DATA2,
                    },
                    {
                        id: TEST_DATA3,
                        name: TEST_DATA3,
                        'data-testid': TEST_DATA3,
                    },
                ],
            },
        ];
        let component1: HTMLElement = document.createElement('li');

        Object.defineProperty(document, 'elementsFromPoint', {
            value: () => {
                return [component1];
            },
            writable: true,
        });
        render(<Menu trigger="click" data={mockData} />);
        component1 = screen.getByTitle(TEST_DATA1);

        fireEvent.click(component1);

        await waitFor(async () => {
            const component = screen.getByTitle(TEST_DATA1);
            expect(component.classList).toContain(activeClassName);

            fireEvent.contextMenu(window);
            await waitFor(() => {
                expect(component.classList).not.toContain(activeClassName);
            });
        });
    });

    test('Dispose the Menu', () => {
        const TEST_DATA1 = 'test1';
        const TEST_DATA2 = 'test2';
        const mockData = [
            {
                id: TEST_DATA1,
                name: TEST_DATA1,
                title: TEST_DATA1,
                data: [
                    {
                        id: TEST_DATA2,
                        name: TEST_DATA2,
                        'data-testid': TEST_DATA2,
                    },
                ],
            },
        ];
        const menu = renderer.create(<MenuTest />);
        const menuNode: any = (menu as renderer.ReactTestRenderer).root.findByType(
            Menu
        );
        expect(menuNode._fiber).not.toBeUndefined();

        const menuRef = menuNode._fiber.ref;
        render(<Menu trigger="click" ref={menuRef} data={mockData} />);
        expect(menuRef?.current?.dispose).not.toBeUndefined();

        menuRef.current?.dispose();
        const item = document.body.querySelectorAll('ul')[1];
        expect(item.style.opacity).toEqual('0');
    });
});
