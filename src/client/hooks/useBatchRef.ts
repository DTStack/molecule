import { useRef } from 'react';

export default function useBatchRef<E extends HTMLElement>() {
    const refs = useRef<Record<string, E | null>>({});

    function ref(key: string | number) {
        return function (ref: E | null) {
            refs.current[key] = ref;
        };
    }

    ref.current = refs.current;

    return ref;
}
