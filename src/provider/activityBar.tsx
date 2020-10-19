import * as React from 'react';
import { Molecule } from 'mo/provider/molecule';
import { ActivityBarEvent, IActivityBar } from 'mo/core/activityBar';
import { BaseProvider } from './base';

export const ActivityBarCtx = React.createContext<IActivityBar>(Molecule.activityBar);

export class ActivityBarProvider extends BaseProvider<any, IActivityBar> {
    state: IActivityBar;
    constructor(props) {
        super(props);
        this.events = [
            ActivityBarEvent.SELECTED,
            ActivityBarEvent.DATA_CHANGE,
        ];
        this.state = Molecule.activityBar;
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
