import * as React from 'react';
import { EditorEvent, IEditor } from 'mo/core/workbench/editor';
import { BaseProvider } from 'mo/provider/base';
import { editorService } from 'mo/main';
import { cloneInstance } from 'mo/common/utils';

const initialState = cloneInstance(editorService);
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
