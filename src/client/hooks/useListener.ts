import { useEffect, useRef } from 'react';
import usePrevious from 'react-use/esm/usePrevious';
import useUpdateEffect from 'react-use/esm/useUpdateEffect';

interface IListenerTriggers<T> {
    useMount: (data: T[]) => void;
    useCreate: (data: T[]) => void;
    useRemove: (data: T[]) => void;
}

export default function useListener<T>(data: T[]) {
    const prev = usePrevious(data);
    const fns = useRef<IListenerTriggers<T>>({ useMount: () => {}, useCreate: () => {}, useRemove: () => {} });

    useEffect(() => {
        fns.current.useMount(data);
    }, []);

    useUpdateEffect(() => {
        const creates: T[] = [];
        const removes: T[] = [];
        Array.from(new Set([...(prev || []), ...data])).forEach((item) => {
            if (data.includes(item) && !prev?.includes(item)) {
                creates.push(item);
            } else if (!data.includes(item) && prev?.includes(item)) {
                removes.push(item);
            }
        });

        if (creates.length) {
            fns.current.useCreate(creates);
        }

        if (removes.length) {
            fns.current.useRemove(removes);
        }
    }, [data]);

    return {
        useMount: (fn: (data: T[]) => void) => (fns.current.useMount = fn),
        useCreate: (fn: (data: T[]) => void) => (fns.current.useCreate = fn),
        useRemove: (fn: (data: T[]) => void) => (fns.current.useRemove = fn),
    };
}
