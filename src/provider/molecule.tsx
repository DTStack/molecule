import React, { useLayoutEffect } from 'react';
import create, { IConfigProps } from './create';

export default function Provider({
    defaultLocale,
    extensions,
    children,
}: IConfigProps & { children: React.ReactElement }) {
    useLayoutEffect(() => {
        const instance = create({
            defaultLocale,
            extensions,
        });

        instance.render(children);
    }, []);

    return children;
}
