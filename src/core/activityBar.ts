// import { ReactType } from '@/typings';
import * as React from 'react';

export interface IActivityBarData {
    id: string;
    name?: string;
    data?: any;
    // render?: <T>() => T;
    render?: () => any;
}

export interface IActivityBar {
    readonly data: IActivityBarData[];
    onSelect: (key: string, item: IActivityBarData) => void;
    onClick: (event: React.MouseEvent, item: IActivityBarData) => void;
    push: (data: IActivityBarData) => void;
    remove: (index: number) => void;
    update: () => void;
    get: (id: string) => void;
    // render?: <T>() => T;
    render?: () => any;

}
