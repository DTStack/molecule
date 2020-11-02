import { observable } from 'mo/common/observable';
import { container, inject, injectable } from 'tsyringe';

export interface IStatusBarItem {
}

export interface IStatusBar {
    data: IStatusBarItem[];
    onClick:(event: React.MouseEvent<any, any>) => void;
    render?: () => React.ReactNode | JSX.Element;
}

@observable()
@injectable()
export class StatusBarModel implements IStatusBar {
    public data: IStatusBarItem[] = [];

    constructor(@inject('StatusBarData') data: IStatusBarItem[] = []) {
        this.data = data;
    }

    public render!: () => React.ReactNode;

    public onClick = (event: React.MouseEvent) => {
        console.log('onClick:', event);
    }
}

container.register('StatusBarData', { useValue: [] });
