import * as React from 'react';
import { useState } from 'react';
import { IActionBarItemProps } from '../actionBar';
import Input from './Input';
import { classNames } from 'mo/common/className';
import {
    baseInputClassName,
    defaultSearchClassName,
    replaceBtnClassName,
    replaceContainerClassName,
    searchTargetContainerClassName,
} from './base';

export interface ISearchProps extends React.ComponentProps<any> {
    style?: React.CSSProperties;
    className?: string;
    values?: (string | undefined)[];
    placeholders?: string[];
    addons?: (IActionBarItemProps[] | undefined)[];
    onAddonClick?: (addon) => void;
    onSearchChange?: (value?: string) => void;
    onReplaceChange?: (value?: string) => void;
}

export function Search(props: ISearchProps) {
    const {
        className = '',
        style,
        placeholders = [],
        onSearchChange,
        onReplaceChange,
        addons = [],
        onAddonClick,
        values = [],
    } = props;
    const [
        searchPlaceholder = 'Search',
        replacePlaceholder = 'Replace',
    ] = placeholders;
    const [searchAddons, replaceAddons] = addons;
    const [searchVal, replaceVal] = values;

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
            <Input.Group>
                <Input
                    value={searchVal}
                    className={classNames(
                        baseInputClassName,
                        searchTargetContainerClassName
                    )}
                    placeholder={searchPlaceholder}
                    onChange={onSearchChange}
                    toolbarData={searchAddons}
                    onToolbarClick={onAddonClick}
                />
                {isShowReplace && (
                    <Input
                        value={replaceVal}
                        className={classNames(
                            baseInputClassName,
                            replaceContainerClassName
                        )}
                        placeholder={replacePlaceholder}
                        onChange={onReplaceChange}
                        toolbarData={replaceAddons}
                        onToolbarClick={onAddonClick}
                    />
                )}
            </Input.Group>
        </div>
    );
}
