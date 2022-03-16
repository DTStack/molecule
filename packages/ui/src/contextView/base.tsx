import {
    prefixClaName,
    getBEMElement,
    getBEMModifier,
} from '@dtinsight/molecule-common';

export const contextViewClass = prefixClaName('context-view');

export const contentClassName = getBEMElement(contextViewClass, 'content');

export const blockClassName = getBEMElement(contextViewClass, 'block');

export const shadowClassName = getBEMModifier(contextViewClass, 'shadow');
