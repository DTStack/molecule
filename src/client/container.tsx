import type { IContext } from 'mo/types';

import useDynamic from './hooks/useDynamic';
import { Context } from './context';

function Outlet() {
    const Workbench = useDynamic('layout');
    return <>{Workbench}</>;
}

export default function Container({ value }: { value: IContext }) {
    return (
        <Context.Provider value={value}>
            <Outlet />
        </Context.Provider>
    );
}
