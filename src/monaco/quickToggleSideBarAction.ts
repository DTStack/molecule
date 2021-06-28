import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import { Action2, CATEGORIES, KeybindingWeight } from './common';
import { container } from 'tsyringe';
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
import { ID_SIDE_BAR } from 'mo/common/id';

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
    private _preActivityBar: string | undefined;

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
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_B),
            },
        });
        this.layoutService = container.resolve(LayoutService);
        this.activityBarService = container.resolve(ActivityBarService);
        this.menuBarService = container.resolve(MenuBarService);
        this.sideBarService = container.resolve(SidebarService);
    }
    run(accessor: ServicesAccessor, ...args) {
        const sidebarId = args[0];
        const { sideBar } = this.layoutService.getState();
        const { selected } = this.activityBarService.getState();
        if (sideBar.hidden) {
            this.activityBarService.setActive(
                sidebarId || this._preActivityBar
            );
            this.sideBarService.setActive(sidebarId || this._preActivityBar);
            this.menuBarService.update(CommandQuickSideBarViewAction.ID, {
                icon: 'check',
            });
            this.layoutService.setSideBarHidden();
        } else {
            this.activityBarService.setActive();
            this.sideBarService.setActive();
            this.menuBarService.update(CommandQuickSideBarViewAction.ID, {
                icon: '',
            });
            this.layoutService.setSideBarHidden();
            this._preActivityBar = selected;
        }
    }
}
