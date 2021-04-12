import { Controller } from 'mo/react/controller';
import { IActionBarItem } from 'mo/components/actionBar';
export interface ISearchController {
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    convertFoldToSearchTree?: <T = any>(data?: T[]) => T[];
    onToggleAddon?: (addon?: IActionBarItem) => void;
    onToggleCaseSensitive?: (addonId: string) => void;
    onToggleWholeWord?: (addonId: string) => void;
    onToggleRegex?: (addonId: string) => void;
    onTogglePreserveCase?: (addonId: string) => void;
    onToggleReplaceAll?: (addonId: string) => void;
}
export declare class SearchController extends Controller implements ISearchController {
    constructor();
    private initView;
    readonly setSearchValue: (value?: string | undefined) => void;
    readonly setReplaceValue: (value?: string | undefined) => void;
    onToggleAddon: (addon?: IActionBarItem<any> | undefined) => void;
    readonly onToggleCaseSensitive: (addonId: string) => void;
    readonly onToggleWholeWord: (addonId: string) => void;
    readonly onToggleRegex: (addonId: string) => void;
    readonly onTogglePreserveCase: (addonId: string) => void;
    readonly onToggleRepalceAll: (addonId: string) => void;
    readonly convertFoldToSearchTree: (data: any) => any;
}
