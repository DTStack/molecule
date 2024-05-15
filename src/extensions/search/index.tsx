import { FileTypes, IExtension } from 'mo/types';

export const ExtendsSearch: IExtension = {
    id: 'ExtendsSearch',
    name: 'ExtendsSearch',
    activate: function (molecule): void {
        molecule.search.onChange((value: string) => {
            molecule.search.setValue(value);
        });

        molecule.search.onSelect((treeNode) => {
            if (treeNode.fileType === FileTypes.Folder) {
                const path = treeNode.id;
                const filenames = molecule.search
                    .getState()
                    .result.results.filter((item) => item.filename.startsWith(path as string))
                    .map((item) => item.filename);
                const isExpand = molecule.search
                    .getExpandedKeys()
                    .some((val) => (val as string).startsWith(path as string));
                if (isExpand) {
                    molecule.search.removeExpandedKeys(filenames);
                } else {
                    molecule.search.addExpandedKeys(filenames);
                }
            }
        });
    },
};
