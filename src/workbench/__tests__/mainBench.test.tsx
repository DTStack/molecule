import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MoleculeProvider } from 'mo';

import { MainBench } from '../index';

describe('Test MainBench Component', () => {
    test('The MainBench DOM Testing', () => {
        render(
            <MoleculeProvider>
                <MainBench />
            </MoleculeProvider>
        );

        expect(screen.queryByText(/Explorer/)).not.toBeNull();
    });
});
