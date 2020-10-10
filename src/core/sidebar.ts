import * as React from 'react';

export interface ISidebarPane {
    id?: string;
    name?: string;
    render: () => React.ReactElement | undefined;
}

export interface ISidebar {
    selected: string;
    panes: ISidebarPane[];
    render?: () => React.ReactElement;
}
