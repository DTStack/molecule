import * as React from 'react';
import { IEditorAction } from 'mo/model';
import { IEditorController } from 'mo/controller/editor';
export interface IEditorActionProps extends IEditorAction {
    isActiveGroup: boolean;
}
declare function EditorAction(props: IEditorActionProps & IEditorController): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof EditorAction>;
export default _default;
