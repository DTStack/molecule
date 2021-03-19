import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';

const matchSearchValueClassName = getBEMModifier(
    getBEMElement(prefixClaName('search'), 'treeNode'),
    'match'
);

export { matchSearchValueClassName };
