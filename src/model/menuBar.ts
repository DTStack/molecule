import { observable } from 'mo/common/observable';
import { container, injectable, inject } from 'tsyringe';

export interface IMenuBarItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
    onClick?:(e: React.MouseEvent, option: IMenuBarItem) => any;
}

export interface IMenuBar {
    data: IMenuBarItem[];
    onClick:(event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
    render?: () => React.ReactNode | JSX.Element;
}

@observable()
@injectable()
export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];

    constructor(@inject('MenuBarData') data: IMenuBarItem[] = []) {
        this.data = data;
    }

    public render!: () => React.ReactNode;

    public readonly onClick = (event: React.MouseEvent, item: IMenuBarItem) => {
        console.log('onClick:', event);
    }
}

container.register('MenuBarData', { useValue: [] });
