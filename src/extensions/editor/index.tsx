import { IExtensionService } from 'mo/services';
import { IExtension } from 'mo/model/extension';
// import molecule from 'mo';
// import { getEditorInitialActions, getEditorInitialMenu, IEditor } from 'mo/model';

function init() {
    // const state: IEditor = molecule.editor.getState();
    // molecule.editor.setState({
    //     ...state,
    //     actions: getEditorInitialActions(),
    //     menu: getEditorInitialMenu(),
    // });
}

export const ExtendsEditor: IExtension = {
    activate(extensionCtx: IExtensionService) {
        init();
    },
};
