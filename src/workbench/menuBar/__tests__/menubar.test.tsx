import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
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
});
