import * as React from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { classNames } from 'mo/common/className';
import {
    defaultSearchClassName,
    replaceContainerClassName,
    searchToolBarClassName,
} from './base';

export interface IReplaceInputProps {
    replaceAddons?: IActionBarItemProps[];
    setReplaceValue?: (value?: string) => void;
    onToggleAddon?: (addon) => void;
}

export function ReplaceInput(props: IReplaceInputProps) {
    const { replaceAddons = [], setReplaceValue, onToggleAddon } = props;

    const onClick = (e, item) => {
        console.log('onClick:', item);
        onToggleAddon?.(item);
    };

    return (
        <div
            className={classNames(
                defaultSearchClassName,
                replaceContainerClassName
            )}
        >
            <input
                placeholder="Replace"
                onChange={(e) => {
                    setReplaceValue?.(e.target.value);
                }}
            />
            <Toolbar
                className={searchToolBarClassName}
                data={replaceAddons}
                onClick={onClick}
            />
        </div>
    );
}
