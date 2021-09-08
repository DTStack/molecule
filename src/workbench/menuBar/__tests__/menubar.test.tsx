import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuBar, { actionClassName } from '../menuBar';

const TEST_ID = 'test-id';
const menuData = [
    {
        id: TEST_ID,
        name: TEST_ID,
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
];
const TEST_FN: jest.Mock<any, any> = jest.fn();

describe('Test MenuBar Component', () => {
    afterEach(cleanup);

    test('Match the MenuBar snapshot', () => {
        const component = renderer.create(
            <MenuBar data={menuData} onClick={TEST_FN} />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to set status for item', () => {
        const { container, queryByText, getByRole } = render(
            <MenuBar data={menuData} onClick={TEST_FN} />
        );
        const component = container.firstElementChild!
            .firstElementChild as HTMLDivElement;
        expect(component!.className).toContain(actionClassName);

        fireEvent.click(component);
        const span = queryByText(TEST_ID) as HTMLSpanElement;
        expect(span).not.toBeNull();

        const menuBar = getByRole('menu').firstElementChild as HTMLLIElement;
        expect(menuBar).toBeInTheDocument();
    });

    test('Should support to get the focus element', () => {
        const mockFn = jest.fn();
        const {} = render(
            <MenuBar
                data={menuData}
                onClick={TEST_FN}
                updateFocusinEle={mockFn}
            />
        );

        const input = document.createElement('input');
        document.body.append(input);

        input.focus();

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(input);
    });
});
