import { PropsWithChildren, useEffect, useRef } from 'react';
import { createRoot, type Root } from 'react-dom/client';

export default function KeepAlive({ active, children }: PropsWithChildren<{ active: boolean }>) {
    const ref = useRef<HTMLDivElement>(null);
    const root = useRef<Root | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        root.current = createRoot(ref.current);

        return () => {
            // FIXME: https://github.com/facebook/react/issues/25675#issuecomment-1518272581
            window.requestAnimationFrame(() => {
                root.current?.unmount();
            });
        };
    }, []);

    useEffect(() => {
        if (!root.current) return;
        if (active) {
            ref.current?.style.setProperty('display', 'block');
        } else {
            ref.current?.style.setProperty('display', 'none');
        }
    }, [active]);

    useEffect(() => {
        if (!root.current) return;
        if (active) {
            root.current.render(children);
        }
    });

    return <div ref={ref} style={{ width: '100%', height: '100%' }} />;
}
