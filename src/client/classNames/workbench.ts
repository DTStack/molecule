import { APP_PREFIX } from 'mo/const';

import { classNames, getBEMElement, getBEMModifier, getFontInMac, prefixClaName } from '.';

export const mainBenchClassName = prefixClaName('mainBench');
export const workbenchClassName = prefixClaName('workbench');
export const compositeBarClassName = prefixClaName('compositeBar');
export const appClassName = classNames(APP_PREFIX, getFontInMac());
export const workbenchWithHorizontalMenuBarClassName = getBEMModifier(
    workbenchClassName,
    'with-horizontal-menuBar'
);
export const withHiddenStatusBar = getBEMModifier(workbenchClassName, 'with-hidden-statusBar');
export const displayActivityBarClassName = getBEMElement(workbenchClassName, 'display-activityBar');
