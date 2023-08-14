import { lazy, Suspense, useEffect, useState } from 'react';

type Factory = ReturnType<Parameters<typeof lazy>[0]>;

export default function useSlots(factory: Factory) {
    const [element, setElement] = useState<React.ReactNode>(null);

    function lazyRequire() {
        return new Promise<JSX.Element>((resolve) => {
            const Entry = lazy(() => factory);
            resolve(
                <Suspense fallback={<div>loading</div>}>
                    <Entry />
                </Suspense>
            );
        });
    }

    useEffect(() => {
        lazyRequire().then(setElement);
    }, []);

    return element;
}
