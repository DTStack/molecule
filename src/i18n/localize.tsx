import 'reflect-metadata';
import { container } from 'tsyringe';
import React from 'react';
import { LocaleService } from './localeService';
import { LocaleSourceIdType } from './localization';

export interface ILocalizeProps {
    sourceKey: string | LocaleSourceIdType;
    defaultValue?: string;
}

/**
 * Returns the international text located by source key，or the default value if it is not find
 * For examples:
 * ```ts
 * localize('id','default value'); // hello ${i}, ${i}
 * localize('id','default value', 'world'); // hello world, ${i}
 * localize('id','default value', 'world', 'molecule'); // hello world, molecule
 * ```
 * @param sourceKey The key value located in the source international text
 * @param defaultValue The default value to be used when not find the international text
 * @param args If provided, it will used as the values to be replaced in the international text
 * @returns
 */
export function localize(
    sourceKey: string,
    defaultValue: string,
    ...args: string[]
): any {
    return container
        .resolve(LocaleService)
        .localize(sourceKey, defaultValue, ...args);
}

/**
 * @Deprecated Localize by react component not work correct currently.
 */
export class Localize extends React.PureComponent<ILocalizeProps> {
    state = { localeId: '' };
    constructor(props: ILocalizeProps) {
        super(props);
    }

    componentDidMount() {
        this.update(this.localeService.getCurrentLocale()?.id);
        this.localeService.onChange((perv, next) => {
            this.update(next.id);
        });
    }

    private update(localeId?: string) {
        this.setState({
            localeId: localeId,
        });
    }

    private get localeService() {
        return container.resolve(LocaleService);
    }

    getValue = () => {
        const { sourceKey, defaultValue = '' } = this.props;
        return this.localeService
            ? this.localeService.localize(sourceKey, defaultValue)
            : defaultValue;
    };

    public render() {
        const localizedValue = this.getValue();
        return localizedValue;
    }
}
