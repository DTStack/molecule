import { cloneDeep } from 'loadsh';

import {
    IMenuBar,
    IMenuBarItem,
    MenuBarModel,
} from 'mo/model/workbench/menuBar';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';

export interface IMenuBarService extends Component<IMenuBar> {
    showHide(): void;
    push(data: IMenuBarItem | IMenuBarItem[]): void;
    remove(index: number): void;
    getState(): IMenuBar;
    update(did: string, newNode: IMenuBarItem): void;
}

@singleton()
export class MenuBarService
    extends Component<IMenuBar>
    implements IMenuBarService {
    protected state: IMenuBar;

    constructor() {
        super();
        this.state = container.resolve(MenuBarModel);
    }

    public showHide(): void {
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    public push(item: IMenuBarItem | IMenuBarItem[]) {
        let original = this.state.data || [];
        if (Array.isArray(item)) {
            original = original.concat(item);
        } else {
            original.push(item);
        }
    }

    public remove(index: number) {
        this.state.data!.splice(index, 1);
    }

    public update(menuId, extra = {}) {
        const { data } = this.state;
        const currentNode = this.getCurrentNode(menuId, data);
        const deepData = cloneDeep(data);
        for (let node of deepData) {
            this.replaceNode(node, currentNode, extra);
        }
        this.setState({ data: deepData });
    }

    public getCurrentNode(menuId, data) {
        const queue = [...data];
        while (queue.length) {
            const menu = queue.shift();
            if (menu.id === menuId) return menu;
            queue.push(...(menu.data || []));
        }
    }

    public replaceNode(node, currentNode: IMenuBarItem, extra: IMenuBarItem) {
        if (node?.id === currentNode?.id) {
            for (let key in extra) {
                if (extra.hasOwnProperty(key)) {
                    delete node[key];
                    node[key] = extra[key];
                }
            }
        } else {
            if (node?.data?.length) {
                for (let item of node?.data) {
                    this.replaceNode(item, currentNode, extra);
                }
            }
        }
    }
}
