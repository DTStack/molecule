import * as React from 'react';
import EventEmitter from 'mo/common/eventEmitter';

export class BaseProvider<IProps = {}, IState = {}> extends React.Component<IProps, IState> {
    public state!: IState;
    public events: string | string[] = [];

    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        EventEmitter.on(this.events, this.updateState);
    }

    updateState(nextState) {
        if (this && this.setState) {
            this.setState({ ...this.state });
        }
    }
}
