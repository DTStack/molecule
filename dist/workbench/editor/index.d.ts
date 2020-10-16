import './editor.scss';
import * as React from 'react';
import { IEditor } from '@/core/editor';
import { IEditorGroup } from '@/core/editor';
import { ITheme } from '@/core/theme';
interface IEditorProps extends IEditor {
    theme: ITheme;
}
export declare function renderGroups(groups: IEditorGroup[], theme: ITheme): JSX.Element | null;
export declare function Editor(props: IEditorProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Editor>;
export default _default;
