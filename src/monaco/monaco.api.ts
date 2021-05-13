// eslint-disable-next-line no-var
var _a;

import { EditorOptions } from 'monaco-editor/esm/vs/editor/common/config/editorOptions.js';
import { createMonacoBaseAPI } from 'monaco-editor/esm/vs/editor/common/standalone/standaloneBase.js';
import { createMonacoEditorAPI } from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneEditor.js';
import { createMonacoLanguagesAPI } from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneLanguages.js';
import { globals } from 'monaco-editor/esm/vs/base/common/platform';
import { FormattingConflicts } from 'monaco-editor/esm/vs/editor/contrib/format/format.js';
// Set defaults for standalone editor
EditorOptions.wrappingIndent.defaultValue = 0 /* None */;
EditorOptions.glyphMargin.defaultValue = false;
EditorOptions.autoIndent.defaultValue = 3 /* Advanced */;
EditorOptions.overviewRulerLanes.defaultValue = 2;

// We need to register a formatter selector which simply picks the first available formatter.
// See https://github.com/microsoft/monaco-editor/issues/2327
FormattingConflicts.setFormatterSelector((formatter, document, mode) =>
    Promise.resolve(formatter[0])
);
const api = createMonacoBaseAPI();
api.editor = createMonacoEditorAPI();
api.languages = createMonacoLanguagesAPI();
export const CancellationTokenSource = api.CancellationTokenSource;
export const Emitter = api.Emitter;
export const KeyCode = api.KeyCode;
export const KeyMod = api.KeyMod;
export const Position = api.Position;
export const Range = api.Range;
export const Selection = api.Selection;
export const SelectionDirection = api.SelectionDirection;
export const MarkerSeverity = api.MarkerSeverity;
export const MarkerTag = api.MarkerTag;
export const Uri = api.Uri;
export const Token = api.Token;
export const editor = api.editor;
export const languages = api.languages;

if (
    ((_a = globals.MonacoEnvironment) === null || _a === void 0
        ? void 0
        : _a.globalAPI) ||
    (typeof define === 'function' && define.amd)
) {
    (<any>self).monaco = api;
}

if (
    typeof self.require !== 'undefined' &&
    typeof (self.require as any).config === 'function'
) {
    (self.require as any).config({
        ignoreDuplicateModules: [
            'vscode-languageserver-types',
            'vscode-languageserver-types/main',
            'vscode-languageserver-textdocument',
            'vscode-languageserver-textdocument/main',
            'vscode-nls',
            'vscode-nls/vscode-nls',
            'jsonc-parser',
            'jsonc-parser/main',
            'vscode-uri',
            'vscode-uri/index',
            'vs/basic-languages/typescript/typescript',
        ],
    });
}

(<any>self).MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        switch (label) {
            case 'css': {
                return './css.worker.js';
            }
            case 'typescript': {
                return './typescript.worker.js';
            }
            case 'javascript': {
                return './javascript.worker.js';
            }
            case 'html': {
                return './html.worker.js';
            }
            case 'json': {
                return './json.worker.js';
            }
            default: {
                return './editor.worker.js';
            }
        }
    },
};
