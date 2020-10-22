import * as React from 'react';
import { EditorEvent } from 'mo/core/workbench/editor';
import { BaseProvider } from 'mo/provider/base';
import { moleculeService } from 'mo/main';

const initialState = {
    editor: moleculeService.editor,
};

type IEditorState = typeof initialState;

export const EditorCtx = React.createContext<IEditorState>(initialState);

export class EditorProvider extends BaseProvider<any, IEditorState> {
    constructor(props) {
        super(props);
        this.register([
            EditorEvent.OpenTab,
        ]);
        this.state = initialState;
    }

    public render() {
        return (
            <EditorCtx.Provider
                value={this.state}>
                { this.props.children }
            </EditorCtx.Provider>
        );
    }
}
