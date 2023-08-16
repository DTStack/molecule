import { BaseService } from 'mo/glue';
import {
    Float,
    type FloatStr,
    type IStatusBar,
    type IStatusBarItem,
    StatusBarEvent,
    StatusBarModel,
} from 'mo/models/statusBar';
import type { UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface IStatusBarService extends BaseService<IStatusBar> {
    /**
     * Add a new StatusBar item into right or left status
     * @param item
     * @param float position the item to left or right
     */
    add(item: IStatusBarItem, float: FloatStr): void;
    /**
     * Remove the specific StatusBar item
     * @param id
     * @param float position the item to left or right
     */
    remove(id: UniqueId, float: FloatStr): void;
    /**
     * Update the specific StatusBar item, it'll update the item found in left
     * @param item the id field is required
     * @param float position the item to left or right
     */
    update(item: IStatusBarItem, float: FloatStr): void;
    /**
     * Get the specific StatusBar item
     * @param id
     */
    getStatusBarItem(id: UniqueId, float: FloatStr): IStatusBarItem | null;
    /**
     * Reset the contextMenu data and the StatusBar data , including right and left
     */
    reset(): void;
    /**
     * Listen to the StatusBar click event
     * @param callback
     */
    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void): void;
}

type StatusBarItemInfos =
    | {
          index: number;
          item: IStatusBarItem;
          source: 'leftItems' | 'rightItems';
      }
    | {
          index: -1;
          item: null;
          source: null;
      };

export class StatusBarService extends BaseService<IStatusBar> implements IStatusBarService {
    protected state: IStatusBar;

    constructor() {
        super();
        this.state = new StatusBarModel();
    }

    /**
     * Get the item informations in right position or left position
     */
    private getItem(id: IStatusBarItem['id'], float: FloatStr): StatusBarItemInfos {
        const { rightItems, leftItems } = this.state;
        // specific the position
        const sourceArr = float === Float.left ? leftItems : rightItems;
        const index = sourceArr.findIndex(searchById(id));
        return {
            index,
            item: sourceArr[index] || null,
            source: float === Float.left ? 'leftItems' : 'rightItems',
        };
    }

    public add(item: IStatusBarItem<any>, float: FloatStr) {
        const target = this.getItem(item.id, float);
        if (target.item) {
            logger.error(
                `There is already a status whose id is ${item.id}, if you want to update it, please use the update method`
            );
            return;
        }
        const sourceArr = float === Float.left ? 'leftItems' : 'rightItems';
        const nextArr = this.state[sourceArr].concat();
        nextArr.push(item);
        this.setState({
            [sourceArr]: nextArr,
        });
    }

    public update(item: IStatusBarItem, float: FloatStr): void {
        const workInProgressItem = this.getItem(item.id, float);

        if (!workInProgressItem.source) {
            logger.error(`There is no status found whose id is ${item.id}`);
            return;
        }

        const { index, item: target, source } = workInProgressItem;
        const next = this.state[source].concat();
        next[index] = Object.assign({}, target, item);
        this.setState({
            [source]: next,
        });
    }

    public getStatusBarItem(id: UniqueId, float: FloatStr) {
        const itemInfo = this.getItem(id, float);
        return itemInfo.item;
    }

    public remove(id: UniqueId, float: Float) {
        const itemInfo = this.getItem(id, float);
        if (!itemInfo.source) {
            logger.error(`There is no status item found whose id is ${id}`);
            return;
        }

        const { index, source } = itemInfo;

        const next = this.state[source].concat();
        next.splice(index, 1);
        this.setState({
            [source]: next,
        });
    }

    public reset() {
        this.setState(new StatusBarModel());
    }

    public onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void) {
        this.subscribe(StatusBarEvent.onClick, callback);
    }
}
