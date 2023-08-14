import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { get } from 'lodash-es';
import { IContext } from 'mo/types';

import { Context } from '../context';

type Selector = keyof IContext;
type StateType<T extends keyof IContext> = ReturnType<IContext[T]['getState']>;

export default function useConnector<T extends Selector>(selector: T): StateType<T> {
    const { molecule } = useContext(Context);
    const target = useMemo(() => molecule[selector], [molecule, selector]);

    // ONLY way to emit re-render is by forceUpdate
    const [_, dispatch] = useState(false);
    const forceUpdate = () => dispatch((p) => !p);

    const depsMap = useRef(new Set<string | symbol>());

    const data = useMemo(
        () =>
            new Proxy(target.getState(), {
                get(_, property) {
                    // TODO 目前先只对最外层做 Proxy
                    // track all used properties
                    const state = target.getState();
                    if (property in state) {
                        depsMap.current.add(property);
                    }
                    return Reflect.get(state, property);
                },
            }),
        []
    );

    const listener = useCallback<<T extends object>(prev: T, next: T) => void>((prev, next) => {
        const arr = Array.from(depsMap.current);
        for (let index = 0; index < arr.length; index++) {
            const path = arr[index];
            if (!Object.is(get(prev, path), get(next, path))) {
                forceUpdate();
                break;
            }
        }
    }, []);

    useEffect(() => {
        target.onUpdateState(listener);
        return () => {
            target.removeOnUpdateState(listener);
        };
    }, []);

    return data as StateType<T>;
}
