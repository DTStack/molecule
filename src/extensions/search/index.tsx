import { IExtension, IMenuItemProps } from 'mo/types';

export const ExtendsSearch: IExtension = {
    id: 'ExtendsSearch',
    name: 'ExtendsSearch',
    activate: function (molecule): void {
        molecule.search.onChange((value: string) => {
            molecule.search.setValue(value);
        });

        molecule.sidebar.onToolbarClick((item: IMenuItemProps) => {
            const { SIDEBAR_ITEM_SEARCH, SEARCH_TOOLBAR_VIEW_AS_LIST, SEARCH_TOOLBAR_VIEW_AS_TREE } =
                molecule.builtin.getState().constants;
            if (item.id === SEARCH_TOOLBAR_VIEW_AS_LIST || item.id === SEARCH_TOOLBAR_VIEW_AS_TREE) {
                molecule.search.toggleMode();
                const next =
                    item.id === SEARCH_TOOLBAR_VIEW_AS_LIST
                        ? molecule.builtin.getModules().SEARCH_TOOLBAR_VIEW_AS_TREE
                        : molecule.builtin.getModules().SEARCH_TOOLBAR_VIEW_AS_LIST;
                molecule.sidebar.replaceToolbar(SIDEBAR_ITEM_SEARCH, item.id, next);
                molecule.search.setExpandedKeys([]);
            }
        });
    },
};
