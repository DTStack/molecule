import * as React from 'react';
import { ActivityBarEvent, IActivityBar } from 'mo/core/workbench/activityBar';
import { BaseProvider } from './base';
import { activityBarService } from 'mo/main';
import { cloneInstance } from 'mo/common/utils';

const initialState = cloneInstance(activityBarService);
export const ActivityBarCtx = React.createContext<IActivityBar>(initialState);

export class ActivityBarProvider extends BaseProvider<any, IActivityBar> {
    state: IActivityBar;
    constructor(props) {
        super(props);
        this.register([
            ActivityBarEvent.DataChanged,
        ]);
        this.state = initialState;
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
