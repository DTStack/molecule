import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';
import {
    EditorService,
    IEditorService,
    IPanelService,
    ISettingsService,
    PanelService,
    SettingsService,
} from 'mo/services';
import { SettingsEvent, BuiltInSettingsTab } from 'mo/model/settings';

export interface ISettingsController {}

@singleton()
export class SettingsController
    extends Controller
    implements ISettingsController {
    private readonly panelService: IPanelService;
    private readonly editorService: IEditorService;
    private readonly settingsService: ISettingsService;

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
        this.editorService = container.resolve(EditorService);
        this.settingsService = container.resolve(SettingsService);

        this.initial();
    }

    private initial() {
        this.editorService.onUpdateTab((tab) => {
            if (tab.id === BuiltInSettingsTab.id) {
                this.emit(SettingsEvent.OnChange, tab);
                const config = this.settingsService.normalizeFlatObject(
                    tab.data?.value || ''
                );
                this.settingsService.update(config);
            }
        });
    }

    public readonly onClick = (event: React.MouseEvent) => {
        console.log('onClick:', this.panelService);
    };
}
