import { BaseService } from 'mo/glue';
import { layout } from 'mo/models';
import { Functional } from 'mo/types';

export interface ILayoutService extends BaseService<layout.ILayout> {
    /**
     * Toggle the visibility of menu bar, returns the status of menu bar's `hidden`
     */
    setMenuBarVisibility(visibility: boolean | Functional<boolean>): void;
    /**
     * Toggle the visibility of side bar, returns the status of side bar's `hidden`
     */
    setSidebarVisibility(visibility: boolean | Functional<boolean>): void;
    /**
     * Toggle the visibility of the panel, returns the status of panel's `hidden`
     */
    setPanelVisibility(visibility: boolean | Functional<boolean>): void;
    /**
     * Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`
     */
    setActivityBarVisibility(visibility: boolean | Functional<boolean>): void;
    /**
     * Toggle the visibility of the status bar, returns the status of status bar's `hidden`
     */
    setStatusBarVisibility(visibility: boolean | Functional<boolean>): void;
    /**
     * Toggle the maximized status of the panel, returns the status of maximized panel
     */
    setPanelMaximized(maximized: boolean | Functional<boolean>): void;
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
    setSideBarPosition(position: layout.PositionStr): void;
    /**
     * Set the sizes between editor groups
     * @param groupSplitPos
     */
    setGroupSplitSize(groupSplitPos: (number | string)[]): void;
    /**
     * Set the mode of the MenuBar, default is `vertical`
     * @param mode
     * @unachieved
     */
    setMenuBarMode(mode: layout.MenuBarModeStr): void;
    /**
     * Get the mode of the MenuBar
     */
    getMenuBarMode(): layout.MenuBarModeStr;
    /**
     * Set the direction of editor group,default is `vertical`
     */
    setEditorGroupDirection(direction: layout.MenuBarMode | Functional<layout.MenuBarMode>): void;
    /**
     * Set the visibility of auxiliary bar
     *
     * Returns the next state of hidden
     */
    setAuxiliaryBar(hidden: boolean | Functional<boolean>): void;
    /**
     * Reset all layout data as default value
     */
    reset(): void;
}

export class LayoutService extends BaseService<layout.ILayout> implements ILayoutService {
    protected state: layout.ILayout;
    constructor() {
        super();
        this.state = new layout.LayoutModel();
    }

    public setMenuBarVisibility(visibility: boolean | Functional<boolean>) {
        this.setState((prev) => ({
            ...prev,
            menuBar: {
                ...prev.menuBar,
                hidden:
                    typeof visibility === 'function' ? visibility(prev.menuBar.hidden) : visibility,
            },
        }));
    }

    public setPanelVisibility(visibility: boolean | Functional<boolean>): void {
        this.setState((prev) => ({
            ...prev,
            panel: {
                ...prev.panel,
                hidden:
                    typeof visibility === 'function' ? visibility(prev.panel.hidden) : visibility,
            },
        }));
    }

    public setSidebarVisibility(visibility: boolean | Functional<boolean>): void {
        this.setState((prev) => ({
            ...prev,
            sidebar: {
                ...prev.sidebar,
                hidden:
                    typeof visibility === 'function' ? visibility(prev.sidebar.hidden) : visibility,
            },
        }));
    }

    public setActivityBarVisibility(visibility: boolean | Functional<boolean>): void {
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
    }

    public setStatusBarVisibility(visibility: boolean | Functional<boolean>): void {
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
    }

    public setSideBarPosition(position: layout.PositionStr): void {
        this.setState({
            sidebar: { position, hidden: false },
        });
    }

    public setPanelMaximized(maximized: boolean | Functional<boolean>) {
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

    public setMenuBarMode(mode: layout.MenuBarModeStr): void {
        const { menuBar } = this.state;
        this.setState({ menuBar: { ...menuBar, mode, hidden: false } });
        // [TODO)
        // this.emit(MenuBarEvent.onChangeMode, mode);
    }

    public getMenuBarMode(): layout.MenuBarModeStr {
        const { menuBar } = this.state;
        return menuBar.mode;
    }

    public setEditorGroupDirection(direction: layout.MenuBarMode | Functional<layout.MenuBarMode>) {
        this.setState((prev) => ({
            ...prev,
            editorGroupDirection:
                typeof direction === 'function' ? direction(prev.editorGroupDirection) : direction,
        }));
    }

    public setAuxiliaryBar(hidden: boolean | Functional<boolean>) {
        this.setState((prev) => ({
            ...prev,
            auxiliaryBar: {
                ...prev.auxiliaryBar,
                hidden: typeof hidden === 'function' ? hidden(prev.auxiliaryBar.hidden) : hidden,
            },
        }));
    }

    public reset() {
        this.setState(new layout.LayoutModel());
    }
}
