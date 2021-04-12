import * as React from 'react';
import { IBreadcrumbItem } from 'mo/components/breadcrumb';
export interface IEditorBreadcrumbProps {
    breadcrumbs?: IBreadcrumbItem[];
}
declare function EditorBreadcrumb(props: IEditorBreadcrumbProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof EditorBreadcrumb>;
export default _default;
