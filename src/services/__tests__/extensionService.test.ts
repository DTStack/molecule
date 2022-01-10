import 'reflect-metadata';
import { cloneDeep } from 'lodash';
import { container } from 'tsyringe';
import { CommandsRegistry } from 'monaco-editor/esm/vs/platform/commands/common/commands';

import { defaultExtensions } from 'mo/extensions';
import { IContribute, IExtension } from 'mo/model';
import { Action2 } from 'mo/monaco/action';
import logger from 'mo/common/logger';
import { ExtensionService } from '../extensionService';

describe('Test ExtensionService', () => {
    const instance = container.resolve(ExtensionService);
    const mockExtension: IExtension = {
        id: 'test',
        name: 'test',
        activate: jest.fn(),
        contributes: {},
        dispose() {},
    };

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
        instance.load([mockExtension]);

        expect(instance.getExtension('test')).not.toBeUndefined();
        expect(mockExtension.activate).toBeCalled();
    });

    test('Not allowed to add the duplicate extension', () => {
        instance.load([mockExtension]);
        instance.load([mockExtension]);

        expect(mockExtension.activate).toBeCalledTimes(1);
    });

    test('Dispose an extension', () => {
        instance.load([mockExtension]);
        expect(instance.getExtension('test')).not.toBeUndefined();

        instance.dispose('test');
        expect(instance.getExtension('test')).toBeUndefined();
    });

    test('Load the extension contributes', () => {
        instance.loadContributes = jest.fn();
        instance.load([mockExtension]);

        expect(instance.loadContributes).toBeCalled();
    });

    test('Load an extension and it throws an Error', () => {
        logger.error = jest.fn();
        mockExtension.activate = () => {
            throw new Error('Test Error');
        };
        instance.load([mockExtension]);

        expect(logger.error).toBeCalled();
    });

    test('Extensions add the themes contribute', () => {
        const theme = [
            {
                id: 'testTheme',
                label: 'testTheme',
            },
        ];
        const instance: any = new ExtensionService();
        const contrib: IContribute = { themes: undefined };

        instance.colorThemeService.addThemes = jest.fn((them) => {
            expect(them).toEqual(theme);
        });

        instance.loadContributes(contrib);
        expect(instance.colorThemeService.addThemes).not.toBeCalled();

        contrib.themes = theme;
        instance.loadContributes(contrib);
        expect(instance.colorThemeService.addThemes).toBeCalled();
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
            run() {}
        }
        const myAction = instance.registerAction(MyAction);
        const command = CommandsRegistry.getCommand(MyAction.ID);

        expect(command).not.toBeNull();
        expect(command.id).toEqual(MyAction.ID);
        expect(myAction.dispose).not.toBeUndefined();
    });

    test('The executeCommand should call the commandService.executeCommand function', () => {
        const testFn = jest.fn((id, args) => {
            expect(id).toEqual('test');
            expect(args).toEqual('args');
        });
        const instance: any = new ExtensionService();

        instance.monacoService.commandService.executeCommand = testFn;
        instance.executeCommand('test', 'args');
        expect(testFn).toBeCalled();
    });

    test('Dispose the extension', () => {
        mockExtension.dispose = jest.fn();
        instance.load([mockExtension]);

        instance.dispose(mockExtension.id);
        expect(mockExtension.dispose).toBeCalled();
        expect(instance.getExtension(mockExtension.id)).toBeUndefined();

        instance.load([mockExtension]);
        instance.dispose('unknown');
        expect(instance.getAllExtensions().length).toBe(1);
    });

    test('Dispose all extensions', () => {
        mockExtension.dispose = jest.fn();
        instance.load([mockExtension]);

        instance.disposeAll();
        expect(mockExtension.dispose).toBeCalled();
        expect(instance.getAllExtensions().length).toBe(0);
    });

    test('Inactive the specific extensions', () => {
        mockExtension.activate = jest.fn();

        instance.inactive((extension) => {
            if (extension.id === mockExtension.id) {
                return true;
            }
            return false;
        });
        instance.load([mockExtension]);

        expect(mockExtension.activate).not.toBeCalled();
    });

    test('Split the locale languages extensions', () => {
        const languageExt = cloneDeep(mockExtension);
        languageExt.contributes!.languages = [];
        const extensions: IExtension[] = [mockExtension, languageExt];

        const [languagesExts, otherExts] = instance.splitLanguagesExts(
            extensions
        );

        expect(languagesExts.length).toBe(1);
        expect(otherExts.length).toBe(1);
    });

    test('The ExtensionService loaded status', () => {
        expect(instance.isLoaded()).not.toBeTruthy();
        instance.setLoaded();
        expect(instance.isLoaded()).toBeTruthy();
        instance.setLoaded(false);
        expect(instance.isLoaded()).not.toBeTruthy();
    });
});
