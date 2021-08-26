import 'reflect-metadata';
import React from 'react';
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
import { ILocale, ILocaleService, LocaleService } from 'mo/i18n';
import { INotificationService, NotificationService } from 'mo/services';
import { NotificationController } from '.';
import { INotificationController } from 'mo/workbench';
import { LocaleNotification } from 'mo/workbench/notification/notificationPane/localeNotification';

export interface ISettingsController {}

@singleton()
export class SettingsController
    extends Controller
    implements ISettingsController {
    private readonly editorService: IEditorService;
    private readonly settingsService: ISettingsService;
    private readonly localeService: ILocaleService;
    private readonly notificationService: INotificationService;
    private readonly notificationController: INotificationController;

    constructor() {
        super();
        this.editorService = container.resolve(EditorService);
        this.settingsService = container.resolve(SettingsService);
        this.localeService = container.resolve(LocaleService);
        this.notificationService = container.resolve(NotificationService);
        this.notificationController = container.resolve(NotificationController);
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
        this.localeService.onChange((prev: ILocale, next: ILocale) => {
            this.notifyLocaleChanged(prev, next);
        });
    }

    private notifyLocaleChanged(prev: ILocale, next: ILocale) {
        const notify = {
            value: next,
            render(value) {
                return <LocaleNotification key={next.id} locale={next.id} />;
            },
        };
        this.notificationService.add([notify]);
        this.notificationController.toggleNotifications();
    }
}

// Register singleton
container.resolve(SettingsController);
