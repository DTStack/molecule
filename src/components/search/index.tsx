import * as React from 'react';
import { useState } from 'react';
import { IActionBarItem } from '../actionBar';
import { ReplaceInput } from './replaceInput';
import { SearchInput } from './searchInput';
import { classNames } from 'mo/common/className';
import { defaultSearchClassName, replaceBtnClassName } from './base';

export interface ISearch<T> extends React.ComponentProps<any> {
    searchAddons?: IActionBarItem[];
    replaceAddons?: IActionBarItem[];
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    onToggleAddon?: (addon) => void;
    className?: string;
    style?: React.CSSProperties;
}

export function SearchWidget<T>(props: ISearch<T>) {
    const { className = '', style, ...restProps } = props;

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
            <SearchInput {...restProps} />
            {isShowReplace && <ReplaceInput {...restProps} />}
        </div>
    );
}
