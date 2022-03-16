import { BuiltinService } from '../builtinService';
import { container } from 'tsyringe';
import { constants, modules } from '../builtinService/const';
import 'reflect-metadata';
import { expectLoggerErrorToBeCalled } from '@test/utils';

const builtinService = container.resolve(BuiltinService);

describe('The Built-in Service', () => {
    test('Should initialize the built-in data', () => {
        const builtinConstants = builtinService.getConstants();
        const builtinModules = builtinService.getModules();
        const builtinObj = {};

        for (const item in modules) {
            if (modules.hasOwnProperty(item)) {
                builtinObj[item] = modules[item]?.();
            }
        }
        expect(builtinConstants).toEqual(constants);
        expect(builtinModules).toEqual(builtinObj);
    });

    test('Should support to get specific the built-in data', () => {
        const undefinedData = builtinService.getConstant(
            'return-undefined' as any
        );
        expect(undefinedData).toBeUndefined();

        const constant = builtinService.getConstant('PANEL_PROBLEMS');
        expect(constant).toEqual({
            active: true,
            id: 'PANEL_PROBLEMS',
            value: constants.PANEL_PROBLEMS,
        });
    });

    test('Should support to inactive the specific module', () => {
        const inactiveModule = 'builtInExplorerActivityItem';
        expect(builtinService.getModules()[inactiveModule]).not.toBeUndefined();
        expect(builtinService.getModule(inactiveModule)?.active).toBe(true);

        builtinService.inactiveModule(inactiveModule);

        expect(builtinService.getModules()[inactiveModule]).toBeUndefined();
        expect(builtinService.getModule(inactiveModule)?.active).toBe(false);
    });

    test('[deprecated]Should support to inactive the specific constant', () => {
        const inactiveConstant = 'SAMPLE_FOLDER_PANEL_ID';
        expect(
            builtinService.getConstants()[inactiveConstant]
        ).not.toBeUndefined();
        expect(builtinService.getConstant(inactiveConstant)?.active).toBe(true);

        builtinService.inactiveConstant(inactiveConstant);

        expect(builtinService.getConstants()[inactiveConstant]).toBeUndefined();
        expect(builtinService.getConstant(inactiveConstant)?.active).toBe(
            false
        );
    });

    test('Should log ERROR message when inactive failed', () => {
        expectLoggerErrorToBeCalled(() => {
            builtinService.inactiveConstant('log-error' as any);
        });

        expectLoggerErrorToBeCalled(() => {
            builtinService.inactiveModule('log-error' as any);
        });
    });
});
