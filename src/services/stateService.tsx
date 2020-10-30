import * as React from 'react';
import { EventService } from 'mo/services/eventService';
import Logger from 'mo/common/logger';

/**
 * Mapping the state to the component
 * @param WrappedComponent The component will be wrapped
 * @param state The state you want to injected
 * @param subscribes The events of your subscribe, it used to trigger the state re render
 */
export function mapState<S>(WrappedComponent: React.ComponentType<any>, state: S, events: string | string []) {
    return class StateProvider extends React.Component {
        state: any;
        constructor(props) {
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                lastUpdated: Date.now(),
            };
        }

        componentDidMount() {
            EventService.subscribe(events, this.onChange);
        }

        onChange() {
            Logger.info(state);
            this.setState({
                lastUpdated: Date.now(),
            });
        }

        render() {
            return (
                <WrappedComponent {...this.state} { ...state } {...this.props} />
            );
        }
    };
}
