import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import { ISearch, ISearchModel } from 'mo/model/workbench/search';
import { TreeNodeModel } from 'mo/model';
import { FileTypes } from 'mo/components/tree';

export interface ISearchService extends Component<ISearch> {
    setSearchValue?: (value?: string) => void;
    setReplaceValue?: (value?: string) => void;
    convertFoldToSearchTree?: <T = any>(data: T[]) => T[];
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
    extends Component<ISearch>
    implements ISearchService {
    protected state: ISearch;
    constructor() {
        super();
        this.state = container.resolve(ISearchModel);
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

    public convertFoldToSearchTree<T = any>(data: T[]) {
        const searchTreeData: T[] = [];
        const buildSearchTreeData = (tree) => {
            tree?.forEach((treeItem) => {
                if (treeItem.fileType === FileTypes.file) {
                    const treeNode = {
                        ...treeItem,
                        ...new TreeNodeModel({
                            fileType: FileTypes.folder,
                            id: treeItem.id,
                            name: treeItem.name,
                        }),
                    };
                    treeNode.children = treeItem.content
                        ?.split('\n')
                        ?.filter(Boolean)
                        ?.map((item, index) => {
                            return {
                                ...treeItem,
                                ...new TreeNodeModel({
                                    name: item,
                                    content: treeItem.content,
                                    id: `${treeItem.id}_${index}` as any, // TODO: id 重复问题
                                }),
                            };
                        });
                    searchTreeData.push(treeNode);
                }
                if (treeItem.children) buildSearchTreeData(treeItem.children);
            });
        };
        buildSearchTreeData(data);
        return searchTreeData;
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
