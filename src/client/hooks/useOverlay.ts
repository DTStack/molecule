import { useEffect, useRef } from 'react';

const MAX_RETRY = 4;
const PLACEMENTS = {
    topRight: 'translate(0px, -100%)',
    topLeft: 'translate(-100%, -100%)',
    bottomLeft: 'translate(-100%, 0px)',
    bottomRight: '',
};
export default function useOverlay(
    effect: () => void,
    deps?: React.DependencyList | undefined
) {
    const ref = useRef<HTMLDivElement>(null);
    function isOverlayView(ele: HTMLElement) {
        const { top, left, width, height } = ele.getBoundingClientRect();
        const overlayRight = top + height >= document.documentElement.clientHeight;
        const overlayTop = top <= 0;
        const overlayLeft = left <= 0;
        const overlayBottom = left + width >= document.documentElement.clientWidth;
        return overlayRight || overlayTop || overlayLeft || overlayBottom;
    }

    function translate(ele: HTMLElement) {
        const current = ele.style.getPropertyValue('transform');
        switch (current) {
            case PLACEMENTS.topRight: {
                ele.style.setProperty('transform', PLACEMENTS.topLeft);
                break;
            }
            case PLACEMENTS.topLeft: {
                ele.style.setProperty('transform', PLACEMENTS.bottomLeft);
                break;
            }
            case PLACEMENTS.bottomLeft: {
                ele.style.setProperty('transform', PLACEMENTS.bottomRight);
                break;
            }
            default:
                ele.style.setProperty('transform', PLACEMENTS.topRight);
        }
    }

    useEffect(() => {
        const raf = window.requestAnimationFrame(() => {
            if (ref.current) {
                let index = 0;

                while (isOverlayView(ref.current)) {
                    index += 1;
                    translate(ref.current);
                    // prevent maximum call stack
                    if (index >= MAX_RETRY) {
                        ref.current.style.removeProperty('transform');
                        break;
                    }
                }
                effect();
            }
        });

        return () => {
            window.cancelAnimationFrame(raf);
        };
    }, deps);

    return ref;
}
