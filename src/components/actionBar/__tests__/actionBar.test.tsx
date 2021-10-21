import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ActionBar, IActionBarItemProps } from '../index';

const TEST_ID = 'test-action-item-id';

const mockData: IActionBarItemProps[] = [
    {
        id: TEST_ID,
        name: 'mockDataTitle',
        title: 'mockDataTitle',
        icon: 'add',
        checked: true,
        'data-testid': TEST_ID,
    },
];

describe('Test ActionBar Component', () => {
    test('The ActionBar snapshot', () => {
        const component = renderer.create(<ActionBar data={mockData} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('The ActionBar common props', () => {
        const { getByTestId } = render(<ActionBar data={mockData} />);
        const liDom = getByTestId(TEST_ID);
        const iconDom = liDom?.querySelector('span.codicon-add');

        expect(liDom).not.toBeNull();
        expect(iconDom).not.toBeNull();
    });

    test('The ActionBar item onClick', () => {
        const mockCallback = jest.fn();
        const { getByTestId } = render(
            <ActionBar data={mockData} onClick={mockCallback} />
        );
        const liDom = getByTestId(TEST_ID);

        if (liDom) {
            fireEvent.click(liDom);
        }
        expect(mockCallback).toHaveBeenCalled();
    });

    test('The ActionBar item disabled', () => {
        mockData[0].disabled = true;
        const mockCallback = jest.fn();

        const { getByTestId } = render(
            <ActionBar data={mockData} onClick={mockCallback} />
        );
        const liDom = getByTestId(TEST_ID);

        expect(liDom).not.toBeNull();
        if (liDom) {
            expect(liDom.className).toContain('disabled');
            fireEvent.click(liDom);
        }
        expect(mockCallback).not.toBeCalled();
    });

    test('The ActionBar contextMenu', () => {
        const mockContextMenuCallback = jest.fn();
        mockData[0].contextMenu = [
            {
                id: 'contextMenuTest1',
                name: 'contextMenuTest1',
                'data-testid': 'contextMenuTest1',
            },
        ];
        const wrapper = render(
            <ActionBar
                data={mockData}
                onContextMenuClick={mockContextMenuCallback}
            />
        );
        const liDom = wrapper.getByTestId(TEST_ID);
        if (liDom) {
            fireEvent.contextMenu(liDom);
        }
        const contextMenuItem = wrapper.getByTestId('contextMenuTest1');

        expect(contextMenuItem).not.toBeNull();
        fireEvent.click(contextMenuItem);

        expect(mockContextMenuCallback).toBeCalled();
    });
});
