import { ISettings } from 'mo/model/settings';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { SettingsService } from '../settingsService';
// import { EditorService } from '../workbench/editorService';

const mockData = {
    project: {
        id: '000',
        name: 'testProject',
    },
};

type TestSetting = typeof mockData & ISettings;

jest.setTimeout(60000);

describe('Test SettingsService', () => {
    const settingsService = container.resolve(SettingsService);
    // const editorService = container.resolve(EditorService);

    test('getConfiguration(): ISettings', () => {
        const config = settingsService.getConfiguration();
        expect(config.workbench).toBeDefined();
        expect(config.editor).toBeDefined();
    });

    test('append(configuration: IConfiguration): void', () => {
        settingsService.append(mockData);
        const config = settingsService.getConfiguration() as TestSetting;
        expect(config.project).toBeDefined();
    });

    test('update(configuration: IConfiguration): void', () => {
        const expectedName = 'test111';
        settingsService.update({
            project: {
                name: expectedName,
            },
        });
        const config = settingsService.getConfiguration() as TestSetting;
        expect(config.project.name).toEqual(expectedName);
    });

    test('flatObject(obj: object): object', () => {
        const flatted: any = settingsService.flatObject(mockData);
        expect(flatted['project.id']).toBeDefined();
        expect(flatted['project.name']).toBeDefined();
    });

    test('update(configuration: IConfiguration): void', () => {
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

    // test('onChangeConfiguration(callback: (tab: IEditorTab<BuiltInSettingsTabType>) => void): void', async done => {

    //     const expected = 'updated';
    //     settingsService.openSettingsInEditor();
    //     const currentGroup = editorService.getState().current;
    //     const groupId = currentGroup?.id || -1;

    //     await editorService.updateTab(Object.assign(BuiltInSettingsTab, {
    //         data: {
    //             value: expected
    //         }
    //     }), groupId);

    //     function callback(tab) {
    //         try {
    //             expect(tab.data?.data.value).toEqual(expected);
    //             console.log('tab:', tab);
    //             done();
    //           } catch (error) {
    //             done(error);
    //           }
    //     }

    //     settingsService.onChangeConfiguration(callback);
    // });
});
