import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import { Action2, KeybindingWeight } from './common';
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
    static readonly label = localize('menu.showSideBar', 'Show Side Bar');
    private readonly layoutService: ILayoutService;
    private readonly activityBarService: IActivityBarService;
    private readonly menuBarService: IMenuBarService;
    private readonly sideBarService: ISidebarService;
    private _preActivityBar: string | undefined;

    constructor() {
        super({
            id: CommandQuickSideBarViewAction.ID,
            label: CommandQuickSideBarViewAction.label,
            title: CommandQuickSideBarViewAction.label,
            alias: 'Show Side Bar',
            precondition: undefined,
            f1: false,
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
        const sidebarId = args.length ? args[0] : this._preActivityBar;
        const { sideBar } = this.layoutService.getState();
        const { selected } = this.activityBarService.getState();
        if (!sideBar.hidden) {
            this.activityBarService.setActive();
            this.menuBarService.update(CommandQuickSideBarViewAction.ID, {
                icon: '',
            });
            this._preActivityBar = selected;
        } else {
            this.activityBarService.setActive(sidebarId);
            // If args have sidebar id, then sidebar should active the panel after visible
            sidebarId && this.sideBarService.setActive(sidebarId);
            this.menuBarService.update(CommandQuickSideBarViewAction.ID, {
                icon: 'check',
            });
            this._preActivityBar = undefined;
        }
        this.layoutService.setSideBarHidden();
    }
}
