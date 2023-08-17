import React, { useEffect } from 'react';
import { create } from '@dtinsight/molecule';

const instance = create({
    extensions: [],
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
