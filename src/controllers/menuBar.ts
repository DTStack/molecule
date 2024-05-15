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
    onContextMenu: (pos: { x: number; y: number }) => void;
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
        const { MENUBAR_ITEMS } = this.builtin.getModules();
        if (MENUBAR_ITEMS) {
            this.checkView(MENUBAR_ITEMS);
            this.menuBar.setMenus(MENUBAR_ITEMS);
        }
    }

    private getCheck(hidden?: boolean) {
        return hidden ? undefined : 'check';
    }

    private checkView(data?: IMenuItemProps[]) {
        if (!data) return;
        const treeHelper = new TreeHelper(data);
        const { menuBar, auxiliaryBar, activityBar, statusBar, panel, sidebar } =
            this.layout.getState();
        const {
            MENUBAR_ITEM_MENU,
            MENUBAR_ITEM_AUXILIARY,
            MENUBAR_ITEM_ACTIVITYBAR,
            MENUBAR_ITEM_STATUSBAR,
            MENUBAR_ITEM_PANEL,
            MENUBAR_ITEM_SIDEBAR,
        } = this.builtin.getState().constants;
        const viewItems = [
            { key: MENUBAR_ITEM_MENU, icon: this.getCheck(menuBar.hidden) },
            { key: MENUBAR_ITEM_AUXILIARY, icon: this.getCheck(auxiliaryBar.hidden) },
            { key: MENUBAR_ITEM_SIDEBAR, icon: this.getCheck(sidebar.hidden) },
            { key: MENUBAR_ITEM_ACTIVITYBAR, icon: this.getCheck(activityBar.hidden) },
            { key: MENUBAR_ITEM_STATUSBAR, icon: this.getCheck(statusBar.hidden) },
            { key: MENUBAR_ITEM_PANEL, icon: this.getCheck(panel.hidden) },
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

    public readonly onContextMenu = (pos: { x: number; y: number }) => {
        this.emit(MenuBarEvent.onContextMenu, pos);
    };
}
