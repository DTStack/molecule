import { useState } from 'react';
import useMeasure from 'react-use/esm/useMeasure';
import useDeepCompareEffect from 'react-use/esm/useDeepCompareEffect';
import type { PosType } from 'mo/types';

export default function useAutoPos<E extends HTMLElement>(
    pos: PosType[],
    split: 'vertical' | 'horizontal' = 'vertical'
) {
    const [ref, rect] = useMeasure<E>();
    const [state, setState] = useState<number[]>(() => convertAutoToAbsolute(pos, 0));

    function convertAutoToAbsolute(data: PosType[], rect: number) {
        const res = [...data];
        let total = rect;
        const autoIndex: number[] = [];
        data.forEach((i, idx) => {
            if (i === 'auto') {
                autoIndex.push(idx);
            } else {
                total -= i;
            }
        });
        const per = total / autoIndex.length;
        autoIndex.forEach((idx) => {
            res[idx] = per;
        });
        return res as number[];
    }

    const size = rect[split === 'vertical' ? 'width' : 'height'];

    useDeepCompareEffect(() => {
        setState(convertAutoToAbsolute(pos, size));
    }, [pos, size]);

    function withChange(fn?: (data: PosType[]) => void) {
        return (absolutePos: number[]) => {
            fn?.(
                pos.map((item, idx) => {
                    if (item === 'auto') return 'auto';
                    return absolutePos[idx];
                })
            );
        };
    }

    return [ref, state, withChange] as const;
}
