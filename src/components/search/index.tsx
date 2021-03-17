import * as React from 'react';
import { useState } from 'react';
import { ReplaceInput } from './replaceInput';
import { SearchInput } from './searchInput';
import { classNames } from 'mo/common/className';
import { defaultSearchClassName, replaceBtnClassName } from './base';

export interface ISearch<T> extends React.ComponentProps<any> {
    className?: string;
    style?: React.CSSProperties;
}

export function SearchWidget<T>(props: ISearch<T>) {
    const { className = '', style } = props;

    const [isShowReplace, setShowReplace] = useState(false);
    const toggleReplaceBtnClassName = classNames(
        replaceBtnClassName,
        'codicon',
        `codicon-chevron-${isShowReplace ? 'down' : 'right'}`
    );

    const onToggleReplaceBtn = () => {
        setShowReplace(!isShowReplace);
    };

    return (
        <div
            style={style}
            className={classNames(defaultSearchClassName, className)}
        >
            <a
                className={toggleReplaceBtnClassName}
                onClick={onToggleReplaceBtn}
            ></a>
            <SearchInput {...props} />
            {isShowReplace && <ReplaceInput {...props} />}
        </div>
    );
}
