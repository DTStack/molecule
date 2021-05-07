import * as React from 'react';
import { render } from '@testing-library/react';
import { MoleculeProvider } from 'mo/provider';

import { PanelView } from '../index';
import { PANEL_OUTPUT } from 'mo/model/workbench/panel';
import { PANEL_PROBLEMS } from 'mo/model/problems';

describe('Test Panel Component', () => {
    test('Test Panel DOM render', async () => {
        const { queryAllByText } = render(
            <MoleculeProvider>
                <PanelView />
            </MoleculeProvider>
        );
        expect(queryAllByText(PANEL_OUTPUT.name!)).not.toBeNull();
        expect(queryAllByText(PANEL_PROBLEMS.name!)).not.toBeNull();
    });
});
