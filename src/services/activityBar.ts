import { BaseService } from 'mo/glue';
import {
    ActivityBarEvent,
    ActivityBarModel,
    IActivityBarContextMenu,
    type IActivityBarItem,
} from 'mo/models/activityBar';
import type { ArraylizeOrSingle, IMenuItemProps, UniqueId } from 'mo/types';
import { arraylize, extract, toggleNextIcon } from 'mo/utils';
import logger from 'mo/utils/logger';
import { TreeHelper } from 'mo/utils/tree';

export interface IActivityBarService extends BaseService<ActivityBarModel> {
    /**
     * Reset the activityBar state data,
     * if you want to whole customize the activityBar, you can reset it first,
     * and then using the activityBar.add() method to fill the data you need.
     */
    reset(): void;
    /**
     * Add IActivityBarItem data
     * @param isActive If provide, Activity Bar will set data active automatically. Only works in one data
     */
    add(data: ArraylizeOrSingle<IActivityBarItem>, isActive?: boolean): void;
    /**
     * Set active bar
     */
    setActive(id?: UniqueId): void;
    /**
     * Remove the specific activity bar by id
     * @param id
     */
    remove(id: ArraylizeOrSingle<UniqueId>): void;
    /**
     * Toggle the specific activity bar between show or hide
     * @param id activity bar id
     */
    toggleBar(id: UniqueId, hidden?: boolean): void;
    /**
     * Toggle the contextMenu between checked or unchecked
     * @param id contextmenu id
     */
    toggleContextMenuChecked(id: UniqueId, checked?: boolean): void;
    /**
     * Get specific context menu
     */
    getContextMenu(id: UniqueId): IActivityBarContextMenu | IMenuItemProps | undefined;
    /**
     * Add new contextMenus for the activityBar
     */
    addContextMenu(data: ArraylizeOrSingle<IMenuItemProps>, parent: UniqueId): void;
    addContextMenu(data: ArraylizeOrSingle<IActivityBarContextMenu>): void;
    /**
     * Remove the specific contextMenu item by id
     * @param id contextmenu id
     */
    removeContextMenu(id: ArraylizeOrSingle<UniqueId>): void;
    /**
     * Add click event listener
     * @param callback
     */
    onClick(
        callback: (selectedKey: UniqueId, item: IActivityBarContextMenu | IMenuItemProps) => void
    ): void;
}

export class ActivityBarService
    extends BaseService<ActivityBarModel>
    implements IActivityBarService
{
    protected state: ActivityBarModel;
    // private sidebarService: ISidebarService;

    constructor() {
        super();
        this.state = new ActivityBarModel();
    }

    public setActive(id?: UniqueId) {
        this.setState({
            selected: id,
        });
    }

    public reset() {
        this.setState(new ActivityBarModel());
    }

    public add(data: ArraylizeOrSingle<IActivityBarItem>, isActive = false) {
        if (!Array.isArray(data) && isActive) {
            this.setActive(data.id);
        }

        const arrayData = arraylize(data);

        // The smaller the sort number is, the more front the order is
        arrayData.sort((pre, next) => {
            const preIndex = pre.sortIndex || Number.MAX_SAFE_INTEGER;
            const nextIndex = next.sortIndex || Number.MAX_SAFE_INTEGER;
            return preIndex - nextIndex;
        });

        this.setState((prev) => ({
            ...prev,
            data: [...prev.data, ...arrayData],
        }));
    }

    public remove(id: ArraylizeOrSingle<UniqueId>) {
        const arrayId = arraylize(id);
        this.setState((prev) => ({
            ...prev,
            data: extract(prev.data, arrayId),
        }));
    }

    public toggleBar(id: UniqueId, hidden?: boolean) {
        const { selected } = this.state;
        if (selected === id) {
            // TODO, Should have sidebar hidden
        }
        this.setState((prev) => {
            const next = [...prev.data];
            const target = next.find((i) => i.id === id);
            if (target) {
                target.hidden = typeof hidden === 'boolean' ? hidden : !target.hidden;
            } else {
                logger.error('Toggle activity bar failed, please check your id');
            }
            return {
                ...prev,
                data: next,
            };
        });
    }

    public toggleContextMenuChecked(id: UniqueId, checked?: boolean) {
        const { contextMenu = [] } = this.state;
        const treeHelper = new TreeHelper(contextMenu);
        const target = treeHelper.getNode(id);
        const newActions = contextMenu.concat();

        if (target) {
            const nextIcon = toggleNextIcon(target.icon, checked);
            target.icon = nextIcon;
            this.setState({
                contextMenu: newActions,
            });
        } else {
            logger.error(`Toggle the contextmenu failed, can not found any menu by id ${id}`);
        }
    }

    public getContextMenu(id: UniqueId) {
        const { contextMenu } = this.getState();
        const treeHelper = new TreeHelper(contextMenu);
        return treeHelper.getNode(id);
    }

    public addContextMenu(data: ArraylizeOrSingle<IMenuItemProps>, parent: UniqueId): void;
    public addContextMenu(data: ArraylizeOrSingle<IActivityBarContextMenu>): void;
    public addContextMenu(
        data: ArraylizeOrSingle<IActivityBarContextMenu> | ArraylizeOrSingle<IMenuItemProps>,
        parent?: UniqueId
    ) {
        if (!parent) {
            this.setState((prev) => ({
                ...prev,
                contextMenu: [
                    ...prev.contextMenu,
                    ...arraylize(data as ArraylizeOrSingle<IActivityBarContextMenu>),
                ],
            }));
        } else {
            const { contextMenu } = this.state;
            const treeHelper = new TreeHelper(contextMenu);
            const parentNode = treeHelper.getNode(parent);
            if (!parentNode) {
                logger.error('NOT Found parent since adding contextMenu');
                return;
            }
            parentNode.children = parentNode.children ?? [];
            parentNode.children.push(...arraylize(data as ArraylizeOrSingle<IMenuItemProps>));
            this.setState({
                contextMenu: [...contextMenu],
            });
        }
    }

    public removeContextMenu(id: ArraylizeOrSingle<UniqueId>) {
        const arrayId = arraylize(id);
        this.setState((prev) => ({
            ...prev,
            contextMenu: extract(prev.contextMenu, arrayId),
        }));
    }

    // ===================== Subscriptions =====================
    public onClick(
        callback: (selectedKey: UniqueId, item: IActivityBarContextMenu | IMenuItemProps) => void
    ) {
        this.subscribe(ActivityBarEvent.OnClick, callback);
    }
}
