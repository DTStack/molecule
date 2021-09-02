import React from 'react';
import { render } from '@testing-library/react';
import { groupBreadcrumbClassName } from '../base';
import '@testing-library/jest-dom';

import Breadcrumb from '../breadcrumb';

const mockData = new Array(3).fill(1).map((_, index) => ({
    id: index.toString(),
    name: `name${index}`,
}));
const TEST_ID = 'test-id';

describe('The Editor Component', () => {
    test('match the snapshot', () => {
        const { container, getByRole } = render(
            <Breadcrumb data-testid={TEST_ID} breadcrumbs={mockData} />
        );

        expect(container!.firstElementChild!.classList).toContain(
            groupBreadcrumbClassName
        );
        expect(getByRole('breadcrumb')).toBeInTheDocument();
    });
});
