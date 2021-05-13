/**
 * This module is overwrite the original monaco-editor/esm/vs/editor/editor.main.js
 */
import 'monaco-editor/esm/vs/editor/editor.all';
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp';
import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard';
import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess';

/**
 * TODO Disable the default GotoLineQuickAccess and GotoSymbolQuickAccess services temporarily
 */
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess';

import 'monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch';
import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast';

/**
 * The original editor.api.js file will automatic load standalone quickAccess services other services, so there customize the api
 * export * from 'monaco-editor/esm/vs/editor/editor.api.js';
 */
export * from './monaco.api';
