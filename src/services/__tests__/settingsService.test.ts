import { ISettings, SettingsEvent } from 'mo/model/settings';
import 'reflect-metadata';
import { SettingsService } from '../settingsService';
import { BuiltInColorTheme } from '../theme/colorThemeService';

const mockData = {
    project: {
        id: '000',
        name: 'testProject',
    },
};

type TestSetting = typeof mockData & ISettings;

jest.setTimeout(60000);

describe('Test the SettingsService', () => {
    let settingsService = new SettingsService();
    afterEach(() => {
        settingsService = new SettingsService();
    });

    test('Initialized the built-in Settings', () => {
        const config = settingsService.getSettings();
        expect(config.colorTheme).toEqual(BuiltInColorTheme.id);
        expect(config.editor).toEqual({});
        expect(config.locale).toBeUndefined();
    });

    test('Append a new setting item', () => {
        settingsService.append(mockData);
        const config = settingsService.getSettings() as TestSetting;
        expect(config.project).toEqual(mockData.project);
    });

    test('Listen to the Settings changed', () => {
        const expected = {
            name: 'test',
        };
        const onChange = jest.fn((tab) => {
            expect(tab).toEqual(expected);
        });
        settingsService.onChangeSettings(onChange);
        settingsService.emit(SettingsEvent.OnChange, expected);
        expect(onChange).toBeCalled();
    });

    test('Update a setting', () => {
        const expectedSettings = {
            colorTheme: 'invalidTheme',
            locale: 'invalidLocale',
            editor: {
                tabSize: 6,
            },
            project: {
                name: 'ttt',
            },
        };
        settingsService.update(expectedSettings);
        const config = settingsService.getSettings() as TestSetting;
        expect(config.colorTheme).toEqual(BuiltInColorTheme.id);
        expect(config.locale).toBeUndefined();
        expect(config.editor?.tabSize).toBe(expectedSettings.editor.tabSize);
        expect(config.project).toEqual(expectedSettings.project);
    });

    test('Apply the settings', () => {
        const expectedSettings = {
            colorTheme: 'test',
            locale: 'EN',
            editor: {
                tabSize: 6,
            },
        };
        const mySettingService = new SettingsService() as any;
        mySettingService.colorThemeService.setTheme = jest.fn((value) => {
            expect(value).toEqual(expectedSettings.colorTheme);
        });
        mySettingService.localeService.setCurrentLocale = jest.fn((value) => {
            expect(value).toEqual(expectedSettings.locale);
        });
        mySettingService.editorService.updateEditorOptions = jest.fn(
            (value) => {
                expect(value).toEqual(expectedSettings.editor);
            }
        );
        mySettingService.applySettings(expectedSettings);
    });

    test('Flat an Object ', () => {
        const flatted: any = settingsService.flatObject(mockData);
        expect(flatted['project.id']).toBeDefined();
        expect(flatted['project.name']).toBeDefined();
    });

    test('Normalize a FlatObject', () => {
        const obj = {
            'a.b': 1,
            'c.d.e': 2,
        };
        const normalObj: any = settingsService.normalizeFlatObject(
            JSON.stringify(obj)
        );
        expect(normalObj.a.b).toEqual(1);
        expect(normalObj.c.d.e).toEqual(2);
    });

    test('Normalize a invalid FlatObject', () => {
        const jsonStr = `{
            'c.d.e': 2,fefefe
        }`;
        function fn() {
            settingsService.normalizeFlatObject(jsonStr);
        }
        expect(fn).toThrowErrorMatchingSnapshot();
    });

    test('Convert to JSON string', () => {
        const obj = {
            'a.b': 1,
            'c.d.e': 2,
        };
        const normalObj: string = settingsService.toJSONString(obj);
        expect(typeof normalObj).toEqual('string');
        expect(normalObj).toContain('a.b');
    });

    test('Convert invalid object to JSON string', () => {
        const objB: any = { a: null };
        const objA: any = { b: null };
        objA.b = objB;
        objB.a = objA;
        function fn() {
            settingsService.toJSONString(objA);
        }
        expect(fn).toThrowErrorMatchingSnapshot();
    });

    test('Open the Settings in the Editor Panel', () => {
        (settingsService as any).editorService.open = jest.fn((tab) => {
            expect(tab.id).toEqual(settingsService.getDefaultSettingsTab().id);
            expect(tab.data.value).toEqual(
                settingsService.flatObject2JSONString(
                    settingsService.getSettings()
                )
            );
        });
        settingsService.openSettingsInEditor();
    });
});
