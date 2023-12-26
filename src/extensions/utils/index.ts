import type { IMenuItemProps, IterableItem } from 'mo/types';

export function createMenuDuplicate(item: IMenuItemProps): IMenuItemProps {
    return {
        ...item,
        id: `${item.id}_duplicate`,
        name: `隐藏 “${item.name}”`,
        icon: undefined,
        symbolic: item.id,
    };
}

export function createContextMenu(items: IterableItem[]): IMenuItemProps[] {
    return items.map((item) => ({
        id: item.id,
        name: item.name,
        disabled: item.disabled,
        icon: item.hidden ? undefined : 'check',
    }));
}
