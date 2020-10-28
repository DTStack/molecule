import * as React from 'react';
import { EditorEvent, IEditor } from 'mo/core/workbench/editor';
import { BaseProvider } from 'mo/provider/base';
import { editor } from 'mo/services';

const initialState = editor;
export const EditorCtx = React.createContext<IEditor>(initialState);

export class EditorProvider extends BaseProvider<any, IEditor> {
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
