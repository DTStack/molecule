import 'reflect-metadata';
import { container } from 'tsyringe';
import * as React from 'react';
import { LocaleService } from './localeService';
import { LocaleSourceIdType } from './localization';

export interface ILocalizeProps {
    sourceKey: string | LocaleSourceIdType;
    defaultValue?: string;
}

export function localize(sourceKey: string, defaultValue: string): any {
    const localizedValue = container
        .resolve(LocaleService)
        .localize(sourceKey, defaultValue);
    return localizedValue;
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
