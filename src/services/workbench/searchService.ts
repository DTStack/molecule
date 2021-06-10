import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';

import { ISearchProps, SearchModel } from 'mo/model/workbench/search';
import { FileTypes, TreeNodeModel } from 'mo/model';
import { ITreeNodeItemProps } from 'mo/components';

export interface ISearchService extends Component<ISearchProps> {
    /**
     * Validate value if is valid
     */
    validateValue: (value: string) => { valid: boolean; errMessage?: string };
    setValidateInfo: (info: ISearchProps['validationInfo']) => void;
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    convertFoldToSearchTree?: (
        data: TreeNodeModel[],
        queryVal?: string
    ) => ITreeNodeItemProps[];
    getSearchIndex: (text: string, queryVal?: string) => number;
    toggleMode: (status: boolean) => void;
    toggleCaseSensitive?: (addonId: string) => void;
    toggleWholeWord?: (addonId: string) => void;
    toggleRegex?: (addonId: string) => void;
    togglePreserveCase?: (addonId: string) => void;
    toggleReplaceAll?: (addonId: string) => void;
    updateSearchAddonsCheckedStats?: (
        addonId: string,
        checked: boolean
    ) => void;
    updateReplaceAddonsCheckedStats?: (
        addonId: string,
        checked: boolean
    ) => void;
    openSearchView?: () => void;
}

@singleton()
export class SearchService
    extends Component<ISearchProps>
    implements ISearchService {
    protected state: ISearchProps;
    constructor() {
        super();
        this.state = container.resolve(SearchModel);
    }

    /**
     * Validate value if is valid
     */
    public validateValue(value: string) {
        if (this.state.isRegex) {
            try {
                new RegExp(value);
                return {
                    valid: true,
                };
            } catch (e) {
                return {
                    valid: false,
                    errMessage: e.message,
                };
            }
        }
        return {
            valid: true,
        };
    }

    public setValidateInfo(info: ISearchProps['validationInfo']) {
        this.setState({
            validationInfo: info,
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

    /**
     * Returns the position of the first occurrence of a substring.
     * @param text Current string
     * @param queryVal The substring to search for in the string
     * @returns
     */
    public getSearchIndex(text: string, queryVal: string = '') {
        let searchIndex: number = -1;
        const { isCaseSensitive, isWholeWords, isRegex } = this.state;
        const onlyCaseSensitiveMatch = isCaseSensitive;
        const onlyWholeWordsMatch = isWholeWords;
        const useAllCondtionsMatch = isCaseSensitive && isWholeWords;
        const notUseConditionsMatch = !isCaseSensitive && !isWholeWords;

        try {
            if (isRegex) {
                if (onlyCaseSensitiveMatch) {
                    searchIndex = text.search(new RegExp(queryVal));
                }
                if (onlyWholeWordsMatch) {
                    searchIndex = text.search(
                        new RegExp('\\b' + queryVal + '\\b', 'i')
                    );
                }
                if (useAllCondtionsMatch) {
                    searchIndex = text.search(
                        new RegExp('\\b' + queryVal + '\\b')
                    );
                }
                if (notUseConditionsMatch) {
                    searchIndex = text
                        .toLowerCase()
                        .search(new RegExp(queryVal, 'i'));
                }
            } else {
                if (onlyCaseSensitiveMatch) {
                    searchIndex = text.indexOf(queryVal);
                }
                // TODO：应使用字符串方法做搜索匹配，暂时使用正则匹配
                if (onlyWholeWordsMatch) {
                    const reg = new RegExp(
                        '\\b' + queryVal?.toLowerCase() + '\\b'
                    );
                    searchIndex = text.toLowerCase().search(reg);
                }
                if (useAllCondtionsMatch) {
                    searchIndex = text.search(
                        new RegExp('\\b' + queryVal + '\\b')
                    );
                }
                if (notUseConditionsMatch) {
                    searchIndex = text
                        .toLowerCase()
                        .indexOf(queryVal?.toLowerCase());
                }
            }
        } catch (e) {
            console.error(e);
        }
        return searchIndex;
    }

    public convertFoldToSearchTree(
        data: TreeNodeModel[],
        queryVal?: string
    ): ITreeNodeItemProps[] {
        const searchTreeData: ITreeNodeItemProps[] = [];

        const buildSearchTreeData = (tree?: TreeNodeModel[]) => {
            tree?.forEach((treeItem) => {
                if (treeItem.fileType === FileTypes.File) {
                    const children = treeItem.content
                        ?.split('\n')
                        .filter(
                            (text) => this.getSearchIndex(text, queryVal) !== -1
                        );

                    if (children?.length) {
                        // this file contains result
                        const treeNode: ITreeNodeItemProps = {
                            key: treeItem.id?.toString(),
                            name: treeItem.name,
                            isLeaf: false,
                            isEditable: treeItem.isEditable,
                            originalData: treeItem,
                            children: children.map((item, index) => ({
                                key: `${treeItem.id?.toString()}_${index}`,
                                name: item,
                                isLeaf: true,
                                isEditable: false,
                            })),
                        };
                        searchTreeData.push(treeNode);
                    }
                }
                if (treeItem.children) buildSearchTreeData(treeItem.children);
            });
        };

        buildSearchTreeData(data);
        return searchTreeData;
    }

    public toggleMode(status: boolean) {
        this.setState({
            replaceMode: status,
        });
    }

    public toggleCaseSensitive(addonId: string) {
        const { isCaseSensitive } = this.state;
        this.setState({
            isCaseSensitive: !isCaseSensitive,
        });
        this.updateSearchAddonsCheckedStats(addonId, isCaseSensitive);
    }

    public toggleWholeWord(addonId: string) {
        const { isWholeWords } = this.state;
        this.setState({
            isWholeWords: !isWholeWords,
        });
        this.updateSearchAddonsCheckedStats(addonId, isWholeWords);
    }

    public toggleRegex(addonId) {
        const { isRegex } = this.state;
        this.setState({
            isRegex: !isRegex,
        });
        this.updateSearchAddonsCheckedStats(addonId, isRegex);
    }

    public togglePreserveCase(addonId: string) {
        const { preserveCase } = this.state;
        this.setState({
            preserveCase: !preserveCase,
        });
        this.updateReplaceAddonsCheckedStats(addonId, preserveCase);
    }

    public toggleReplaceAll() {
        console.log('toggleReplaceAll');
    }

    public updateSearchAddonsCheckedStats(addonId: string, checked?: boolean) {
        const { searchAddons } = this.state;
        const newAddons = searchAddons?.map((addon) => {
            return {
                ...addon,
                checked: addon.id === addonId ? !checked : addon.checked,
            };
        });
        this.setState({
            searchAddons: newAddons,
        });
    }

    public updateReplaceAddonsCheckedStats(addonId: string, checked?: boolean) {
        const { replaceAddons } = this.state;
        const newAddons = replaceAddons?.map((addon) => {
            return {
                ...addon,
                checked: addon.id === addonId ? !checked : addon.checked,
            };
        });
        this.setState({
            replaceAddons: newAddons,
        });
    }

    public triggerQueryChange() {}

    public openSearchView() {}
}
