import { PropsWithChildren, useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface IDisplayProps extends PropsWithChildren<{}> {
    visible: boolean;
    delay?: number;
    onDisplay?: (visible: boolean) => void;
}

export default function Display({ visible, children, delay = 0, onDisplay }: IDisplayProps) {
    const [state, setState] = useState(false);
    const timeout = useRef(0);

    useEffect(() => {
        if (visible) {
            setState(visible);
        } else if (delay === 0) {
            setState(visible);
        } else {
            timeout.current = window.setTimeout(() => {
                setState(visible);
            }, delay);
        }

        return () => {
            window.clearTimeout(timeout.current);
        };
    }, [visible]);

    useLayoutEffect(() => {
        onDisplay?.(state);
    }, [state]);

    return <>{state && children}</>;
}
