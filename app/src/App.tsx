import { useEffect } from 'react';
import { create } from '@dtinsight/molecule';

import { TestExtension } from './extensions/testPane';

const instance = create({
    extensions: [TestExtension],
    defaultLocale: 'zh-CN',
});

export default function App() {
    useEffect(() => {
        instance.render(document.querySelector<HTMLElement>('#mo'));

        return () => {
            instance.dispose();
        };
    }, []);
    return <div id="mo" />;
}
