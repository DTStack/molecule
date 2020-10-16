import { ISidebar, ISidebarPane } from '@/core/sidebar';
export declare class SidebarBarService implements ISidebar {
    selected: string;
    panes: ISidebarPane[];
    constructor(panes?: ISidebarPane[], selected?: string);
    onSelect(key: string): void;
}
