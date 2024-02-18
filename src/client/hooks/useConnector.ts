import { useContext, useMemo } from 'react';
import type { IMoleculeContext } from 'mo/types';
import { useSyncExternalStore } from 'use-sync-external-store/shim';

import { Context } from '../context';

type Selector = keyof IMoleculeContext;
type StateType<T extends keyof IMoleculeContext> = ReturnType<IMoleculeContext[T]['getState']>;

export default function useConnector<T extends Selector>(selector: T): StateType<T> {
    const { molecule } = useContext(Context);
    const target = useMemo(() => molecule[selector], [molecule]);
    const subscribe = useMemo(() => {
        return (notify: () => void) => {
            target.onUpdateState(notify);
            return () => target.removeOnUpdateState(notify);
        };
    }, []);
    return useSyncExternalStore(subscribe, () => target.getState()) as StateType<T>;
}
