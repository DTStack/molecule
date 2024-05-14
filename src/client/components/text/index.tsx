import { Fragment } from 'react';
import { classNames } from 'mo/client/classNames';

import variables from './index.scss';

export interface ITextProps {
    highlight?: string;
    children: string;
}

export default function Text({ highlight, children }: ITextProps) {
    if (!highlight) return <>{children}</>;

    let lastIdx = 0;
    let idx = children.toLocaleLowerCase().indexOf(highlight.toLocaleLowerCase(), lastIdx);
    const frag: JSX.Element[] = [];
    while (idx !== -1 && frag.length <= 4) {
        frag.push(<>{children.toLocaleLowerCase().substring(lastIdx, idx)}</>);
        frag.push(
            <span className={classNames(variables.text, variables.active)}>
                {children.substring(idx, idx + highlight.length)}
            </span>
        );
        lastIdx = idx;
        idx = children.toLocaleLowerCase().indexOf(highlight.toLocaleLowerCase(), lastIdx + 1);
    }
    if (lastIdx) {
        frag.push(<>{children.substring(lastIdx + highlight.length)}</>);
    }
    return (
        <>
            {frag.map((f, idx) => (
                <Fragment key={idx}>{f}</Fragment>
            ))}
        </>
    );
}
