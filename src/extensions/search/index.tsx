import { IExtension, SearchResultItem } from 'mo/types';

export const ExtendsSearch: IExtension = {
    id: 'ExtendsSearch',
    name: 'ExtendsSearch',
    activate: function (molecule): void {
        molecule.search.onChange((value: string) => {
            molecule.search.setValue(value);
        });

        molecule.search.onResultClick((item: SearchResultItem) => {
            console.log('onResultClick', item);

            // open file in editor
            if (item.fileType === 'File') {
                const name = `editor-${item.name}`;
                molecule.editor.open(
                    {
                        id: item.id,
                        name,
                        icon: 'file',
                        value: item?.data?.value,
                        language: item?.data?.language || 'typescript',
                        breadcrumb: item?.data?.breadcrumb
                            ?.map((bread) => {
                                return {
                                    id: `${bread}`,
                                    name: bread,
                                    icon: '',
                                };
                            })
                            ?.concat({
                                id: `${item.id}`,
                                name: item.name,
                                icon: 'file',
                            }),
                    },
                    molecule.editor.getState().groups?.at(0)?.id
                );
            }

            // collapse or expand folder
            if (item.fileType === 'Folder') {
                const expandKeys = molecule.search.getState().expandKeys;
                const index = expandKeys.indexOf(item.id);
                if (index > -1) {
                    expandKeys.splice(index, 1);
                } else {
                    expandKeys.push(item.id);
                }
                molecule.search.setExpandKeys(expandKeys);
            }
        });
    },
};
