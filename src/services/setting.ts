import { BaseService } from 'mo/glue';
import { SettingModel, SettingsEvent } from 'mo/models/setting';
import { inject, injectable } from 'tsyringe';

import type { BuiltinService } from './builtin';
import type { ColorThemeService } from './colorTheme';
import type { EditorService } from './editor';
import type { LocaleService } from './locale';

@injectable()
export class SettingsService extends BaseService<SettingModel> {
    protected state: SettingModel;
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('locale') private locale: LocaleService,
        @inject('colorTheme') private colorTheme: ColorThemeService,
        @inject('editor') private editor: EditorService
    ) {
        super('setting');
        this.state = new SettingModel();
    }

    public has(name: string): boolean {
        return Object.hasOwn(this.state.data, name);
    }

    public getAll() {
        return this.getState().data;
    }

    public get<T = any>(name: string): T {
        return this.state.data[name];
    }

    public update(next: Record<string, any>): void {
        this.dispatch((draft) => {
            Object.assign(draft.data, next);
        });
    }

    public remove(name: string): void {
        this.dispatch((draft) => {
            if (Object.hasOwn(draft.data, name)) {
                delete draft.data[name];
            }
        });
    }

    public access() {
        const { EDITOR_ITEM_SETTING: SETTING_ID } = this.builtin.getState().constants;
        const settings: Record<string, any> = {
            locale: this.locale.getState().current,
            colorTheme: this.colorTheme.getState().current,
            ...this.getAll(),
        };
        const { current } = this.editor.getState();
        if (!current || !this.editor.getTab(SETTING_ID, current)) {
            this.editor.open(
                {
                    id: SETTING_ID,
                    name: this.locale.localize('activityBar.item.setting', 'Settings'),
                    icon: 'file',
                    value: JSON.stringify(settings, null, 4),
                    language: 'json',
                },
                current
            );
        } else {
            this.editor.setCurrent(SETTING_ID, current);
        }
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (value: string) => void): void {
        this.subscribe(SettingsEvent.OnChange, callback);
    }
}
