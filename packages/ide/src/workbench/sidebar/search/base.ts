import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from '@dtinsight/molecule-common';

const emptyTextValueClassName = getBEMModifier(
    getBEMElement(prefixClaName('search'), 'treeNode'),
    'empty'
);

const matchSearchValueClassName = getBEMModifier(
    getBEMElement(prefixClaName('search'), 'treeNode'),
    'match'
);

const deleteSearchValueClassName = getBEMModifier(
    getBEMElement(prefixClaName('search'), 'treeNode'),
    'delete'
);

const replaceSearchValueClassName = getBEMModifier(
    getBEMElement(prefixClaName('search'), 'treeNode'),
    'replace'
);

const treeContentClassName = getBEMElement(prefixClaName('search'), 'tree');

export {
    matchSearchValueClassName,
    emptyTextValueClassName,
    deleteSearchValueClassName,
    replaceSearchValueClassName,
    treeContentClassName,
};
