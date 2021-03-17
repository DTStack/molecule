import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import { ISearch, ISearchModel } from 'mo/model/workbench/search';
import { TreeNodeModel } from 'mo/model';
import { FileTypes } from 'mo/components/tree';

export interface ISearchService extends Component<ISearch> {
    setSearchValue?: (value?: string) => void;
    convertFoldToSearchTree?: <T = any>(data: T[]) => T[];
    toggleWholeWord?: () => void;
    toggleRegex?: () => void;
    togglePreserveCase?: () => void;
    toggleCaseSensitive?: () => void;
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

    public convertFoldToSearchTree<T = any>(data: T[]) {
        const searchTreeData: T[] = [];
        const generate = (tree) => {
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
                    treeNode.children = treeItem.value
                        ?.split('\n')
                        ?.filter(Boolean)
                        ?.map((item, index) => {
                            return {
                                ...treeItem,
                                ...new TreeNodeModel({
                                    name: item,
                                    id: `${treeItem.id}_${index}` as any, // id 不能重复..
                                }),
                            };
                        });
                    searchTreeData.push(treeNode);
                }
                if (treeItem.children) generate(treeItem.children);
            });
        };
        generate(data);
        console.log('searchTreeData', searchTreeData);
        return searchTreeData;
    }

    public toggleWholeWord() {}

    public toggleRegex() {}

    public togglePreserveCase() {}

    public toggleCaseSensitive() {}

    public openSearchView() {}
}
