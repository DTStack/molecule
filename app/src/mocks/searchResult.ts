import { SearchResultItem } from '../../../esm/types';

export const mockSearchResult: SearchResultItem[] = [
    {
        id: '1',
        name: 'app',
        fileType: 'Folder',
        children: [
            {
                id: '1-1',
                name: 'public',
                fileType: 'Folder',
                children: [
                    {
                        id: '1-1-1',
                        name: 'config.js',
                        fileType: 'File',
                        data: {
                            language: 'javascript',
                            breadcrumb: ['app', 'public'],
                            value: `/**
* 应用全局配置文件
*/
window.APP_CONF = {
    name: 'Molecule', // 应用名字
};
                           `,
                        },
                    },
                ],
            },
            {
                id: '1-2',
                name: 'src',
                fileType: 'Folder',
                children: [
                    {
                        id: '1-2-1',
                        name: 'components',
                        fileType: 'Folder',
                        children: [
                            {
                                id: '1-2-1-1',
                                name: 'testPane.tsx',
                                fileType: 'File',
                                data: {
                                    language: 'typescript',
                                    breadcrumb: ['app', 'src', 'components'],
                                    value: `function randomId() {
    return Math.round(Math.random() * 1000);
}`,
                                },
                            },
                        ],
                    },
                    {
                        id: '1-2-2',
                        name: 'extensions',
                        fileType: 'Folder',
                        children: [
                            {
                                id: '1-2-2-1',
                                name: 'TestExtension.tsx',
                                fileType: 'File',
                                data: {
                                    language: 'typescript',
                                    breadcrumb: ['app', 'src', 'extensions'],
                                    value: `function TestExtension() {
    return Math.round(Math.random() * 1000);
}`,
                                },
                            },
                        ],
                    },
                    {
                        id: '1-2-3',
                        name: 'mocks',
                        fileType: 'Folder',
                        children: [
                            {
                                id: '1-2-3-1',
                                name: 'searchResult.ts',
                                fileType: 'File',
                                data: {
                                    language: 'typescript',
                                    breadcrumb: ['app', 'src', 'mocks'],
                                    value: `function searchResult() {
    return Math.round(Math.random() * 1000);
}`,
                                },
                            },
                        ],
                    },
                    {
                        id: '1-2-4',
                        name: 'App.tsx',
                        fileType: 'File',
                        data: {
                            language: 'typescript',
                            breadcrumb: ['app', 'src'],
                            value: `import { useEffect, useRef } from 'react';
import { create } from '@dtinsight/molecule';
import { TestExtension } from './extensions/TestExtension';

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
`,
                        },
                    },
                    {
                        id: '1-2-5',
                        name: 'main.tsx',
                        fileType: 'File',
                        data: {
                            language: 'typescript',
                            breadcrumb: ['app', 'src'],
                            value: `import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
`,
                        },
                    },
                ],
            },
            {
                id: '1-3',
                name: 'index.html',
                fileType: 'File',
                data: {
                    language: 'html',
                    breadcrumb: ['app'],
                    value: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="/molecule.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Molecule Dev Playground</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>
</html>
`,
                },
            },
            {
                id: '1-4',
                name: 'tsconfig.json',
                fileType: 'File',
                data: {
                    language: 'json',
                    breadcrumb: ['app'],
                    value: `{
    "compilerOptions": {
        "lib": ["es5", "es6", "es7", "es2017", "dom", "ESNext"],
        "target": "ESNext",
        "allowJs": true,
        "moduleResolution": "node",
        "jsx": "react-jsx",
        "module": "ESNext",
        "baseUrl": "./src",
        "strict": true
    }
}
`,
                },
            },
            {
                id: '1-5',
                name: 'vite.config.ts',
                fileType: 'File',
                data: {
                    language: 'typescript',
                    breadcrumb: ['app'],
                    value: `import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        monacoEditorPlugin({
            forceBuildCDN: true,
        }),
    ],
});
`,
                },
            },
        ],
    },
];
