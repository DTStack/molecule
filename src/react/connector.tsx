import * as React from 'react';
import Logger from 'mo/common/logger';
import { IComponent } from './component';
import { Controller } from './controller';

export function connect<S, P, C>(
    Service: IComponent,
    View: React.ComponentType<P>,
    Controller: Controller
) {
    return class Connector extends React.Component {
        state: { lastUpdated: number };
        constructor(props) {
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                lastUpdated: Date.now(),
            };
        }

        componentDidMount() {
            Service.onUpdateState(this.onChange);
        }

        onChange(nextState: S) {
            Logger.info(nextState, Service.getState());
            this.setState({
                lastUpdated: Date.now(),
            });
        }

        render() {
            const state = Service.getState();
            return (
                <View
                    {...this.state}
                    {...state}
                    {...this.props}
                    {...Controller}
                />
            );
        }
    };
}
