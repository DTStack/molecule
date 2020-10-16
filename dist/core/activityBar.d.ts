import * as React from 'react';
export interface IActivityBarItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    checked?: boolean;
    render?: () => any;
    onClick?: (e: React.MouseEvent, option: IActivityBarItem) => any;
}
export interface IActivityBar {
    data: IActivityBarItem[];
    selected: string;
    onSelect: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent, item: IActivityBarItem) => void;
    push: (data: IActivityBarItem | IActivityBarItem[]) => void;
    remove: (index: number) => void;
    update: () => void;
    get: (id: string) => void;
    render?: () => any;
}
