import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

import { esbuildPluginMonacoEditorNls } from './plugin';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        monacoEditorPlugin({
            forceBuildCDN: false,
            languageWorkers: ['editorWorkerService'],
        }),
        mockDevServerPlugin({
            include: 'app/mock/**/*.mock.{ts,js,cjs,mjs,json,json5}',
        }),
    ],
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            plugins: [esbuildPluginMonacoEditorNls()],
        },
    },
    server: {
        cors: false,
        proxy: {
            '^/api': {
                target: '',
            },
        },
    },
});
