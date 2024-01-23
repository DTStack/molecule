import { useCallback, useEffect, useRef, useState } from 'react';

export default function useSlide<E extends HTMLElement>() {
    const [ele, ref] = useState<E | null>(null);
    const listener = useRef<{
        onSlide?: (e: PointerEvent) => void;
        onSlideStart?: (e: PointerEvent) => void;
        onSlideEnd?: (e: PointerEvent) => void;
    }>({});

    const pointerMove = useCallback((e: PointerEvent) => {
        listener.current.onSlide?.(e);
    }, []);

    const pinterUp = useCallback((e: PointerEvent) => {
        const ele = e.currentTarget as E;
        document.body.style.removeProperty('user-select');
        listener.current.onSlideEnd?.(e);
        ele.removeEventListener('pointermove', pointerMove);
        ele.releasePointerCapture(e.pointerId);
    }, []);

    const pointerDown = useCallback((e: PointerEvent) => {
        const ele = e.currentTarget as E;
        ele.setPointerCapture(e.pointerId);
        document.body.style.userSelect = 'none';
        listener.current.onSlideStart?.(e);
        ele.addEventListener('pointermove', pointerMove);
        ele.addEventListener('pointerup', pinterUp);
    }, []);

    useEffect(() => {
        if (ele) {
            ele.addEventListener('pointerdown', pointerDown);
        }
    }, [ele]);

    function on(fn: (e: PointerEvent) => void, key: keyof typeof listener.current) {
        listener.current[key] = fn;
    }

    // ===================== listener =====================
    const onSlide = (fn: (e: PointerEvent) => void) => {
        on(fn, 'onSlide');
    };
    const onSlideStart = (fn: (e: PointerEvent) => void) => {
        on(fn, 'onSlideStart');
    };
    const onSlideEnd = (fn: (e: PointerEvent) => void) => {
        on(fn, 'onSlideEnd');
    };

    return [ref, onSlide, onSlideStart, onSlideEnd] as const;
}
