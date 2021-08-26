import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Menu, MenuItem, SubMenu } from '../';
import { Divider } from '../divider';
import { MenuMode } from '../subMenu';

import {
    activeClassName,
    disabledClassName,
    labelClassName,
    horizontalMenuClassName,
    verticalMenuClassName,
} from '../base';

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
const MOCK_JSX = <div data-testid={TEST_ID}>molecule</div>;

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
});

describe('Test the MenuItem Component', () => {
    test('Set Icon to MenuItem', () => {
        render(<MenuItem icon="warning" />);
        const component = document.body.querySelector('.codicon-warning');

        expect(component).not.toBeNull();
    });

    test('Set JSX Icon to MenuItem', () => {
        const wrapper = render(<MenuItem icon={MOCK_JSX} />);
        const jsx = wrapper.getByTestId(TEST_ID);

        expect(jsx).not.toBeNull();
    });

    test('Set name to MenuItem', () => {
        render(<MenuItem name={TEST_ID} />);
        const span = document.querySelector(`.${labelClassName}`);

        expect(span).not.toBeNull();
    });

    test('Set title to MenuItem', () => {
        const wrapper = render(<MenuItem title={TEST_ID} />);
        const jsx = wrapper.getByTitle(TEST_ID);

        expect(jsx).not.toBeNull();
    });

    test('Click to MenuItem', () => {
        const TEST_FN = jest.fn();
        const wrapper = render(
            <MenuItem data-testid={TEST_ID} onClick={TEST_FN} />
        );
        const component = wrapper.getByTestId(TEST_ID);

        fireEvent.click(component);
        expect(TEST_FN).toBeCalled();
    });

    test('Set disabled to MenuItem', () => {
        const TEST_FN = jest.fn();
        const wrapper = render(
            <MenuItem data-testid={TEST_ID} disabled onClick={TEST_FN} />
        );
        const component = wrapper.getByTestId(TEST_ID);

        fireEvent.click(component);

        expect(component.classList).toContain(disabledClassName);
    });

    test('Set keybinding to MenuItem', () => {
        const keybinding = '⇧⌘P';
        const wrapper = render(
            <MenuItem data-testid={TEST_ID} keybinding={keybinding} />
        );
        const span = wrapper
            .getByTestId(TEST_ID)
            .querySelectorAll<HTMLSpanElement>('span')[1];

        expect(span.textContent).toBe(keybinding);
    });

    test('Set children to MenuItem', () => {
        const wrapper = render(<MenuItem>{MOCK_JSX}</MenuItem>);
        const component = wrapper.getByTestId(TEST_ID);

        expect(component).not.toBeNull();
    });

    test('Set render to MenuItem', () => {
        const customRender = () => MOCK_JSX;
        const wrapper = render(<MenuItem render={customRender} />);
        const component = wrapper.getByTestId(TEST_ID);

        expect(component).not.toBeNull();
    });
});

describe('Test the SubMenu Component', () => {
    test('Set Icon to MenuItem', () => {
        render(<SubMenu icon="warning" />);
        const component = document.body.querySelector('.codicon-warning');

        expect(component).not.toBeNull();
    });

    test('Set JSX Icon to MenuItem', () => {
        const wrapper = render(<SubMenu icon={MOCK_JSX} />);
        const jsx = wrapper.getByTestId(TEST_ID);

        expect(jsx).not.toBeNull();
    });

    test('Set children to MenuItem', async () => {
        const wrapper = render(
            <SubMenu>
                <MenuItem>subMenuItem1</MenuItem>
                <MenuItem>subMenuItem2</MenuItem>
            </SubMenu>
        );
        await waitFor(() => {
            const ul = wrapper.container.firstElementChild?.children[1];

            expect(ul!.children.length).toBe(2);
        });
    });

    test('Set data to MenuItem', async () => {
        const mockData = [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
        ];
        const wrapper = render(<SubMenu data={mockData}></SubMenu>);
        await waitFor(() => {
            const ul = wrapper.container.firstElementChild?.children[1];

            expect(ul!.children.length).toBe(mockData.length);
        });
    });
});
