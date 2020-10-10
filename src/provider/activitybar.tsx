import * as React from 'react';
import { IActivityBarItem } from '@/core/activityBar';

export interface IActivityBarState {
    data: IActivityBarItem[];
    selected: string;
}


interface IActivityBarProps {
}

const initialState = {
    data: [],
    selected: '',
};

export const ActivityBarCtx = React.createContext<IActivityBarState>(initialState);

export class ActivityBarProvider extends React.Component<IActivityBarProps, IActivityBarState> {
    public state: IActivityBarState;

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    public onSelect(key: string, item?: IActivityBarItem): void {
        this.setState({
            selected: key,
        });
    }

    public push(data: IActivityBarItem | IActivityBarItem[]): void {
        const original = this.state.data;
        this.setState({
            data: [...original.concat(data)],
        });
    }

    public remove(index: number): IActivityBarItem[] {
        const { data } = this.state;
        const removed = data.splice(index, 1);
        this.setState({
            data: [...data],
        });
        return removed;
    }

    public update(): void {
        throw new Error('Method not implemented.');
    }
    public get(id: string): void {
        throw new Error('Method not implemented.');
    }

    public render() {
        return (
            <ActivityBarCtx.Provider
                value={this.state}>
                { this.props.children }
            </ActivityBarCtx.Provider>
        );
    }
}
