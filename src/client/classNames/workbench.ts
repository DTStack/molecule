import { APP_PREFIX } from 'mo/const';

import { classNames, getBEMElement, getBEMModifier, getFontInMac, prefix } from '.';

export const mainBenchClassName = prefix('mainBench');
export const workbenchClassName = prefix('workbench');
export const compositeBarClassName = prefix('compositeBar');
export const appClassName = classNames(APP_PREFIX, getFontInMac());
export const workbenchWithHorizontalMenuBarClassName = getBEMModifier(
    workbenchClassName,
    'with-horizontal-menuBar'
);
export const withHiddenStatusBar = getBEMModifier(workbenchClassName, 'with-hidden-statusBar');
export const displayActivityBarClassName = getBEMElement(workbenchClassName, 'display-activityBar');
