import { Action2, CATEGORIES, KeybindingWeight } from './common';
import { ServicesAccessor } from 'monaco-editor/esm/vs/platform/instantiation/common/instantiation';
import { KeyChord } from 'monaco-editor/esm/vs/base/common/keyCodes';
import { localize } from 'mo/i18n/localize';
import { KeyMod, KeyCode } from 'mo/monaco';
import { MENU_VIEW_PANEL } from 'mo/model';
import { container } from 'tsyringe';
import {
    ILayoutService,
    IMenuBarService,
    LayoutService,
    MenuBarService,
} from 'mo/services';

export class QuickTogglePanelAction extends Action2 {
    static readonly ID = MENU_VIEW_PANEL;
    static readonly LABEL = localize('menu.showPanel.title', 'Toggle Panel');
    private readonly layoutService: ILayoutService;
    private readonly menuBarService: IMenuBarService;
    constructor() {
        super({
            id: QuickTogglePanelAction.ID,
            label: QuickTogglePanelAction.LABEL,
            title: QuickTogglePanelAction.LABEL,
            category: CATEGORIES.View,
            alias: 'Toggle Panel',
            precondition: undefined,
            f1: true,
            keybinding: {
                when: undefined,
                weight: KeybindingWeight.WorkbenchContrib,
                // eslint-disable-next-line new-cap
                primary: KeyChord(KeyMod.CtrlCmd | KeyCode.KEY_J),
            },
        });
        this.layoutService = container.resolve(LayoutService);
        this.menuBarService = container.resolve(MenuBarService);
    }
    run(accessor: ServicesAccessor) {
        const { hidden } = this.layoutService.getState().panel;
        this.menuBarService.update(QuickTogglePanelAction.ID, {
            icon: hidden ? 'check' : '',
        });
        this.layoutService.setPanelHidden();
    }
}
