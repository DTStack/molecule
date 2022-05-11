import React, { useEffect } from 'react';
import create, { IConfigProps } from './create';

export default function Provider({
    defaultLocale,
    extensions,
    children,
}: IConfigProps & { children: React.ReactElement }) {
    useEffect(() => {
        const instance = create({
            defaultLocale,
            extensions,
        });

        instance.render(children);
    }, []);

    return children;
}
