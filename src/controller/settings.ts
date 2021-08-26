import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';
import { debounce } from 'lodash';

import {
    EditorService,
    IEditorService,
    ISettingsService,
    SettingsService,
} from 'mo/services';
import { SettingsEvent, BuiltInSettingsTab } from 'mo/model/settings';

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

    /**
     * Delay the each Settings change event 600 milliseconds,
     * and then call the `update` and `emit` functions;
     */
    private onChangeSettings = debounce((args) => {
        this.settingsService.update(args);
        this.emit(SettingsEvent.OnChange, args);
    }, 600);

    private initialize() {
        this.editorService.onUpdateTab((tab) => {
            if (tab.id === BuiltInSettingsTab.id) {
                const settingsValue = this.settingsService.normalizeFlatObject(
                    tab.data?.value || ''
                );
                this.onChangeSettings(settingsValue);
            }
        });
    }
}

// Register singleton
container.resolve(SettingsController);
