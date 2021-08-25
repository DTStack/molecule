import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Menu, MenuItem, SubMenu } from '../';
import { disabledClassName, labelClassName } from '../base';

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
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
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
        expect(TEST_FN).not.toBeCalled();
        expect(component).toContain(disabledClassName);
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
        waitFor(() => {
            const li = wrapper.container;

            expect(li.children.length).toBe(3);
        });
    });

    test('Set data to MenuItem', () => {
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
        waitFor(() => {
            const li = wrapper.container;

            expect(li.children.length).toBe(mockData.length + 1);
        });
    });

    test('Set data to MenuItem', () => {
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
        waitFor(() => {
            const li = wrapper.container;

            expect(li.children.length).toBe(mockData.length + 1);
        });
    });
});
