import * as React from 'react';
import { memo } from 'react';
import { groupBreadcrumbClassName } from './base';
import { Breadcrumb, IBreadcrumbItemProps } from 'mo/components/breadcrumb';

export interface IEditorBreadcrumbProps {
    breadcrumbs?: IBreadcrumbItemProps[];
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
