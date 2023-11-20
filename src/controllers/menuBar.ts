import { BaseController } from 'mo/glue';
import { MenuBarEvent } from 'mo/models/menuBar';
import { BuiltinService } from 'mo/services/builtin';
import { LayoutService } from 'mo/services/layout';
import { MenuBarService } from 'mo/services/menuBar';
import type { IMenuItemProps } from 'mo/types';
import { TreeHelper } from 'mo/utils/tree';
import { inject, injectable } from 'tsyringe';

export interface IMenuBarController extends BaseController {
    onSelect: (item: IMenuItemProps) => void;
}

@injectable()
export class MenuBarController extends BaseController implements IMenuBarController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('menuBar') private menuBar: MenuBarService,
        @inject('layout') private layout: LayoutService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const state = this.builtin.getState();
        const { builtInMenuBarData } = state.modules;
        if (builtInMenuBarData) {
            this.checkView(builtInMenuBarData);
            this.menuBar.setMenus(builtInMenuBarData);
        }
    }

    private getCheck(hidden: boolean) {
        return hidden ? undefined : 'check';
    }

    private checkView(data?: IMenuItemProps) {
        if (!data) return;
        const treeHelper = new TreeHelper(data);
        const { menuBar, auxiliaryBar, activityBar, statusBar, panel, sidebar } =
            this.layout.getState();
        const {
            MENU_VIEW_MENUBAR,
            MENU_VIEW_AUXILIARY,
            MENU_VIEW_ACTIVITYBAR,
            MENU_VIEW_STATUSBAR,
            MENU_VIEW_PANEL,
            MENU_VIEW_SIBEBAR,
        } = this.builtin.getState().constants;
        const viewItems = [
            { key: MENU_VIEW_MENUBAR, icon: this.getCheck(menuBar.hidden) },
            { key: MENU_VIEW_AUXILIARY, icon: this.getCheck(auxiliaryBar.hidden) },
            { key: MENU_VIEW_SIBEBAR, icon: this.getCheck(sidebar.hidden) },
            { key: MENU_VIEW_ACTIVITYBAR, icon: this.getCheck(activityBar.hidden) },
            { key: MENU_VIEW_STATUSBAR, icon: this.getCheck(statusBar.hidden) },
            { key: MENU_VIEW_PANEL, icon: this.getCheck(panel.hidden) },
        ];
        viewItems.forEach((item) => {
            const node = treeHelper.getNode(item.key);
            if (node) {
                node.icon = item.icon;
            }
        });
    }

    public readonly onSelect = (item: IMenuItemProps) => {
        this.emit(MenuBarEvent.onSelect, item.id);
    };
}
