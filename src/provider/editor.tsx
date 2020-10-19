import * as React from 'react';
import { Molecule } from 'mo/provider/molecule';
import { IEditor, EditorEvent } from 'mo/core/editor';
import { BaseProvider } from 'mo/provider/base';

export const EditorCtx = React.createContext<IEditor>(Molecule.editor);

export class EditorProvider extends BaseProvider<any, IEditor> {
    constructor(props) {
        super(props);
        this.events = [
            EditorEvent.CloseTab,
            EditorEvent.OpenTab,
        ];
        this.state = Molecule.editor;
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
