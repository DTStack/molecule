import 'reflect-metadata';
import {
    Float,
    IStatusBar,
    IStatusBarItem,
    StatusBarEvent,
    StatusBarModel,
} from 'mo/model/workbench/statusBar';
import cloneDeep from 'lodash/cloneDeep';
import { Component } from 'mo/react';
import { container, singleton } from 'tsyringe';
import { searchById } from 'mo/common/utils';
import logger from 'mo/common/logger';
import type { UniqueId } from 'mo/common/types';
export interface IStatusBarService extends Component<IStatusBar> {
    /**
     * Add a new StatusBar item into right or left status
     * @param item
     * @param float position the item to left or right
     */
    add(item: IStatusBarItem, float: Float): void;
    /**
     * Remove the specific StatusBar item
     * @param id
     * @param float if provided, it'll remove the item in spcific position
     */
    remove(id: UniqueId, float?: Float): void;
    /**
     * Update the specific StatusBar item, it'll update the item found in left
     * @param item the id field is required
     * @param float if provided, it'll update the item in specific position
     */
    update(item: IStatusBarItem, float?: Float): void;
    /**
     * Get the specific StatusBar item
     * @param id
     */
    getStatusBarItem(id: UniqueId, float?: Float): IStatusBarItem | null;
    /**
     * Reset the contextMenu data and the StatusBar data , including right and left
     */
    reset(): void;
    /**
     * Listen to the StatusBar click event
     * @param callback
     */
    onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void);
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

@singleton()
export class StatusBarService
    extends Component<IStatusBar>
    implements IStatusBarService {
    protected state: IStatusBar;

    constructor() {
        super();
        this.state = container.resolve(StatusBarModel);
    }

    /**
     * Get the item informations in right position or left position
     * @param item
     * @returns
     */
    private getItem(item: IStatusBarItem, float?: Float): StatusBarItemInfos {
        const { rightItems, leftItems } = this.state;

        if (!float) {
            // find left first
            let index = leftItems.findIndex(searchById(item.id));

            if (index > -1) {
                return {
                    index,
                    item: leftItems[index],
                    source: 'leftItems',
                };
            }

            // then find the item from right
            index = rightItems.findIndex(searchById(item.id));
            if (index > -1) {
                return {
                    index,
                    item: rightItems[index],
                    source: 'rightItems',
                };
            }

            // nothing found both in right and left
            return {
                index: -1,
                item: null,
                source: null,
            };
        }
        // specific the position
        const sourceArr = float === Float.left ? leftItems : rightItems;
        const index = sourceArr.findIndex(searchById(item.id));
        return {
            index,
            item: sourceArr[index] || null,
            source: float === Float.left ? 'leftItems' : 'rightItems',
        };
    }

    public add(item: IStatusBarItem<any>, float: Float) {
        const target = this.getItem(item, float);
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

    public update(item: IStatusBarItem, float?: Float): void {
        const workInProgressItem = this.getItem(item, float);

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

    public getStatusBarItem(id: UniqueId, float?: Float) {
        const itemInfo = this.getItem({ id }, float);
        return itemInfo.source ? cloneDeep(itemInfo.item) : itemInfo.item;
    }

    public remove(id: UniqueId, float?: Float) {
        const itemInfo = this.getItem({ id }, float);
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
        this.setState({
            rightItems: [],
            leftItems: [],
            contextMenu: [],
        });
    }

    public onClick(callback: (e: MouseEvent, item: IStatusBarItem) => void) {
        this.subscribe(StatusBarEvent.onClick, callback);
    }
}
