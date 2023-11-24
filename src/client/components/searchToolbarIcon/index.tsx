import useConnector from 'mo/client/hooks/useConnector';
import type { IMenuItemProps } from 'mo/types';

import Action from '../action';

export default function SearchToolbarIcon(props: IMenuItemProps) {
    const { id, icon, name, disabled, onClick } = props;
    const sidebar = useConnector('sidebar');
    const search = useConnector('search');
    const builtin = useConnector('builtin');

    const valueEmpty = !search.value;
    const resultEmpty = !search.result?.length;
    const {
        SEARCH_TOOLBAR_VIEW_AS_LIST_TREE,
        SEARCH_TOOLBAR_REFRESH,
        SEARCH_TOOLBAR_CLEAR_ALL,
        SEARCH_TOOLBAR_COLLAPSE_EXPAND,
    } = builtin.constants;

    const resultIsTree =
        (sidebar.panes.find((i) => i.id === sidebar.current)?.toolbar || [])?.find(
            (i) => i.id === SEARCH_TOOLBAR_VIEW_AS_LIST_TREE
        )?.icon === 'list-flat';

    let _disabled = false;
    if ([SEARCH_TOOLBAR_REFRESH, SEARCH_TOOLBAR_CLEAR_ALL].includes(id as any)) {
        _disabled = disabled || valueEmpty;
    } else if (id === SEARCH_TOOLBAR_VIEW_AS_LIST_TREE) {
        _disabled = disabled || resultEmpty;
    } else if (id === SEARCH_TOOLBAR_COLLAPSE_EXPAND) {
        // only collapse all when result is tree and toolbar is disabled
        _disabled = disabled || resultEmpty || !resultIsTree;
    }

    return (
        <Action
            type={icon}
            title={name}
            disabled={_disabled}
            onClick={() => !_disabled && onClick?.(props)}
        >
            {name}
        </Action>
    );
}
