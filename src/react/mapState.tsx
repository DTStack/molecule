import * as React from 'react';
import Logger from 'mo/common/logger';

/**
 * Mapping the state to the component
 * @param WrappedComponent The component will be wrapped
 * @param state The state you want to injected, notice the state must be an observable object
 * @param subscribes The events of your subscribe, it used to trigger the state re render
 */
export function mapState<S>(
    WrappedComponent: React.ComponentType<S>,
    state: S
) {
    return class StateProvider extends React.Component {
        state: { lastUpdated: number };
        constructor(props) {
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                lastUpdated: Date.now(),
            };
        }

        _count = 0;

        componentDidMount() {
            // There is no declare state parameter as IObservable type, so must convert to any type.
            if ((state as any).observe) {
                console.log('mapState:', this._count++);
                (state as any).observe(this.onChange);
            } else {
                Logger.error(
                    'The state parameter of mapState must be an observable object.'
                );
            }
        }
        /**
         * TODO: Performance optimize, now whatever any properties changed in target,
         * there always be trigger the onChange event, so need a compare operation.
         * @param nextState changed data
         */
        onChange(nextState: S) {
            Logger.info(nextState, state);
            this.setState({
                lastUpdated: Date.now(),
            });
        }

        render() {
            return (
                <WrappedComponent {...this.state} {...state} {...this.props} />
            );
        }
    };
}
