import LineInfo from 'mo/client/components/lineInfo';
import { BaseController } from 'mo/glue';
import { type IStatusBarItem, StatusBarEvent } from 'mo/models/statusBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { StatusBarService } from 'mo/services/statusBar';
import { inject, injectable } from 'tsyringe';

export interface IStatusBarController extends BaseController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
    // onContextMenuClick?: (e: React.MouseEvent, item: IMenuItemProps | undefined) => void;
}

@injectable()
export class StatusBarController extends BaseController implements IStatusBarController {
    constructor(
        @inject('statusBar') private statusBar: StatusBarService,
        @inject('builtin') private builtin: BuiltinService
    ) {
        super();
        // this.menuBarController = container.resolve(MenuBarController);
        // this.statusBarService = container.resolve(StatusBarService);
        // this.builtinService = container.resolve(BuiltinService);
        this.initView();
    }

    private initView() {
        const state = this.builtin.getState();
        const { STATUS_EDITOR_INFO } = state.modules;
        // const nextRightItems = cloneDeep(this.statusBar.getState().rightItems);
        if (STATUS_EDITOR_INFO) {
            // nextRightItems.push({
            //     ...STATUS_EDITOR_INFO,
            //     render: (item: IStatusBarItem) => <EditorStatusBarView {...item} />,
            // });
            this.statusBar.add(
                {
                    ...STATUS_EDITOR_INFO,
                    render: LineInfo,
                },
                'right'
            );
        }
        // const { STATUS_EDITOR_INFO, CONTEXT_MENU_HIDE_STATUS_BAR } =
        //     this.builtinService.getModules();

        // const nextRightItems = cloneDeep(this.statusBar.getState().rightItems);
        // const nextContextMenu = cloneDeep(this.statusBar.getState().contextMenu || []);
        // if (STATUS_EDITOR_INFO) {
        //     nextRightItems.push({
        //         ...STATUS_EDITOR_INFO,
        //         render: (item: IStatusBarItem) => <EditorStatusBarView {...item} />,
        //     });
        // }

        // if (CONTEXT_MENU_HIDE_STATUS_BAR) {
        //     nextContextMenu.push(CONTEXT_MENU_HIDE_STATUS_BAR);
        // }
        // this.statusBar.setState({
        //     rightItems: nextRightItems,
        //     contextMenu: nextContextMenu,
        // });
    }

    public onClick = (e: React.MouseEvent, item: IStatusBarItem) => {
        this.emit(StatusBarEvent.onClick, e, item);
    };

    // public readonly onContextMenuClick = (
    //     e: React.MouseEvent,
    //     item: IMenuItemProps | undefined
    // ) => {
    //     const menuId = item?.id;
    //     const { STATUS_BAR_HIDE_ID } = this.builtinService.getConstants();
    //     switch (menuId) {
    //         case STATUS_BAR_HIDE_ID:
    //             this.menuBarController.updateStatusBar();
    //             break;
    //     }
    // };
}
