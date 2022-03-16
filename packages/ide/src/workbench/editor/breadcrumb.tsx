import React from 'react';
import { memo } from 'react';
import { groupBreadcrumbClassName } from './base';
import { Breadcrumb, IBreadcrumbItemProps } from '@dtinsight/molecule-ui';

export interface IEditorBreadcrumbProps {
    breadcrumbs?: IBreadcrumbItemProps[];
}

function EditorBreadcrumb(props: IEditorBreadcrumbProps) {
    const { breadcrumbs = [] } = props;
    return (
        <div className={groupBreadcrumbClassName}>
            <Breadcrumb role="breadcrumb" routes={breadcrumbs} />
        </div>
    );
}

export default memo(EditorBreadcrumb);
