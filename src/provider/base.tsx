import * as React from 'react';
import { EventService } from 'mo/services/eventService';
import { cloneInstance } from 'mo/common/utils';

export interface IBaseProviderState {
    lastUpdated: number;
}

export class BaseProvider<IProps = {}, IState = {}>
    extends React.Component<IProps, IState | IBaseProviderState> {
    public state;
    public events: string | string[] = [];
    _count = 0;
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        EventService.subscribe(this.events, this.updateState);
    }

    register(events: string | string []) {
        this.events = events;
    }

    updateState(eventData) {
        const nextState = cloneInstance(this.state);
        // The blow codes just for development
        // if (__DEVELOPMENT__) {
        // }
        console.group(`Update State:`, nextState, this._count++);
        console.groupEnd();
        this.setState(nextState);
    }
}
