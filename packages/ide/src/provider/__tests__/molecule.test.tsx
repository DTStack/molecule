import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { select } from '@dtinsight/molecule-common';
import { MoleculeProvider } from '../molecule';
import molecule from '../../index';
import { Workbench } from '../../workbench/workbench';

const customExtensions = [];

// mock the default extensions
jest.mock('mo/extensions', () => {
    return {
        defaultExtensions: [],
    };
});

describe('Test MoleculeProvider', () => {
    let original;
    beforeEach(() => {
        original = HTMLElement.prototype.getBoundingClientRect;
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 500,
            height: 0,
        });

        // Reset the extensions loaded state
        molecule.extension.setLoaded(false);
    });

    afterEach(() => {
        HTMLElement.prototype.getBoundingClientRect = original;
    });

    test('Match The MoleculeProvider snapshot', () => {
        const { asFragment } = render(
            <MoleculeProvider>
                <Workbench />
            </MoleculeProvider>
        );
        expect(asFragment()).toMatchSnapshot();
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
