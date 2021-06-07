import 'reflect-metadata';
import { container } from 'tsyringe';
import * as React from 'react';
import { LocaleService } from './localeService';

export interface ILocalizeProps {
    id: string;
    defaultValue?: string;
}

export function localize(id: string, defaultValue: string): any {
    const localizedValue = container
        .resolve(LocaleService)
        .localize(id, defaultValue);
    return localizedValue;
}

/**
 * @Deprecated Localize by react component not work correct currently.
 */
export class Localize extends React.PureComponent<ILocalizeProps> {
    state = { locale: '' };
    constructor(props: ILocalizeProps) {
        super(props);
        this.state = {
            locale: props.id,
        };
    }

    private get localeService() {
        return container.resolve(LocaleService);
    }

    componentDidMount() {
        this.localeService.onChange((perv, next) => {
            this.setState({
                locale: next.id,
            });
        });
    }

    getValue = () => {
        const { id, defaultValue = '' } = this.props;
        return this.localeService
            ? this.localeService.localize(id, defaultValue)
            : defaultValue;
    };

    public render() {
        const localizedValue = this.getValue();
        console.log('Localize:', localizedValue);
        return localizedValue;
    }
}
