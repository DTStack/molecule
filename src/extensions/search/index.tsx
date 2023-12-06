import { debounce } from 'lodash-es';
import { IExtension, IMenuItemProps } from 'mo/types';

export const ExtendsSearch: IExtension = {
    id: 'ExtendsSearch',
    name: 'ExtendsSearch',
    activate: function (molecule): void {
        molecule.search.onChange((value: string) => {
            molecule.search.setValue(value);
        });

        const debounceSearch = debounce(() => {
            const { value, result, resultIsTree } = molecule.search.getState() || {};
            const valueEmpty = !value;
            const resultEmpty = !result?.length;
            const {
                SEARCH_ACTIVITY_ITEM,
                SEARCH_TOOLBAR_REFRESH,
                SEARCH_TOOLBAR_CLEAR_ALL,
                SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                SEARCH_TOOLBAR_VIEW_AS_LIST_TREE,
            } = molecule.builtin.getState().constants;

            // change toolbar's disabled status
            molecule.sidebar.updateToolbar(SEARCH_ACTIVITY_ITEM, [
                {
                    id: SEARCH_TOOLBAR_REFRESH,
                    disabled: valueEmpty,
                },
                {
                    id: SEARCH_TOOLBAR_CLEAR_ALL,
                    disabled: valueEmpty,
                },
                {
                    id: SEARCH_TOOLBAR_VIEW_AS_LIST_TREE,
                    disabled: resultEmpty,
                },
                {
                    id: SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                    disabled: resultEmpty || !resultIsTree,
                },
            ]);
        }, 400);
        molecule.search.onSearch(debounceSearch);

        // set collapse_expand and save resultIsTree
        molecule.sidebar.onToolbarClick((item: IMenuItemProps) => {
            const {
                SEARCH_ACTIVITY_ITEM,
                SEARCH_TOOLBAR_VIEW_AS_LIST_TREE,
                SEARCH_TOOLBAR_COLLAPSE_EXPAND,
            } = molecule.builtin.getState().constants;
            if (item.id === SEARCH_TOOLBAR_VIEW_AS_LIST_TREE) {
                const { resultIsTree } = molecule.search.getState() || {};

                molecule.sidebar.updateToolbar(SEARCH_ACTIVITY_ITEM, [
                    {
                        id: SEARCH_TOOLBAR_COLLAPSE_EXPAND,
                        disabled: resultIsTree,
                    },
                ]);
                molecule.search.setResultIsTree(!resultIsTree);
            }
        });
    },
};
