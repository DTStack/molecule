import type { IColorTheme, UniqueId } from 'mo/types';

export enum ColorThemeEvent {
    onChange = 'colorTheme.onChange',
}

export class ColorThemeModel {
    constructor(public data: IColorTheme[] = [], public current: UniqueId = '') {}
}
