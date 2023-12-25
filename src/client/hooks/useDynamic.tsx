import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { isFunction, pickBy } from 'lodash-es';

import { Context } from '../context';

export default function useDynamic(token: string) {
    const { controllers, modules } = useContext(Context);
    const [element, setElement] = useState<React.ReactNode>(null);

    function lazyRequire() {
        if (!modules.has(token)) return Promise.resolve(null);
        return new Promise<JSX.Element>((resolve) => {
            const Entry = lazy(() => modules.get(token)!);
            const controller = controllers[token];
            resolve(
                <Suspense fallback={<div>loading</div>}>
                    <Entry {...pickBy(controller, isFunction)} />
                </Suspense>
            );
        });
    }

    useEffect(() => {
        lazyRequire().then(setElement);
    }, []);

    return element;
}
