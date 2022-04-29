import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from '@dtinsight/molecule-common';
import { ID_ACTIVITY_BAR } from '@dtinsight/molecule-common';

export const defaultClassName = prefixClaName(ID_ACTIVITY_BAR);
export const containerClassName = getBEMElement(defaultClassName, 'container');
export const normalItemsClassName = getBEMElement(defaultClassName, 'normal');
export const globalItemsClassName = getBEMElement(defaultClassName, 'global');
export const itemClassName = getBEMElement(defaultClassName, 'item');
export const itemCheckedClassName = getBEMModifier(itemClassName, 'checked');
export const itemDisabledClassName = getBEMModifier(itemClassName, 'disabled');
export const labelClassName = getBEMElement(defaultClassName, 'label');
export const indicatorClassName = getBEMElement(defaultClassName, 'indicator');
