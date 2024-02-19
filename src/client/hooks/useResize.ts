import { useCallback, useEffect, useRef, useState } from 'react';

type ListenerFunction = (e: MouseEvent, index: number) => void;

export default function useResize<E extends HTMLElement>() {
    const elementsRef = useRef<(E | null)[]>([]);
    const resizingIndex = useRef(-1);
    const [status, setStatus] = useState(false);
    const listeners = useRef({
        onResizeStart: (() => {}) as ListenerFunction,
        onResize: (() => {}) as ListenerFunction,
        onResizeEnd: (() => {}) as ListenerFunction,
    });

    const mouseMove = useCallback((e: MouseEvent) => {
        listeners.current.onResize?.(e, resizingIndex.current);
    }, []);

    const mouseUp = useCallback((e: MouseEvent) => {
        setStatus(false);
        listeners.current.onResizeEnd?.(e, resizingIndex.current);
        window.removeEventListener('mousemove', mouseMove);
    }, []);

    const mouseDown = useCallback((e: MouseEvent) => {
        setStatus(true);
        const index = elementsRef.current.findIndex((ele) => ele === e.currentTarget);
        resizingIndex.current = index;
        listeners.current.onResizeStart?.(e, index);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', mouseUp, { once: true });
    }, []);

    function patchListener(element: E) {
        element.addEventListener('mousedown', mouseDown);
    }

    useEffect(() => {
        return () => {
            elementsRef.current.forEach((ele) => {
                ele?.removeEventListener('mousedown', mouseDown);
            });
        };
    }, []);

    const listenerRef = (record: keyof typeof listeners.current, cb: ListenerFunction) => {
        listeners.current[record] = cb;
    };

    const ref = (index: number) => {
        return (instance: E | null) => {
            elementsRef.current[index] = instance;
            instance && patchListener(instance);
        };
    };

    function resizing(): boolean;
    function resizing(index: number): boolean;
    function resizing(index?: number) {
        if (typeof index !== 'number') return status;
        return status && index === resizingIndex.current;
    }

    return [
        ref,
        resizing,
        {
            onResizeStart: (cb: ListenerFunction) => listenerRef('onResizeStart', cb),
            onResize: (cb: ListenerFunction) => listenerRef('onResize', cb),
            onResizeEnd: (cb: ListenerFunction) => listenerRef('onResizeEnd', cb),
        },
    ] as const;
}
