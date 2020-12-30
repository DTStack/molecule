import { activityBarService, IActivityBarItem } from 'mo';
import * as monaco from 'monaco-editor';
import { editorService } from 'mo';
import { IEditorGroup } from 'mo/model';

function clickColorTheme(e) {
    // const editorState = editorService.getState();
    console.log('globalSettings: clickColorTheme:', e);
}

function clickCommandPalette(e) {
    const editorState = editorService.getState();
    const editorGroup = editorState.current as IEditorGroup<monaco.editor.IStandaloneCodeEditor>;
    if (editorGroup) {
        editorGroup.editorInstance?.trigger(
            'anyString',
            'editor.action.quickCommand',
            null
        );
    }
    console.log('globalSettings: clickCommandPalette:', monaco);
}

function clickSettings(e) {
    console.log('globalSettings: clickSettings:', e);
}

export function initGlobalActivityBars() {
    const globalSettings: IActivityBarItem = {
        id: 'global-settings',
        name: 'Settings',
        iconName: 'codicon-settings-gear',
        type: 'global',
        contextMenu: [
            {
                id: 'CommandPalette',
                name: 'Command Palette...',
                onClick: clickCommandPalette,
            },
            {
                id: 'Settings',
                name: 'Settings',
                onClick: clickSettings,
            },
            {
                id: 'ColorTheme',
                name: 'Color Theme',
                onClick: clickColorTheme,
            },
        ],
    };

    const globalUserAccount: IActivityBarItem = {
        id: 'global-Account',
        name: 'Account',
        iconName: 'codicon-account',
        type: 'global',
    };

    activityBarService.push(globalUserAccount);
    activityBarService.push(globalSettings);
}
