import '@testing-library/jest-dom';
import molecule, { create } from 'mo';
import InstanceService from 'mo/services/instanceService';
import { expectLoggerErrorToBeCalled } from '@test/utils';
import { clearInstance } from '../create';

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
