import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatusBar } from '../statusBar';
import { ID_STATUS_BAR } from 'mo/common/id';

const mockItems = [
    {
        id: 'MoEditorInfo',
        sortIndex: 2,
        data: {
            ln: 0,
            col: 0,
        },
        name: 'Go to Line/Column...',
    },
];

describe('The StatusBar Component', () => {
    test('Match Snapshot', () => {
        const component = renderer.create(
            <StatusBar rightItems={mockItems} leftItems={mockItems} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should render items with correct order', () => {
        const items = [
            { id: 'test', sortIndex: 1, 'data-testid': 'test' },
            { id: 'test1', sortIndex: 0, 'data-testid': 'test1' },
        ];
        const { getByTestId } = render(
            <StatusBar rightItems={items} leftItems={[]} />
        );

        expect(getByTestId('test1').nextSibling).toBe(getByTestId('test'));
    });

    test('Should trigger the onClick event', () => {
        const mockFn = jest.fn();
        const itemMockFn = jest.fn();
        const { getByTitle } = render(
            <StatusBar
                rightItems={[
                    {
                        id: 'test',
                        onClick: itemMockFn,
                        name: 'test',
                    },
                ]}
                leftItems={[]}
                onClick={mockFn}
            />
        );

        fireEvent.click(getByTitle('test'));

        expect(mockFn).toBeCalled();
        expect(itemMockFn).toBeCalled();
    });

    test('Should support to trigger the contextMenu event', () => {
        const mockFn = jest.fn();
        const contextMenu = {
            id: 'add',
            name: 'add',
            sortIndex: 0,
        };
        const { container, getByRole } = render(
            <StatusBar
                rightItems={mockItems}
                leftItems={[]}
                contextMenu={[contextMenu]}
                onContextMenuClick={mockFn}
            />
        );

        fireEvent.contextMenu(container.querySelector(`#${ID_STATUS_BAR}`)!);

        const menu = getByRole('menu');
        expect(menu).toBeInTheDocument();

        fireEvent.click(menu.firstElementChild!);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][1]).toEqual(
            expect.objectContaining(contextMenu)
        );
    });
});
