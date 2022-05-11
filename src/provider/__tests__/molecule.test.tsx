import '@testing-library/jest-dom';
import React from 'react';
import molecule, { create, Workbench } from 'mo';
import InstanceService from 'mo/services/instanceService';
import { expectLoggerErrorToBeCalled } from '@test/utils';
import { clearInstance } from '../create';
import Provider from '../molecule';
import { render } from '@testing-library/react';

describe('The create function', () => {
    afterEach(() => {
        clearInstance();
    });

    test('Should create an instance', () => {
        const instance = create({});
        expect(instance).toBeInstanceOf(InstanceService);
    });

    test('Should log error when call method before initialize', () => {
        expectLoggerErrorToBeCalled(() => {
            molecule.editor.isOpened(1);
            create({});
        });
    });

    test('Should to be a standalone', () => {
        const instance = create({});
        const nextInstance = create({});

        expect(instance).toBe(nextInstance);
    });

    test('Should call methods normally', () => {
        create({});
        molecule.editor.isOpened(1);
    });
});

describe('The molecule Provider', () => {
    test('Match the Snapshot', () => {
        const { asFragment } = render(
            <Provider>
                <Workbench />
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
