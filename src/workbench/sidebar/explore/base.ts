import { getBEMElement, getBEMModifier, prefixClaName } from 'mo/common/className';
import { ID_ACTIVITY_BAR, ID_SIDE_BAR, ID_EXPLORER } from 'mo/common/id';

export const defaultClassName = prefixClaName(ID_SIDE_BAR);
const defaultExplorerClassName = prefixClaName(ID_EXPLORER, defaultClassName);
const activityBarItemFloatClassName = getBEMModifier(getBEMElement(defaultExplorerClassName, ID_ACTIVITY_BAR), 'float')

export {
    defaultExplorerClassName,
    activityBarItemFloatClassName
}