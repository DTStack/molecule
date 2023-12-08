import { BaseService } from 'mo/glue';
import { type ILayout, LayoutModel, type PositionLiteral } from 'mo/models/layout';
import type { DirectionLiteral, FunctionalOrSingle } from 'mo/types';
import { inject, injectable } from 'tsyringe';

import type { BuiltinService } from './builtin';
import type { ColorThemeService } from './colorTheme';
import type { EditorService } from './editor';
import type { LocaleService } from './locale';
import type { MenuBarService } from './menuBar';
import type { SettingsService } from './setting';

export interface ILayoutService extends BaseService<ILayout> {
    /**
     * Toggle the visibility of menu bar, returns the status of menu bar's `hidden`
     */
    setMenuBarVisibility(visibility: FunctionalOrSingle<boolean>): void;
    /**
     * Toggle the visibility of side bar, returns the status of side bar's `hidden`
     */
    setSidebarVisibility(visibility: FunctionalOrSingle<boolean>): void;
    /**
     * Toggle the visibility of the panel, returns the status of panel's `hidden`
     */
    setPanelVisibility(visibility: FunctionalOrSingle<boolean>): void;
    /**
     * Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`
     */
    setActivityBarVisibility(visibility: FunctionalOrSingle<boolean>): void;
    /**
     * Toggle the visibility of the status bar, returns the status of status bar's `hidden`
     */
    setStatusBarVisibility(visibility: FunctionalOrSingle<boolean>): void;
    /**
     * Toggle the maximized status of the panel, returns the status of maximized panel
     */
    setPanelMaximized(maximized: FunctionalOrSingle<boolean>): void;
    /**
     * Set the sizes between the side bar and main content area
     * @param splitPanePos
     */
    setPaneSize(splitPanePos: (number | string)[]): void;
    /**
     * Set the sizes between the editor and the panel
     * @param horizontalSplitPanePos
     */
    setHorizontalPaneSize(horizontalSplitPanePos: (number | string)[]): void;
    /**
     * Set the position of the side bar, default is in `left`
     * @param position
     * @unachieved
     */
    setSideBarPosition(position: PositionLiteral): void;
    /**
     * Set the sizes between editor groups
     * @param groupSplitPos
     */
    setGroupSplitSize(groupSplitPos: (number | string)[]): void;
    /**
     * Set the direction of editor group,default is `vertical`
     */
    setEditorGroupDirection(direction: FunctionalOrSingle<DirectionLiteral>): void;
    /**
     * Set the visibility of auxiliary bar
     *
     * Returns the next state of hidden
     */
    setAuxiliaryBar(hidden: FunctionalOrSingle<boolean>): void;
    /**
     * Access setting tab on editor
     */
    accessSettings(): void;
    /**
     * Reset all layout data as default value
     */
    reset(): void;
}

@injectable()
export class LayoutService extends BaseService<ILayout> implements ILayoutService {
    protected state: ILayout;
    constructor(
        @inject('menuBar') private menuBar: MenuBarService,
        @inject('builtin') private builtin: BuiltinService,
        @inject('editor') private editor: EditorService,
        @inject('settings') private settings: SettingsService,
        @inject('locale') private locale: LocaleService,
        @inject('colorTheme') private colorTheme: ColorThemeService
    ) {
        super('layout');
        this.state = new LayoutModel();
    }

    public setMenuBarVisibility(visibility: FunctionalOrSingle<boolean>) {
        this.setState((prev) => ({
            ...prev,
            menuBar: {
                ...prev.menuBar,
                hidden:
                    typeof visibility === 'function' ? visibility(prev.menuBar.hidden) : visibility,
            },
        }));

        // ===================== effects =====================
        this.menuBar.toggleChecked(this.builtin.getState().constants.MENU_VIEW_MENUBAR);
    }

