import * as React from 'react';
import { EventService } from 'mo/services/eventService';
import { cloneInstance } from 'mo/common/utils';
import Logger from 'mo/common/logger';

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
        Logger.info(nextState);
        this.setState(nextState);
    }
}
