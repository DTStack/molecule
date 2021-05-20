import * as React from 'react';
import { render } from '@testing-library/react';
import { MoleculeProvider } from 'mo/provider';

import { Workbench } from '../workbench';

describe('Test Workbench Component', () => {
    test('The Workbench DOM Testing', () => {
        const { container } = render(
            <MoleculeProvider>
                <Workbench />
            </MoleculeProvider>
        );
        expect(container.querySelector('#molecule')).not.toBeNull();
        expect(container.querySelector('.mo-workbench')).not.toBeNull();
        expect(container.querySelector('.mo-statusBar')).not.toBeNull();
    });
});
