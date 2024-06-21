import { useEffect, useRef } from 'react';
import { create } from '@dtinsight/molecule';

const instance = create({
    extensions: import('./extensions/TestExtension').then(({ TestExtension }) => [TestExtension]),
    defaultLocale: 'zh-CN',
    defaultColorTheme: 'Default Dark+',
    onigurumPath: '/wasm/onig.wasm',
});

export default function App() {
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
        instance.render(container.current);

        return () => {
            instance.dispose();
        };
    }, []);
    return <div ref={container} />;
}
