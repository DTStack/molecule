import { useCallback, useEffect, useRef, useState } from 'react';

export default function useHover<E extends HTMLElement>(delay = 0) {
    const [element, ref] = useState<E | null>(null);
    const [state, setState] = useState(false);
    const timeout = useRef<number>(0);

    const enter = useCallback(function () {
        if (!delay) {
            setState(true);
        } else {
            timeout.current = window.setTimeout(() => {
                setState(true);
            }, delay);
        }
    }, []);

    const leave = useCallback(function () {
        window.clearTimeout(timeout.current);
        setState(false);
    }, []);

    useEffect(() => {
        if (element) {
            element.addEventListener('mouseenter', enter);
            element.addEventListener('mouseleave', leave);
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseenter', enter);
                element.removeEventListener('mouseleave', leave);
            }
            window.clearTimeout(timeout.current);
        };
    }, [element]);

    return [ref, state] as const;
}
