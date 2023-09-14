import { useEffect, useRef } from 'react';
import { create } from '@dtinsight/molecule';

import { TestExtension } from './extensions/testPane';

const instance = create({
    extensions: [TestExtension],
    defaultLocale: 'zh-CN',
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
