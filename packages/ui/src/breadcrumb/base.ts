import { prefixClaName, getBEMElement } from '@dtinsight/molecule-common';

export const defaultBreadcrumbClassName = prefixClaName('breadcrumb');
export const breadcrumbItemClassName = getBEMElement(
    defaultBreadcrumbClassName,
    'item'
);
export const breadcrumbLabelClassName = getBEMElement(
    defaultBreadcrumbClassName,
    'label'
);