    public setPanelVisibility(visibility: FunctionalOrSingle<boolean>): void {
        this.setState((prev) => ({
            ...prev,
            panel: {
                ...prev.panel,
                hidden:
                    typeof visibility === 'function' ? visibility(prev.panel.hidden) : visibility,
            },
        }));

        // ===================== effects =====================
        this.menuBar.toggleChecked(this.builtin.getState().constants.MENU_VIEW_PANEL);
    }

    public setSidebarVisibility(visibility: FunctionalOrSingle<boolean>): void {
        this.setState((prev) => ({
            ...prev,
            sidebar: {
                ...prev.sidebar,
                hidden:
                    typeof visibility === 'function' ? visibility(prev.sidebar.hidden) : visibility,
            },
        }));

        // ===================== effects =====================
        this.menuBar.toggleChecked(this.builtin.getState().constants.MENU_VIEW_SIBEBAR);
    }

    public setActivityBarVisibility(visibility: FunctionalOrSingle<boolean>): void {
        this.setState((prev) => ({
            ...prev,
            activityBar: {
                ...prev.activityBar,
                hidden:
                    typeof visibility === 'function'
                        ? visibility(prev.activityBar.hidden)
                        : visibility,
            },
        }));

        // ===================== effects =====================
        this.menuBar.toggleChecked(this.builtin.getState().constants.MENU_VIEW_ACTIVITYBAR);
    }

    public setStatusBarVisibility(visibility: FunctionalOrSingle<boolean>): void {
        this.setState((prev) => ({
            ...prev,
            statusBar: {
                ...prev.statusBar,
                hidden:
                    typeof visibility === 'function'
                        ? visibility(prev.statusBar.hidden)
                        : visibility,
            },
        }));

        // ===================== effects =====================
        this.menuBar.toggleChecked(this.builtin.getState().constants.MENU_VIEW_STATUSBAR);
    }

    public setSideBarPosition(position: PositionLiteral): void {
        this.setState({
            sidebar: { position, hidden: false },
        });
    }

    public setPanelMaximized(maximized: FunctionalOrSingle<boolean>) {
        this.setState((prev) => ({
            ...prev,
            panel: {
                ...prev.panel,
                panelMaximized:
                    typeof maximized === 'function'
                        ? maximized(prev.panel.panelMaximized)
                        : maximized,
            },
        }));
    }

    public setPaneSize(splitPanePos: (number | string)[]): void {
        this.setState({ splitPanePos });
    }
    public setHorizontalPaneSize(horizontalSplitPanePos: (number | string)[]): void {
        this.setState({ horizontalSplitPanePos });
    }

    public setGroupSplitSize(groupSplitPos: (string | number)[]): void {
        this.setState({
            groupSplitPos,
        });
    }

    public setEditorGroupDirection(direction: FunctionalOrSingle<DirectionLiteral>) {
        this.setState((prev) => ({
            ...prev,
            editorGroupDirection:
                typeof direction === 'function' ? direction(prev.editorGroupDirection) : direction,
        }));
    }

    public setAuxiliaryBar(hidden: FunctionalOrSingle<boolean>) {
        this.setState((prev) => ({
            ...prev,
            auxiliaryBar: {
                ...prev.auxiliaryBar,
                hidden: typeof hidden === 'function' ? hidden(prev.auxiliaryBar.hidden) : hidden,
            },
        }));
    }

    public accessSettings() {
        const { SETTING_ID } = this.builtin.getState().constants;
        const settings: Record<string, any> = {
            locale: this.locale.getState().current,
            colorTheme: this.colorTheme.getState().current,
            ...this.settings.getAll(),
        };
        const { current } = this.editor.getState();
        if (!current || !this.editor.getTabById(SETTING_ID, current)) {
            this.editor.open(
                {
                    id: SETTING_ID,
                    name: 'Settings',
                    icon: 'file',
                    value: JSON.stringify(settings, null, 4),
                    language: 'json',
                },
                current
            );
        } else {
            this.editor.setActive(SETTING_ID, current);
        }
    }

    public reset() {
        this.setState(new LayoutModel());
    }
}
