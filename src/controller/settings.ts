import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';
import {
    EditorService,
    IEditorService,
    ISettingsService,
    SettingsService,
} from 'mo/services';
import {
    SettingsEvent,
    BuiltInSettingsTab,
    initialEditorSetting,
    initialWorkbenchSetting,
} from 'mo/model/settings';

export interface ISettingsController {}

@singleton()
export class SettingsController
    extends Controller
    implements ISettingsController {
    private readonly editorService: IEditorService;
    private readonly settingsService: ISettingsService;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.settingsService = container.resolve(SettingsService);

        this.initialize();
    }

    private initialize() {
        this.editorService.onUpdateTab((tab) => {
            if (tab.id === BuiltInSettingsTab.id) {
                const config = this.settingsService.normalizeFlatObject(
                    tab.data?.value || ''
                );
                config.editor = { ...initialEditorSetting, ...config.editor };
                config.workbench = {
                    ...initialWorkbenchSetting,
                    ...config.workbench,
                };
                this.settingsService.update(config);
                this.emit(SettingsEvent.OnChange, tab);
            }
        });
    }
}

// Register singleton
container.resolve(SettingsController);
