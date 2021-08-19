import 'reflect-metadata';
import { container } from 'tsyringe';
import { ExtensionService } from '../extensionService';
import { defaultExtensions } from 'mo/extensions';
import { IContribute, IExtension } from 'mo/model';
import { CommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';
import { Action2 } from 'mo/monaco/common';
import logger from 'mo/common/logger';

describe('Test ExtensionService', () => {
    const instance = container.resolve(ExtensionService);

    afterEach(() => {
        instance.reset();
    });

    test('Instance the ExtensionService class success', () => {
        expect(instance.getAllExtensions().length).toBe(0);
        expect(instance).not.toBeNull();
    });

    test('Load empty extensions', () => {
        instance.load([]);
        expect(instance.getAllExtensions().length).toBe(0);
    });

    test('Load and Reset the extensions', () => {
        instance.load(defaultExtensions);
        expect(instance.getAllExtensions().length).toEqual(
            defaultExtensions.length
        );
        instance.reset();
        expect(instance.getAllExtensions().length).toBe(0);
    });


    test('Load an extension and activate it', () => {
        const ext: IExtension = {
            name: 'test',
            activate: jest.fn((ctx) => {
                expect(ext).not.toBeNull();
            }),
        };
        instance.load([ext]);

        expect(instance.getExtension('test')).not.toBeUndefined();
        expect(ext.activate).toBeCalled();
    });

    test('Remove the extension', () => {
        const ext: IExtension = {
            name: 'test',
            activate: jest.fn(),
        };
        instance.load([ext]);
        expect(instance.getExtension('test')).not.toBeUndefined();
        instance.remove(ext);
        expect(instance.getExtension('test')).toBeUndefined();
        expect(instance.remove(ext)).toBeUndefined();
    });

    test('Load an extension and it throws an Error', () => {
        logger.error = jest.fn();
        const ext: IExtension = {
            name: 'test',
            activate: () => {
                throw new Error('Test Error');
            },
        };
        instance.load([ext]);
        expect(logger.error).toBeCalled();
    });

    test('Load an extension contributes', () => {
        const ext: IExtension = {
            name: 'testContrib',
            activate: jest.fn(),
            contributes: {},
        };

        instance.loadContributes = jest.fn();
        instance.load([ext]);
        expect(instance.loadContributes).toBeCalled();
    });

    test('Load the theme contribute', () => {
        const theme = [
            {
                id: 'testTheme',
                label: 'testTheme',
            },
        ];
        const instance: any = new ExtensionService();
        const contrib: IContribute = { commands: 'contrib' };

        instance.colorThemeService.load = jest.fn((them) => {
            expect(them).toEqual(theme);
        });

        instance.loadContributes(contrib);
        expect(instance.colorThemeService.load).not.toBeCalled();

        contrib.themes = theme;
        instance.loadContributes(contrib);
        expect(instance.colorThemeService.load).toBeCalled();
    });

    test('Register an Action', () => {
        class MyAction extends Action2 {
            static ID = 'MyAction';
            constructor() {
                super({
                    id: MyAction.ID,
                    label: 'test',
                    f1: false,
                });
            }
            run() { }
        }
        instance.registerAction(MyAction);
        const command = CommandsRegistry.getCommand(MyAction.ID);
        expect(command).not.toBeNull();
        expect(command.id).toEqual(MyAction.ID);
    });

    test('The executeCommand should call the commandService.executeCommand function', () => {
        const testFn = jest.fn();
        const instance: any = new ExtensionService();
        instance.monacoService.commandService.executeCommand = jest.fn((id, args) => {
            expect(id).toEqual('test');
            expect(args).toEqual('args');
        });
        instance.executeCommand('test', 'args');
        expect(testFn).toBeCalled();
    });
});
