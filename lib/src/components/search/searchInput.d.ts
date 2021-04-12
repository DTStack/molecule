import { IActionBarItem } from 'mo/components/actionBar';
export interface ISearchInput {
    searchAddons?: IActionBarItem[];
    setSearchValue?: (value?: string) => void;
    onToggleAddon?: (addon: any) => void;
}
export declare function SearchInput<T>(props: ISearchInput): JSX.Element;
