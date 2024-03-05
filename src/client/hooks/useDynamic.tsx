import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { isFunction, pickBy } from 'lodash-es';

import { Progress } from '../components';
import { Context } from '../context';

export default function useDynamic(token: string) {
    const { controllers, modules } = useContext(Context);
    const [element, setElement] = useState<React.ReactNode>(null);

    function lazyRequire() {
        if (!modules.has(token)) return Promise.resolve(null);
        const Comp = modules.get(token);
        if (Comp === null || Comp === undefined) return Promise.resolve(null);
        return new Promise<JSX.Element>((resolve) => {
            const Entry = lazy(() => Comp);
            const controller = controllers[token];

            // Each controller extends GlobalEvent
            const entryProps = {
                ...pickBy(controller, isFunction),
                emit: controller.emit,
                subscribe: controller.subscribe,
                unsubscribe: controller.unsubscribe,
                count: controller.count,
            };

            resolve(
                <Suspense fallback={<Progress active />}>
                    <Entry {...entryProps} />
                </Suspense>
            );
        });
    }

    useEffect(() => {
        lazyRequire().then(setElement);
    }, []);

    return element;
}
