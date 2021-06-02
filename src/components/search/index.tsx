import * as React from 'react';
import { useState } from 'react';
import { IActionBarItemProps } from '../actionBar';
import Input from './input';
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
    onButtonClick?: (status: boolean) => void;
    /**
     * onChange only oberseves the values of inputs
     *
     * first value is from query input
     *
     * second value is from replace input
     */
    onChange?: (value?: (string | undefined)[]) => void;
    /**
     * onSearch always be triggered behind onChange or onClick
     */
    onSearch?: (queryVal: string | undefined, replaceVal?: string) => void;
}

export function Search(props: ISearchProps) {
    const {
        className = '',
        style,
        placeholders = [],
        addons = [],
        values = [],
        onAddonClick,
        onButtonClick,
        onChange,
        onSearch,
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
        onButtonClick?.(!isShowReplace);
        onSearch?.(searchVal, replaceVal);
    };

    const handleSearchChange = (
        value: string,
        source: 'search' | 'replace'
    ) => {
        if (onChange) {
            const values =
                source === 'search' ? [value, replaceVal] : [searchVal, value];
            onChange(values);
            onSearch?.(searchVal, replaceVal);
        }
    };

    const handleToolbarClick = (addon) => {
        onAddonClick?.(addon);
        onSearch?.(searchVal, replaceVal);
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
                    onChange={(v) => handleSearchChange(v, 'search')}
                    toolbarData={searchAddons}
                    onToolbarClick={handleToolbarClick}
                />
                {isShowReplace && (
                    <Input
                        value={replaceVal}
                        className={classNames(
                            baseInputClassName,
                            replaceContainerClassName
                        )}
                        placeholder={replacePlaceholder}
                        onChange={(v) => handleSearchChange(v, 'replace')}
                        toolbarData={replaceAddons}
                        onToolbarClick={handleToolbarClick}
                    />
                )}
            </Input.Group>
        </div>
    );
}
