import type { IContext } from 'mo/types';

import useSlots from './hooks/useSlots';
import { Context } from './context';

function Outlet() {
    const Workbench = useSlots('layout', import('./slots/workbench'));
    return <>{Workbench}</>;
}

export default function Container({ value }: { value: IContext }) {
    return (
        <Context.Provider value={value}>
            <Outlet />
        </Context.Provider>
    );
}
