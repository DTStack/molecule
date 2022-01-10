import { localize } from 'monaco-editor/esm/vs/nls';

export interface IDisposable {
    dispose(): void;
}

export enum KeybindingWeight {
    EditorCore = 0,
    EditorContrib = 100,
    WorkbenchContrib = 200,
    BuiltinExtension = 300,
    ExternalExtension = 400,
}

export const CATEGORIES = {
    View: { value: localize('view', 'View'), original: 'View' },
    Help: { value: localize('help', 'Help'), original: 'Help' },
    Preferences: {
        value: localize('preferences', 'Preferences'),
        original: 'Preferences',
    },
    Developer: {
        value: localize(
            {
                key: 'developer',
                comment: [
                    'A developer on Code itself or someone diagnosing issues in Code',
                ],
            },
            'Developer'
        ),
        original: 'Developer',
    },
};
