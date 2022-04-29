import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from '@dtinsight/molecule-glue';

import {
    ISearchProps,
    SearchEvent,
    SearchModel,
} from 'mo/model/workbench/search';
import { ITreeNodeItemProps } from '@dtinsight/molecule-ui';
import { searchById } from '@dtinsight/molecule-common';
import { BuiltinService, IBuiltinService } from '../builtinService';

export interface ISearchService extends Component<ISearchProps> {
    /**
     * Set informations about validating,
     * @param info - If provided a string, molecule will set it type as `info`
     */
    setValidateInfo: (info: string | ISearchProps['validationInfo']) => void;
    /**
     * Set search value for search input
     */
    setSearchValue: (value?: string) => void;
    /**
     * Set replace value for replace input
     */
    setReplaceValue: (value?: string) => void;
    /**
     * Set result data for searching result
     */
    setResult: (value?: ITreeNodeItemProps[]) => void;
    /**
     * Toggle search mode, `true` for replace mode
     */
    toggleMode: (status: boolean) => void;
    /**
     * Toggle the rule for case senstitive when searching
     */
    toggleCaseSensitive: () => void;
    /**
     * Toggle the rule for finding whole word when searching
     */
    toggleWholeWord: () => void;
    /**
     * Toggle the rule for enabling regex when searching
     */
    toggleRegex: () => void;
    /**
     * Toggle the rule for preserving case when replacing
     */
    togglePreserveCase: () => void;
    /**
     * Update the status of specific addon icon to `checked`
     */
    updateStatus: (addonId: string, checked: boolean) => void;
    /**
     * Reset the search input data
     */
    reset(): void;
    /**
     * Listen to the event about the value of search input changed
     */
    onChange(callback: (value: string, replaceValue: string) => void): void;
    /**
     * Listen to the event about going to search result via values or config changed
     */
    onSearch(
        callback: (
            value: string,
            replaceValue: string,
            config: {
                isRegex: boolean;
                isCaseSensitive: boolean;
                isWholeWords: boolean;
                preserveCase: boolean;
            }
        ) => void
    ): void;
    /**
     * Listen to the event about replace all text in result
     */
    onReplaceAll(callback: () => void): void;
    /**
     * Listen to the click event in result data
     */
    onResultClick(
        callback: (
            item: ITreeNodeItemProps,
            resultData: ITreeNodeItemProps[]
        ) => void
    ): void;
}

@singleton()
export class SearchService
    extends Component<ISearchProps>
    implements ISearchService
{
    protected state: ISearchProps;
    private builtinService: IBuiltinService;
    constructor() {
        super();
        this.state = container.resolve(SearchModel);
        this.builtinService = container.resolve(BuiltinService);
    }

    public setValidateInfo(info: string | ISearchProps['validationInfo']) {
        this.setState({
            validationInfo:
                typeof info === 'string'
                    ? {
                          type: 'info',
                          text: info,
                      }
                    : info,
        });
    }

    public setSearchValue(value?: string) {
        this.setState({
            value,
        });
    }

    public setReplaceValue(value?: string) {
        this.setState({
            replaceValue: value,
        });
    }

    public setResult(value?: ITreeNodeItemProps[]) {
        this.setState({
            result: value || [],
        });
    }

    public toggleMode(status: boolean) {
        this.setState({
            replaceMode: status,
        });
    }

    public toggleCaseSensitive() {
        const { isCaseSensitive } = this.state;
        const { SEARCH_CASE_SENSITIVE_COMMAND_ID } =
            this.builtinService.getConstants();
        if (SEARCH_CASE_SENSITIVE_COMMAND_ID) {
            this.setState({
                isCaseSensitive: !isCaseSensitive,
            });
            this.updateStatus(
                SEARCH_CASE_SENSITIVE_COMMAND_ID,
                !isCaseSensitive
            );
        }
    }

    public toggleWholeWord() {
        const { isWholeWords } = this.state;
        const { SEARCH_WHOLE_WORD_COMMAND_ID } =
            this.builtinService.getConstants();
        if (SEARCH_WHOLE_WORD_COMMAND_ID) {
            this.setState({
                isWholeWords: !isWholeWords,
            });
            this.updateStatus(SEARCH_WHOLE_WORD_COMMAND_ID, !isWholeWords);
        }
    }

    public toggleRegex() {
        const { isRegex } = this.state;
        const { SEARCH_REGULAR_EXPRESSION_COMMAND_ID } =
            this.builtinService.getConstants();
        if (SEARCH_REGULAR_EXPRESSION_COMMAND_ID) {
            this.setState({
                isRegex: !isRegex,
            });
            this.updateStatus(SEARCH_REGULAR_EXPRESSION_COMMAND_ID, !isRegex);
        }
    }

    public togglePreserveCase() {
        const { preserveCase } = this.state;
        const { SEARCH_PRESERVE_CASE_COMMAND_ID } =
            this.builtinService.getConstants();
        if (SEARCH_PRESERVE_CASE_COMMAND_ID) {
            this.setState({
                preserveCase: !preserveCase,
            });
            this.updateStatus(SEARCH_PRESERVE_CASE_COMMAND_ID, !preserveCase);
        }
    }

    public updateStatus(addonId: string, checked: boolean) {
        const { replaceAddons = [], searchAddons = [] } = this.state;
        const target =
            replaceAddons.find(searchById(addonId)) ||
            searchAddons.find(searchById(addonId));

        if (target) {
            target.checked = checked;
            this.setState({
                replaceAddons: replaceAddons.concat(),
                searchAddons: searchAddons.concat(),
            });
        }
    }

    public reset() {
        this.setState({
            headerToolBar: [],
            searchAddons: [],
            replaceAddons: [],
            result: [],
            value: '',
            replaceValue: '',
            replaceMode: false,
            isRegex: false,
            isCaseSensitive: false,
            isWholeWords: false,
            preserveCase: false,
            validationInfo: { type: 'info', text: '' },
        });
    }

    public onReplaceAll(callback: () => void): void {
        this.subscribe(SearchEvent.onReplaceAll, callback);
    }

    public onChange(
        callback: (value: string, replaceValue: string) => void
    ): void {
        this.subscribe(SearchEvent.onChange, callback);
    }

    public onSearch(
        callback: (
            value: string,
            replaceValue: string,
            config: {
                isRegex: boolean;
                isCaseSensitive: boolean;
                isWholeWords: boolean;
                preserveCase: boolean;
            }
        ) => void
    ): void {
        this.subscribe(SearchEvent.onSearch, callback);
    }

    public onResultClick(
        callback: (
            item: ITreeNodeItemProps,
            resultData: ITreeNodeItemProps[]
        ) => void
    ): void {
        this.subscribe(SearchEvent.onResultClick, callback);
    }
}
