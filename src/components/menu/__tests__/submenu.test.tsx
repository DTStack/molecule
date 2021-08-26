import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { MenuItem, SubMenu } from '../';

const TEST_ID = 'test-id';
const MOCK_JSX = <div data-testid={TEST_ID}>molecule</div>;

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
