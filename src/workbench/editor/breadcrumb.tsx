import * as React from 'react';
import { memo } from 'react';
import { groupBreadcrumbClassName } from './base';
import { Breadcrumb, IBreadcrumbItem } from 'mo/components/breadcrumb';

export interface IEditorBreadcrumbProps {
    breadcrumbs?: IBreadcrumbItem[];
}

function EditorBreadcrumb(props: IEditorBreadcrumbProps) {
    const { breadcrumbs = [] } = props;
    return (
        <div className={groupBreadcrumbClassName}>
            <Breadcrumb routes={breadcrumbs} />
        </div>
    );
}

export default memo(EditorBreadcrumb);
