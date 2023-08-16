import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { isFunction, pickBy } from 'lodash-es';
import type { IMoleculeContext } from 'mo/types';

import { Context } from '../context';

type Factory = ReturnType<Parameters<typeof lazy>[0]>;

export default function useSlots(token: keyof IMoleculeContext, factory?: Factory) {
    const { controllers } = useContext(Context);
    const [element, setElement] = useState<React.ReactNode>(null);

    function lazyRequire() {
        return new Promise<JSX.Element>((resolve) => {
            const Entry = lazy(() => factory || import(`../slots/${token}/index.js`));
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
