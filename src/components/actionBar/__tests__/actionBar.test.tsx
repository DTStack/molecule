import * as React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ActionBar } from '../index';

const mockData = [
    {
        id: 'm1',
        title: 'mockDataTitle',
        icon: 'add',
    },
];

describe('Test ActionBar Component', () => {
    test('Test the ActionBar Snapshot', () => {
        const component = renderer.create(<ActionBar data={mockData} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Test the ActionBar by the data Props', () => {
        const wrapper = render(<ActionBar data={mockData} />);
        const liDom = wrapper.container.querySelector('#m1');
        const iconDom = liDom?.querySelector('a.codicon-add');

        expect(liDom).not.toBeNull();
        expect(iconDom).not.toBeNull();
    });
});
