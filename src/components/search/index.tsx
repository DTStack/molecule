import React from 'react';
import { useState } from 'react';
import { IActionBarItemProps } from '../actionBar';
import Input, { InfoTypeEnum, InfoTypeEnums } from './input';
import { classNames } from 'mo/common/className';
import {
    baseInputClassName,
    defaultSearchClassName,
    replaceBtnClassName,
    replaceContainerClassName,
    searchTargetContainerClassName,
} from './base';
import { Icon } from '../icon';
import { localize } from 'mo/i18n/localize';

export type SearchValues = (string | undefined)[];

export interface ISearchProps extends React.ComponentProps<any> {
    style?: React.CSSProperties;
    className?: string;
    values?: SearchValues;
    placeholders?: string[];
    addons?: (IActionBarItemProps[] | undefined)[];
    validationInfo?: string | { type: InfoTypeEnum; text: string };
    onAddonClick?: (addon) => void;
    onButtonClick?: (status: boolean) => void;
    /**
     * onChange only oberseves the values of inputs
     *
     * first value is from query input
     *
     * second value is from replace input
     */
    onChange?: (value?: SearchValues) => void;
    /**
     * onSearch always be triggered behind onChange or onClick
     */
    onSearch?: (value?: SearchValues) => void;
}

export function Search(props: ISearchProps) {
    const {
        className = '',
        style,
        placeholders = [],
        validationInfo: rawInfo,
        addons = [],
        values = [],
        onAddonClick,
        onButtonClick,
        onChange,
        onSearch,
    } = props;

    const [
        searchPlaceholder = localize('sidebar.search.placeHolder', 'Search'),
        replacePlaceholder = localize(
            'sidebar.search.replace.placeHolder',
            'Replace'
        ),
    ] = placeholders;

    const [searchAddons, replaceAddons] = addons;
    const [searchVal, replaceVal] = values;

    const [isShowReplace, setShowReplace] = useState(false);

    const onToggleReplaceBtn = () => {
        setShowReplace(!isShowReplace);
        onButtonClick?.(!isShowReplace);
        onSearch?.([searchVal, replaceVal]);
    };

    const handleSearchChange = (
        value: string,
        source: 'search' | 'replace'
    ) => {
        if (onChange) {
            const values =
                source === 'search' ? [value, replaceVal] : [searchVal, value];
            onChange(values);
            onSearch?.(values);
        }
    };

    const handleToolbarClick = (addon) => {
        onAddonClick?.(addon);
        onSearch?.([searchVal, replaceVal]);
    };

    const getInfoFromRaw = () => {
        if (rawInfo) {
            if (typeof rawInfo === 'string') {
                return { type: InfoTypeEnums.info, text: rawInfo };
            }
            return rawInfo;
        }
        return undefined;
    };

    const validationInfo = getInfoFromRaw();
    return (
        <div
            style={style}
            className={classNames(defaultSearchClassName, className)}
        >
            <Icon
                className={replaceBtnClassName}
                type={isShowReplace ? 'chevron-down' : 'chevron-right'}
                onClick={onToggleReplaceBtn}
            />
            <Input.Group>
                <Input
                    value={searchVal}
                    className={classNames(
                        baseInputClassName,
                        searchTargetContainerClassName
                    )}
                    info={validationInfo}
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
