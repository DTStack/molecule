import * as React from 'react';
import { render, screen } from '@testing-library/react';

import ActionBar from '../index';

const mockData = [
    {
        id: '1',
        title: 'bar1',
        iconName: 'codicon-add',
    },
    {
        id: '2',
        title: 'bar2',
        iconName: 'codicon-chrome-restore',
    },
    {
        id: '3',
        title: 'bar3',
        iconName: 'codicon-check',
    },
];

describe('Test ActionBar Component', () => {

    test('Shows the ActionBar by data Props', () => {
        expect(1 + 1).toEqual(2);
        render(<ActionBar data={mockData} />);

        expect(screen.getByTitle(/bar1/)).not.toBeNull();

    });

});
