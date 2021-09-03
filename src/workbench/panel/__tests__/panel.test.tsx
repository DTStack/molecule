import React from 'react';
import { render } from '@testing-library/react';
import { MoleculeProvider } from 'mo/provider';

import { PanelView } from '../index';
import { builtInOutputPanel } from 'mo/model/workbench/panel';
import { builtInPanelProblems } from 'mo/model/problems';

describe('Test Panel Component', () => {
    test('Test Panel DOM render', async () => {
        const { queryAllByText } = render(
            <MoleculeProvider>
                <PanelView />
            </MoleculeProvider>
        );
        expect(queryAllByText(builtInOutputPanel().name!)).not.toBeNull();
        expect(queryAllByText(builtInPanelProblems().name!)).not.toBeNull();
    });
});
