import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { select } from 'mo/common/dom';

import { MoleculeProvider, Workbench } from 'mo';

import { customExtensions } from '../../../stories/extensions';

describe('Test MoleculeProvider', () => {
    test('Match The MoleculeProvider snapshot', () => {
        const component = render(
            <MoleculeProvider>
                <Workbench />
            </MoleculeProvider>
        );
        const tree = component.asFragment();
        expect(tree).toMatchSnapshot();
    });

    test('MoleculeProvider should render built-in Workbench extensions', () => {
        render(
            <MoleculeProvider>
                <Workbench />
            </MoleculeProvider>
        );
        expect(
            select('div[data-id="sidebar.explore.title"]')
        ).toBeInTheDocument();
        expect(
            select('div[data-id="sidebar.search.title"]')
        ).toBeInTheDocument();
        expect(select('.mo-welcome')).toBeInTheDocument();
        expect(
            select('div[id="statusbar.problems.title"]')
        ).toBeInTheDocument();
    });

    test('MoleculeProvider load the extensions', () => {
        render(
            <MoleculeProvider extensions={customExtensions}>
                <Workbench />
            </MoleculeProvider>
        );
        expect(
            select('div[data-id="ActivityBarTestPane"]')
        ).toBeInTheDocument();
    });

    test('MoleculeProvider load the locale language extensions', () => {
        localStorage.removeItem('mo.localeId');

        render(
            <MoleculeProvider
                extensions={customExtensions}
                defaultLocale="zh-CN"
            >
                <Workbench />
            </MoleculeProvider>
        );
    });
});
