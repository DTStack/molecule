import type * as monaco from 'monaco-editor';
import { createOnigScanner, createOnigString, loadWASM } from 'vscode-oniguruma';
import { IRawTheme } from 'vscode-textmate';

import { rehydrateRegexps } from './configuration';
import { SimpleLanguageInfoProvider, TextMateGrammar } from './providers';
import { registerLanguages } from './register';

export type IGrammarTextMate = { language: string; path: string };

export default class Textmate {
    private provider?: SimpleLanguageInfoProvider;
    constructor(
        private languages: monaco.languages.ILanguageExtensionPoint[],
        private grammars: Record<string, IGrammarTextMate>,
        private onigurumPath: string
    ) {}

    // Taken from https://github.com/microsoft/vscode/blob/829230a5a83768a3494ebbc61144e7cde9105c73/src/vs/workbench/services/textMate/browser/textMateService.ts#L33-L40
    private async loadVSCodeOnigurumWASM(): Promise<Response | ArrayBuffer> {
        const response = await fetch(this.onigurumPath);
        const contentType = response.headers.get('content-type');
        if (contentType === 'application/wasm') {
            return response;
        }

        // Using the response directly only works if the server sets the MIME type 'application/wasm'.
        // Otherwise, a TypeError is thrown when using the streaming compiler.
        // We therefore use the non-streaming compiler :(.
        return await response.arrayBuffer();
    }

    private fetchGrammar = async (scopeName: string): Promise<TextMateGrammar> => {
        const { path } = this.grammars[scopeName];
        const uri = `/grammars/${path}`;
        const response = await fetch(uri);
        const grammar = await response.text();
        const type = path.endsWith('.json') ? 'json' : 'plist';
        return { type, grammar };
    };

    private fetchConfiguration = async (language: string): Promise<monaco.languages.LanguageConfiguration> => {
        const uri = `/configurations/${language}.json`;
        const response = await fetch(uri);
        const rawConfiguration = await response.text();
        return rehydrateRegexps(rawConfiguration);
    };
    async register(monaco: any, theme: IRawTheme) {
        const data = await this.loadVSCodeOnigurumWASM();
        await loadWASM(data);
        const onigLib = Promise.resolve({
            createOnigScanner,
            createOnigString,
        });
        this.provider = new SimpleLanguageInfoProvider({
            grammars: this.grammars,
            fetchGrammar: this.fetchGrammar,
            configurations: this.languages.map((language) => language.id),
            fetchConfiguration: this.fetchConfiguration,
            theme,
            onigLib,
            monaco,
        });
        registerLanguages(this.languages, (language: string) => this.provider!.fetchLanguageInfo(language), monaco);
    }

    setTheme(theme: IRawTheme) {
        this.provider?.setTheme(theme);
    }

    injectCSS() {
        this.provider?.injectCSS();
    }
}
