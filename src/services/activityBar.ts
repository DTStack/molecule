import { BaseService } from 'mo/glue';
import { ActivityBarEvent, ActivityBarModel, type IActivityBarItem } from 'mo/models/activityBar';
import type { ArraylizeOrSingle, RequiredId, UniqueId } from 'mo/types';
import { arraylize, extract, searchById, sortByIndex } from 'mo/utils';
import logger from 'mo/utils/logger';

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
    get(id: UniqueId): IActivityBarItem | undefined;
    update(data: RequiredId<IActivityBarItem>): void;
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
     * Add click event listener
     * @param callback
     */
    onClick(callback: (item: IActivityBarItem) => void): void;
}

export class ActivityBarService
    extends BaseService<ActivityBarModel>
    implements IActivityBarService
{
    protected state: ActivityBarModel;
    // private sidebarService: ISidebarService;

    constructor() {
        super('activityBar');
        this.state = new ActivityBarModel();
    }

    public setActive(id?: UniqueId) {
        this.setState({
            selected: id,
        });
    }

    public get(id: UniqueId) {
        return this.getState().data.find(searchById(id));
    }

    public add(data: ArraylizeOrSingle<IActivityBarItem>, isActive = false) {
        if (!Array.isArray(data) && isActive) {
            this.setActive(data.id);
        }

        const arrayData = arraylize(data);

        this.setState((prev) => ({
            ...prev,
            data: [...prev.data, ...arrayData].sort(sortByIndex),
        }));
    }

    public update(data: RequiredId<IActivityBarItem>) {
        const target = this.get(data.id);
        if (!target) return;
        Object.assign(target, data);
        this.setState((prev) => ({ ...prev }));
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

    public reset() {
        this.setState(new ActivityBarModel());
    }

    // ===================== Subscriptions =====================
    public onClick(callback: (item: IActivityBarItem) => void) {
        this.subscribe(ActivityBarEvent.OnClick, callback);
    }
}
