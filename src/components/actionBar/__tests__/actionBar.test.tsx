import * as React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ActionBar from '../index';

const mockData = [{
    id: '1',
    title: 'mockDataTitle',
    iconName: 'codicon-add',
}];

describe('Test ActionBar Component', () => {
    test('Test the ActionBar Snapshot', () => {

        const component = renderer.create(<ActionBar data={mockData} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Test the ActionBar by the data Props', () => {
        render(<ActionBar data={mockData} />);
        expect(screen.getByTitle(/mockDataTitle/)).not.toBeNull();
    });
});
