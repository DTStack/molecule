import * as React from 'react';
import { render } from '@testing-library/react';
import { MoleculeProvider } from 'mo';

import { PanelView } from '../index';
import { PANEL_OUTPUT, PANEL_PROBLEMS } from 'mo/model/workbench/panel';

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
