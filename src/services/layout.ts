import { BaseService } from 'mo/glue';
import { LayoutModel } from 'mo/models/layout';
import type { DirectionLiteral, FunctionalOrSingle } from 'mo/types';
import { inject, injectable } from 'tsyringe';

import type { BuiltinService } from './builtin';
import type { MenuBarService } from './menuBar';

@injectable()
export class LayoutService extends BaseService<LayoutModel> {
    protected state: LayoutModel;
    constructor(
        @inject('menuBar') private menuBar: MenuBarService,
        @inject('builtin') private builtin: BuiltinService
    ) {
        super('layout');
        this.state = new LayoutModel();
    }

    public getMenuBar() {
        return this.getState().menuBar;
    }

    public setMenuBar(visibility: FunctionalOrSingle<boolean>) {
        this.dispatch(
            (draft) => {
                draft.menuBar.hidden =
                    typeof visibility === 'function'
                        ? !visibility(!draft.menuBar.hidden)
                        : !visibility;
            },
            () => {
                // ===================== effects =====================
                this.menuBar.toggleChecked(this.builtin.getState().constants.MENUBAR_ITEM_MENU);
            }
        );
    }

    public setPanel(visibility: FunctionalOrSingle<boolean>): void {
        this.dispatch(
            (draft) => {
                draft.panel.hidden =
                    typeof visibility === 'function'
                        ? !visibility(!draft.panel.hidden)
                        : !visibility;
            },
            () => {
                // ===================== effects =====================
                this.menuBar.toggleChecked(this.builtin.getState().constants.MENUBAR_ITEM_PANEL);
            }
        );
    }

    public setSidebar(visibility: FunctionalOrSingle<boolean>): void {
        this.dispatch(
            (draft) => {
                draft.sidebar.hidden =
                    typeof visibility === 'function'
                        ? !visibility(!draft.sidebar.hidden)
                        : !visibility;
            },
            () => {
                // ===================== effects =====================
                this.menuBar.toggleChecked(this.builtin.getState().constants.MENUBAR_ITEM_SIDEBAR);
            }
        );
    }

    public setActivityBar(visibility: FunctionalOrSingle<boolean>): void {
        this.dispatch(
            (draft) => {
                draft.activityBar.hidden =
                    typeof visibility === 'function'
                        ? !visibility(!draft.activityBar.hidden)
                        : !visibility;
            },
            () => {
                // ===================== effects =====================
                this.menuBar.toggleChecked(
                    this.builtin.getState().constants.MENUBAR_ITEM_ACTIVITYBAR
                );
            }
        );
    }

    public setStatusBar(visibility: FunctionalOrSingle<boolean>): void {
        this.dispatch(
            (draft) => {
                draft.statusBar.hidden =
                    typeof visibility === 'function'
                        ? !visibility(!draft.statusBar.hidden)
                        : !visibility;
            },
            () => {
                // ===================== effects =====================
                this.menuBar.toggleChecked(
                    this.builtin.getState().constants.MENUBAR_ITEM_STATUSBAR
                );
            }
        );
    }

    public setNotification(visibility: FunctionalOrSingle<boolean>): void {
        this.dispatch((draft) => {
            draft.notification.hidden =
                typeof visibility === 'function'
                    ? !visibility(!draft.notification.hidden)
                    : !visibility;
        });
    }

    public setPanelMaximized(maximized: FunctionalOrSingle<boolean>) {
        this.dispatch((draft) => {
            draft.panel.panelMaximized =
                typeof maximized === 'function' ? maximized(draft.panel.panelMaximized) : maximized;
        });
    }

    public setPaneSize(splitPanePos: (number | string)[]): void {
        this.dispatch((draft) => {
            draft.splitPanePos = splitPanePos;
        });
    }

    public setHorizontalPaneSize(horizontalSplitPanePos: (number | string)[]): void {
        this.dispatch((draft) => {
            draft.horizontalSplitPanePos = horizontalSplitPanePos;
        });
    }

    public setGroupSplitSize(groupSplitPos: (string | number)[]): void {
        this.dispatch((draft) => {
            draft.groupSplitPos = groupSplitPos;
        });
    }

    public setAuxiliaryBar(visibility: FunctionalOrSingle<boolean>) {
        this.dispatch((draft) => {
            draft.auxiliaryBar.hidden =
                typeof visibility === 'function'
                    ? !visibility(!draft.auxiliaryBar.hidden)
                    : !visibility;
        });
    }

    public updateEditorDirection(direction: FunctionalOrSingle<DirectionLiteral>) {
        this.dispatch((draft) => {
            draft.editorDirection =
                typeof direction === 'function' ? direction(draft.editorDirection) : direction;
        });
    }

    public reset() {
        this.setState(new LayoutModel());
    }
}
