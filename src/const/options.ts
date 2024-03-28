import type { editor } from 'mo/monaco';

export default {
    fontSize: 12,
    tabSize: 4,
    insertSpaces: true,
    detectIndentation: true,
    trimAutoWhitespace: true,
    largeFileOptimizations: true,
    wordBasedSuggestions: true,
    'semanticHighlighting.enabled': 'configuredByTheme',
    stablePeek: false,
    maxTokenizationLineLength: 20000,
    autoDetectHighContrast: true,
} as editor.IGlobalEditorOptions & editor.IEditorOptions;
