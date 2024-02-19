import { useEffect, useMemo, useRef } from 'react';
import useMeasure from 'react-use/esm/useMeasure';

export default function useEditorPos(pos: number[], len: number, split: 'vertical' | 'horizontal' = 'vertical') {
    const [ref, rect] = useMeasure<HTMLDivElement>();
    const literal = split === 'vertical' ? 'width' : 'height';
    const fn = useRef<(sizes: number[]) => void>(() => {});

    useEffect(() => {
        if (sizes.length && sizes.length === len) {
            const total = sizes.reduce((acc, cur) => acc + cur);
            if (total !== rect[literal]) {
                const diff = rect[literal] - total;
                const per = diff / len;
                fn.current(sizes.map((size) => size + per));
            }
        }
    }, [rect[literal]]);

    const sizes = useMemo(() => {
        if (pos.length && pos.length === len) return pos;
        return new Array(len).fill(rect[literal] / len);
    }, [pos, len]);

    const useResize = (cb: (sizes: number[]) => void) => {
        fn.current = cb;
    };

    return [ref, sizes, useResize] as const;
}
