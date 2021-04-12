import { Component } from 'mo/react/component';
import { ISearch } from 'mo/model/workbench/search';
export interface ISearchService extends Component<ISearch> {
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    convertFoldToSearchTree?: <T = any>(data: T[]) => T[];
    toggleCaseSensitive?: (addonId: string) => void;
    toggleWholeWord?: (addonId: string) => void;
    toggleRegex?: (addonId: string) => void;
    togglePreserveCase?: (addonId: string) => void;
    toggleReplaceAll?: (addonId: string) => void;
    updateSearchAddonsCheckedStats?: (addonId: string, checked: boolean) => void;
    updateReplaceAddonsCheckedStats?: (addonId: string, checked: boolean) => void;
    openSearchView?: () => void;
}
export declare class SearchService extends Component<ISearch> implements ISearchService {
    protected state: ISearch;
    constructor();
    setSearchValue(value?: string): void;
    setReplaceValue(value?: string): void;
    convertFoldToSearchTree<T = any>(data: T[]): T[];
    toggleCaseSensitive(addonId: string): void;
    toggleWholeWord(addonId: string): void;
    toggleRegex(addonId: any): void;
    togglePreserveCase(addonId: string): void;
    toggleReplaceAll(): void;
    updateSearchAddonsCheckedStats(addonId: string, checked?: boolean): void;
    updateReplaceAddonsCheckedStats(addonId: string, checked?: boolean): void;
    triggerQueryChange(): void;
    openSearchView(): void;
}
