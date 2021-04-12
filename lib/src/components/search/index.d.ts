import * as React from 'react';
import { IActionBarItem } from '../actionBar';
export interface ISearch<T> extends React.ComponentProps<any> {
    searchAddons?: IActionBarItem[];
    replaceAddons?: IActionBarItem[];
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    onToggleAddon?: (addon: any) => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare function SearchWidget<T>(props: ISearch<T>): JSX.Element;
