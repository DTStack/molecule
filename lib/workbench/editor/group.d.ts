import { IEditorGroup } from 'mo/model';
import * as React from 'react';
import { IEditorController } from 'mo/controller/editor';
export interface IEditorGroupProps extends IEditorGroup {
    currentGroup?: IEditorGroup;
}
declare function EditorGroup(props: IEditorGroupProps & IEditorController): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof EditorGroup>;
export default _default;
