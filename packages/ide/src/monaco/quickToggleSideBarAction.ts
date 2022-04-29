import 'reflect-metadata';
import { container } from 'tsyringe';
import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';

import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import {
    ActivityBarService,
    IActivityBarService,
    ILayoutService,
    IMenuBarService,
    ISidebarService,
    LayoutService,
    MenuBarService,
    SidebarService,
} from 'mo/services';
import { ID_SIDE_BAR } from '@dtinsight/molecule-common';
import type { UniqueId } from '@dtinsight/molecule-common';
import { Action2 } from 'mo/monaco/action';
import { CATEGORIES, KeybindingWeight } from 'mo/monaco/common';

export class CommandQuickSideBarViewAction extends Action2 {
    static readonly ID = ID_SIDE_BAR;
    static readonly LABEL = localize(
        'menu.showSideBar.label',
        'Toggle Side Bar Visibility'
    );
    private readonly layoutService: ILayoutService;
    private readonly activityBarService: IActivityBarService;
    private readonly menuBarService: IMenuBarService;
    private readonly sideBarService: ISidebarService;
    private _preActivityBar: UniqueId | undefined;

    constructor() {
        super({
            id: CommandQuickSideBarViewAction.ID,
            label: CommandQuickSideBarViewAction.LABEL,
            title: CommandQuickSideBarViewAction.LABEL,
            category: CATEGORIES.View,
            alias: 'Toggle Side Bar',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KeyB),
            },
        });
        this.layoutService = container.resolve(LayoutService);
        this.activityBarService = container.resolve(ActivityBarService);
        this.menuBarService = container.resolve(MenuBarService);
        this.sideBarService = container.resolve(SidebarService);
    }
    run(accessor: ServicesAccessor, ...args) {
        const sidebarId = args[0];
        const { selected } = this.activityBarService.getState();

        const hidden = this.layoutService.toggleSidebarVisibility();

        const activityId = sidebarId || this._preActivityBar;
        this.activityBarService.setActive(hidden ? undefined : activityId);
        this.sideBarService.setActive(hidden ? undefined : activityId);
        this.menuBarService.update(CommandQuickSideBarViewAction.ID, {
            icon: hidden ? '' : 'check',
        });

        hidden && (this._preActivityBar = selected);
    }
}
