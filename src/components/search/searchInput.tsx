import * as React from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { classNames } from 'mo/common/className';
import {
    defaultSearchClassName,
    searchContainerClassName,
    searchToolBarClassName,
} from './base';

export interface ISearchInputProps {
    searchAddons?: IActionBarItemProps[];
    setSearchValue?: (value?: string) => void;
    onToggleAddon?: (addon) => void;
}

export function SearchInput<T>(props: ISearchInputProps) {
    const { setSearchValue, searchAddons = [], onToggleAddon } = props;

    const onClick = (e, item) => {
        console.log('onClick:', item);
        onToggleAddon?.(item);
    };

    return (
        <div
            className={classNames(
                defaultSearchClassName,
                searchContainerClassName
            )}
        >
            <input
                placeholder="Search"
                onChange={(e) => {
                    setSearchValue?.(e.target.value);
                }}
            />
            <Toolbar
                className={searchToolBarClassName}
                data={searchAddons}
                onClick={onClick}
            />
        </div>
    );
}
